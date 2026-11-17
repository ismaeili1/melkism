import { prisma } from '@/lib/prisma';

// ==========================================
// ۱. املاک و آگهی‌ها (Properties)
// ==========================================
export async function getProperties(locale: string = 'fa') {
  try {
    const properties = await prisma.property.findMany({
      include: {
        translations: { where: { locale } },
      },
      orderBy: { createdAt: 'desc' },
    });

    return properties.map((prop) => ({
      id: prop.id,
      slug: prop.slug,
      price: prop.price,
      area: prop.area,
      province: prop.province,
      city: prop.city,
      imageUrl: prop.imageUrl,
      gallery: prop.gallery,
      title: prop.translations[0]?.title || '',
      description: prop.translations[0]?.description || '',
      address: prop.translations[0]?.address || '',
    }));
  } catch (error) {
    console.error("خطا در دریافت املاک:", error);
    return [];
  }
}

export async function getFeaturedProperties(locale: string = 'fa') {
  try {
    const props = await getProperties(locale);
    if (props.length > 0) return props.slice(0, 4);

    // Fallback امن
    return [
      {
        id: "P-101",
        title: locale === 'en' ? "Luxury Residential Tower in Elahieh" : "برج مسکونی لوکس الهیه",
        slug: "elahieh-luxury-tower",
        price: "۱۲۵,۰۰۰,۰۰۰,۰۰۰ تومان",
        area: "۳۲۰ متر مربع",
        city: "تهران",
        imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00"
      }
    ];
  } catch (error) {
    console.error("خطا در دریافت املاک ویژه:", error);
    return [];
  }
}

export async function getPropertyBySlug(slug: string, locale: string = 'fa') {
  try {
    const property = await prisma.property.findUnique({
      where: { slug },
      include: {
        translations: { where: { locale } },
      },
    });

    if (!property) return null;

    return {
      ...property,
      title: property.translations[0]?.title || '',
      description: property.translations[0]?.description || '',
      address: property.translations[0]?.address || '',
    };
  } catch (error) {
    console.error("خطا در دریافت ملک با اسلاگ:", error);
    return null;
  }
}

// ==========================================
// ۲. اخبار و مقالات (News)
// ==========================================
export async function getNewsList(locale: string = 'fa') {
  try {
    const news = await prisma.news.findMany({
      where: { published: true },
      include: {
        translations: { where: { locale } },
      },
      orderBy: { createdAt: 'desc' },
    });

    if (news.length > 0) {
      return news.map((item) => ({
        id: item.id,
        slug: item.slug,
        category: item.category,
        imageUrl: item.imageUrl,
        createdAt: item.createdAt,
        title: item.translations[0]?.title || '',
        summary: item.translations[0]?.summary || '',
        content: item.translations[0]?.content || '',
      }));
    }

    // Fallback نمونه در صورت خالی بودن دیتابیس
    return [
      {
        id: "1",
        title: locale === 'en' ? "Comprehensive Housing Market Analysis" : "تحلیل جامع بازار مسکن و پیش‌بینی قیمت‌ها در پاییز ۱۴۰۵",
        slug: "housing-market-analysis-1405",
        summary: locale === 'en' ? "Reviewing the latest trends in land and housing prices." : "بررسی آخرین تحولات قیمت زمین و مسکن در کلان‌شهرها.",
        category: locale === 'en' ? "Macro News" : "اخبار کلان",
        imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
        createdAt: "۱۴۰۵/۰۷/۱۵"
      }
    ];
  } catch (error) {
    console.error("خطا در دریافت لیست اخبار:", error);
    return [];
  }
}

export async function getNewsBySlug(slug: string, locale: string = 'fa') {
  try {
    const item = await prisma.news.findUnique({
      where: { slug },
      include: {
        translations: { where: { locale } },
      },
    });

    if (!item) return null;

    return {
      ...item,
      title: item.translations[0]?.title || '',
      summary: item.translations[0]?.summary || '',
      content: item.translations[0]?.content || '',
    };
  } catch (error) {
    console.error("خطا در دریافت خبر با اسلاگ:", error);
    return null;
  }
}

// ==========================================
// ۳. گزارش‌های هوش بازار (Market Reports)
// ==========================================
export async function getMarketReports(locale: string = 'fa') {
  try {
    const reports = await prisma.marketReport.findMany({
      include: {
        translations: { where: { locale } },
      },
      orderBy: { createdAt: 'desc' },
    });

    return reports.map((rep) => ({
      id: rep.id,
      slug: rep.slug,
      marketIndex: rep.marketIndex,
      region: rep.region,
      pdfLink: rep.pdfLink,
      imageUrl: rep.imageUrl,
      title: rep.translations[0]?.title || '',
      description: rep.translations[0]?.description || '',
    }));
  } catch (error) {
    console.error("خطا در دریافت گزارش‌های بازار:", error);
    return [];
  }
}

export async function getMarketStats(locale: string = 'fa') {
  return {
    averagePricePerMeter: "۱۸۵,۰۰۰,۰۰۰ تومان",
    monthlyGrowth: "+۴.۲٪",
    activeDealsCount: "۱,۴۲۰ معامله موفق",
    indexStatus: "صعودی و باثبات"
  };
}

// ==========================================
// ۴. قوانین و مقررات (Regulations)
// ==========================================
export async function getRegulations(locale: string = 'fa') {
  try {
    const regulations = await prisma.regulation.findMany({
      include: {
        translations: { where: { locale } },
      },
      orderBy: { createdAt: 'desc' },
    });

    return regulations.map((reg) => ({
      id: reg.id,
      codeNumber: reg.codeNumber,
      category: reg.category,
      imageUrl: reg.imageUrl,
      title: reg.translations[0]?.title || '',
      fullText: reg.translations[0]?.fullText || '',
    }));
  } catch (error) {
    console.error("خطا در دریافت قوانین:", error);
    return [];
  }
}

// ==========================================
// ۵. کتابخانه تخصصی (Library Documents)
// ==========================================
export async function getLibraryDocuments(locale: string = 'fa') {
  try {
    const docs = await prisma.libraryDocument.findMany({
      include: {
        translations: { where: { locale } },
      },
      orderBy: { createdAt: 'desc' },
    });

    return docs.map((doc) => ({
      id: doc.id,
      slug: doc.slug,
      author: doc.author,
      category: doc.category,
      downloadUrl: doc.downloadUrl,
      imageUrl: doc.imageUrl,
      title: doc.translations[0]?.title || '',
      summary: doc.translations[0]?.summary || '',
    }));
  } catch (error) {
    console.error("خطا در دریافت اسناد کتابخانه:", error);
    return [];
  }
}

// ==========================================
// ۶. متخصصین ملکیست (Expert Profiles)
// ==========================================
export async function getExperts(locale: string = 'fa') {
  try {
    const experts = await prisma.expertProfile.findMany({
      include: {
        translations: { where: { locale } },
      },
      orderBy: { rating: 'desc' },
    });

    return experts.map((exp) => ({
      id: exp.id,
      licenseNumber: exp.licenseNumber,
      city: exp.city,
      mobile: exp.mobile,
      isVip: exp.isVip,
      avatarUrl: exp.avatarUrl,
      rating: exp.rating,
      name: exp.translations[0]?.name || '',
      bio: exp.translations[0]?.bio || '',
      specialty: exp.translations[0]?.specialty || '',
    }));
  } catch (error) {
    console.error("خطا در دریافت متخصصین:", error);
    return [];
  }
}

// ==========================================
// ۷. بازار ملکیست (Market Items)
// ==========================================
export async function getMarketItems(locale: string = 'fa') {
  try {
    const items = await prisma.marketItem.findMany({
      include: {
        translations: { where: { locale } },
      },
      orderBy: { createdAt: 'desc' },
    });

    return items.map((item) => ({
      id: item.id,
      slug: item.slug,
      category: item.category,
      price: item.price,
      supplier: item.supplier,
      city: item.city,
      imageUrl: item.imageUrl,
      title: item.translations[0]?.title || '',
      description: item.translations[0]?.description || '',
    }));
  } catch (error) {
    console.error("خطا در دریافت اقلام بازار:", error);
    return [];
  }
}