'use server';

import * as XLSX from "xlsx";

export async function generateExcelTemplate(type: string) {
  let headers: string[] = [];
  let filename = "template.xlsx";

  if (type === "news") {
    headers = ["title", "slug", "summary", "content", "category", "image_url"];
    filename = "Melkism_News_Template.xlsx";
  } else if (type === "market") {
    headers = ["title", "slug", "market_index", "region", "content", "pdf_link", "image_url"];
    filename = "Melkism_MarketHub_Template.xlsx";
  } else if (type === "rules") {
    headers = ["title", "code_number", "category", "summary", "full_text", "image_url"];
    filename = "Melkism_Regulations_Template.xlsx";
  } else if (type === "properties") {
    headers = ["title", "slug", "price", "area", "province", "city", "address", "description", "image_url"];
    filename = "Melkism_Properties_Template.xlsx";
  } else if (type === "library") {
    headers = ["title", "slug", "author", "category", "summary", "download_url", "image_url"];
    filename = "Melkist_Library_Template.xlsx";
  } else if (type === "experts") {
    headers = ["full_name", "specialty", "license_number", "city", "mobile", "bio", "is_vip", "avatar_url"];
    filename = "Melkist_Experts_VIP_Template.xlsx";
  } else if (type === "market_items") {
    headers = ["title", "slug", "category", "price", "supplier", "city", "description", "image_url"];
    filename = "Melkist_Market_Items_Template.xlsx";
  }

  const worksheet = XLSX.utils.aoa_to_sheet([headers]);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Template");

  const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "base64" });
  
  return {
    success: true,
    filename,
    base64: excelBuffer,
  };
}