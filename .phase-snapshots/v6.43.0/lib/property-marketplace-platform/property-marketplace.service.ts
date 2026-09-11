import {
  PROPERTY_MARKETPLACE_DEFAULT_LIMIT,
  PROPERTY_MARKETPLACE_MAX_LIMIT,
} from "./property-marketplace.constants";

import type {
  PropertyListing,
  PropertyMarketplaceQuery,
  PropertyMarketplaceResponse,
} from "./property-marketplace.types";

const LISTINGS: PropertyListing[] = [
  {
    id: "pm-1001",
    title: "Modern Apartment - Stockholm",
    description:
      "Contemporary residential property suitable for urban living and investment.",
    listingType: "sale",
    category: "apartment",
    condition: "excellent",
    availability: "available",
    verification: "verified",
    location: {
      country: "Sweden",
      city: "Stockholm",
      district: "Sodermalm",
    },
    areaM2: 92,
    bedrooms: 3,
    bathrooms: 2,
    price: 7850000,
    currency: "SEK",
    publishedAt: "2026-08-28T09:00:00.000Z",
    featured: true,
  },
  {
    id: "pm-1002",
    title: "Villa - Gothenburg",
    description:
      "Family villa with garden and long-term residential potential.",
    listingType: "sale",
    category: "villa",
    condition: "good",
    availability: "available",
    verification: "trusted",
    location: {
      country: "Sweden",
      city: "Gothenburg",
      district: "Hisingen",
    },
    areaM2: 184,
    bedrooms: 5,
    bathrooms: 2,
    price: 6490000,
    currency: "SEK",
    publishedAt: "2026-08-26T10:00:00.000Z",
    featured: true,
  },
  {
    id: "pm-1003",
    title: "Office Asset - Dubai",
    description:
      "Business property for office use and professional services.",
    listingType: "investment",
    category: "office",
    condition: "excellent",
    availability: "available",
    verification: "verified",
    location: {
      country: "United Arab Emirates",
      city: "Dubai",
      district: "Business Bay",
    },
    areaM2: 240,
    price: 4850000,
    currency: "AED",
    publishedAt: "2026-08-24T08:00:00.000Z",
    featured: true,
  },
  {
    id: "pm-1004",
    title: "Retail Unit - Istanbul",
    description:
      "Street-facing retail property positioned for commercial activity.",
    listingType: "lease",
    category: "retail",
    condition: "good",
    availability: "available",
    verification: "pending",
    location: {
      country: "Türkiye",
      city: "Istanbul",
      district: "Kadikoy",
    },
    areaM2: 138,
    price: 175000,
    currency: "TRY",
    publishedAt: "2026-08-22T14:00:00.000Z",
    featured: false,
  },
  {
    id: "pm-1005",
    title: "Urban Land - Tehran",
    description:
      "Development-oriented urban land suitable for planning and investment analysis.",
    listingType: "investment",
    category: "land",
    condition: "new",
    availability: "available",
    verification: "verified",
    location: {
      country: "Iran",
      city: "Tehran",
      district: "District 11",
    },
    areaM2: 680,
    price: 92000000000,
    currency: "IRR",
    publishedAt: "2026-08-20T11:00:00.000Z",
    featured: true,
  },
  {
    id: "pm-1006",
    title: "Mixed-Use Property - Malmo",
    description:
      "Mixed-use asset combining residential and professional service potential.",
    listingType: "sale",
    category: "mixed-use",
    condition: "excellent",
    availability: "available",
    verification: "trusted",
    location: {
      country: "Sweden",
      city: "Malmo",
      district: "Vastra Hamnen",
    },
    areaM2: 410,
    bedrooms: 4,
    bathrooms: 3,
    price: 11200000,
    currency: "SEK",
    publishedAt: "2026-08-18T12:00:00.000Z",
    featured: false,
  },
  {
    id: "pm-1007",
    title: "Architectural Villa - Antalya",
    description:
      "Design-led residential property with strong architectural character.",
    listingType: "sale",
    category: "villa",
    condition: "excellent",
    availability: "available",
    verification: "verified",
    location: {
      country: "Türkiye",
      city: "Antalya",
      district: "Konyaalti",
    },
    areaM2: 265,
    bedrooms: 5,
    bathrooms: 4,
    price: 18500000,
    currency: "TRY",
    publishedAt: "2026-08-16T15:00:00.000Z",
    featured: false,
  },
  {
    id: "pm-1008",
    title: "Research Office - Stockholm",
    description:
      "Professional workspace suitable for research teams and consulting.",
    listingType: "rent",
    category: "office",
    condition: "excellent",
    availability: "available",
    verification: "trusted",
    location: {
      country: "Sweden",
      city: "Stockholm",
      district: "Kista",
    },
    areaM2: 320,
    price: 72000,
    currency: "SEK",
    publishedAt: "2026-08-14T09:30:00.000Z",
    featured: false,
  },
];

function normalize(value: string | undefined): string {
  return value?.trim().toLocaleLowerCase() ?? "";
}

function matchesText(
  listing: PropertyListing,
  query: string,
): boolean {
  if (!query) {
    return true;
  }

  const haystack = [
    listing.title,
    listing.description,
    listing.location.country,
    listing.location.city,
    listing.location.district,
    listing.category,
    listing.listingType,
  ]
    .join(" ")
    .toLocaleLowerCase();

  return haystack.includes(query);
}

export function searchPropertyMarketplace(
  input: PropertyMarketplaceQuery = {},
): PropertyMarketplaceResponse {
  const query = normalize(input.query);

  const requestedLimit =
    typeof input.limit === "number" &&
    Number.isFinite(input.limit)
      ? Math.floor(input.limit)
      : PROPERTY_MARKETPLACE_DEFAULT_LIMIT;

  const limit = Math.min(
    Math.max(requestedLimit, 1),
    PROPERTY_MARKETPLACE_MAX_LIMIT,
  );

  const filtered = LISTINGS.filter((listing) => {
    if (!matchesText(listing, query)) {
      return false;
    }

    if (
      input.listingType &&
      listing.listingType !== input.listingType
    ) {
      return false;
    }

    if (
      input.category &&
      listing.category !== input.category
    ) {
      return false;
    }

    if (
      input.city &&
      normalize(listing.location.city) !==
        normalize(input.city)
    ) {
      return false;
    }

    if (
      typeof input.minPrice === "number" &&
      listing.price < input.minPrice
    ) {
      return false;
    }

    if (
      typeof input.maxPrice === "number" &&
      listing.price > input.maxPrice
    ) {
      return false;
    }

    if (
      typeof input.minAreaM2 === "number" &&
      listing.areaM2 < input.minAreaM2
    ) {
      return false;
    }

    if (
      typeof input.maxAreaM2 === "number" &&
      listing.areaM2 > input.maxAreaM2
    ) {
      return false;
    }

    if (
      input.verifiedOnly &&
      listing.verification !== "verified" &&
      listing.verification !== "trusted"
    ) {
      return false;
    }

    if (
      input.featuredOnly &&
      !listing.featured
    ) {
      return false;
    }

    return true;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (a.featured !== b.featured) {
      return a.featured ? -1 : 1;
    }

    return (
      new Date(b.publishedAt).getTime() -
      new Date(a.publishedAt).getTime()
    );
  });

  return {
    ok: true,
    source: "property-marketplace-foundation",
    query: {
      ...input,
      limit,
    },
    total: sorted.length,
    listings: sorted.slice(0, limit),
  };
}

export function getPropertyMarketplaceFeatured(): PropertyListing[] {
  return LISTINGS
    .filter((listing) => listing.featured)
    .slice(0, 6);
}
