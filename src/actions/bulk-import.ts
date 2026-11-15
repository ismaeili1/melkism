'use server';

import { prisma } from "@/lib/prisma";
import * as XLSX from "xlsx";
import { revalidatePath } from "next/cache";

export async function handleExcelBulkImport(formData: FormData) {
  try {
    const file = formData.get("excelFile") as File;
    const contentType = formData.get("contentType") as string;

    if (!file) return { success: false, error: "لطفاً یک فایل اکسل انتخاب کنید." };

    const buffer = await file.arrayBuffer();
    const workbook = XLSX.read(buffer, { type: "array" });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const rows: any[] = XLSX.utils.sheet_to_json(sheet);

    if (rows.length === 0) return { success: false, error: "فایل اکسل خالی است." };

    let importedCount = 0;

    if (contentType === "library") {
      for (const row of rows) {
        if (!row.title || !row.slug) continue;
        await prisma.libraryDocument.upsert({
          where: { slug: row.slug },
          update: { title: row.title, author: row.author, category: row.category, summary: row.summary, downloadUrl: row.download_url },
          create: { title: row.title, slug: row.slug, author: row.author, category: row.category, summary: row.summary, downloadUrl: row.download_url },
        });
        importedCount++;
      }
      revalidatePath("/[locale]/library");
    } 
    else if (contentType === "experts") {
      for (const row of rows) {
        if (!row.full_name || !row.specialty) continue;
        await prisma.expertProfile.upsert({
          where: { licenseNumber: row.license_number || `EXP-${Math.random()}` },
          update: { fullName: row.full_name, specialty: row.specialty, city: row.city || "تهران", mobile: row.mobile, bio: row.bio },
          create: { fullName: row.full_name, specialty: row.specialty, licenseNumber: row.license_number, city: row.city || "تهران", mobile: row.mobile, bio: row.bio },
        });
        importedCount++;
      }
      revalidatePath("/[locale]/experts");
    }
    else if (contentType === "market_items") {
      for (const row of rows) {
        if (!row.title || !row.slug) continue;
        await prisma.marketItem.upsert({
          where: { slug: row.slug },
          update: { title: row.title, category: row.category, price: parseFloat(row.price) || 0, supplier: row.supplier, city: row.city, description: row.description },
          create: { title: row.title, slug: row.slug, category: row.category, price: parseFloat(row.price) || 0, supplier: row.supplier, city: row.city, description: row.description },
        });
        importedCount++;
      }
      revalidatePath("/[locale]/market");
    }

    return { success: true, message: `با موفقیت ${importedCount} رکورد جدید از اکسل وارد و منتشر شد.` };
  } catch (error) {
    console.error("Excel Import Error:", error);
    return { success: false, error: "خطا در پردازش فایل اکسل." };
  }
}