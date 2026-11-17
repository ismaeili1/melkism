/*
  Warnings:

  - You are about to drop the column `translations` on the `ExpertProfile` table. All the data in the column will be lost.
  - You are about to drop the column `translations` on the `LibraryDocument` table. All the data in the column will be lost.
  - You are about to drop the column `translations` on the `MarketItem` table. All the data in the column will be lost.
  - You are about to drop the column `translations` on the `MarketReport` table. All the data in the column will be lost.
  - You are about to drop the column `translations` on the `News` table. All the data in the column will be lost.
  - You are about to drop the column `translations` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `translations` on the `Regulation` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ExpertProfile" DROP COLUMN "translations";

-- AlterTable
ALTER TABLE "LibraryDocument" DROP COLUMN "translations";

-- AlterTable
ALTER TABLE "MarketItem" DROP COLUMN "translations";

-- AlterTable
ALTER TABLE "MarketReport" DROP COLUMN "translations";

-- AlterTable
ALTER TABLE "News" DROP COLUMN "translations";

-- AlterTable
ALTER TABLE "Property" DROP COLUMN "translations",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Regulation" DROP COLUMN "translations";

-- CreateTable
CREATE TABLE "news_translations" (
    "id" TEXT NOT NULL,
    "newsId" TEXT NOT NULL,
    "locale" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "news_translations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "market_report_translations" (
    "id" TEXT NOT NULL,
    "reportId" TEXT NOT NULL,
    "locale" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "market_report_translations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "regulation_translations" (
    "id" TEXT NOT NULL,
    "regulationId" TEXT NOT NULL,
    "locale" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "fullText" TEXT NOT NULL,

    CONSTRAINT "regulation_translations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "property_translations" (
    "id" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,
    "locale" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "property_translations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "library_translations" (
    "id" TEXT NOT NULL,
    "documentId" TEXT NOT NULL,
    "locale" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "summary" TEXT NOT NULL,

    CONSTRAINT "library_translations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "expert_translations" (
    "id" TEXT NOT NULL,
    "expertId" TEXT NOT NULL,
    "locale" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "specialty" TEXT NOT NULL,

    CONSTRAINT "expert_translations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "market_item_translations" (
    "id" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,
    "locale" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "market_item_translations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "news_translations_locale_idx" ON "news_translations"("locale");

-- CreateIndex
CREATE UNIQUE INDEX "news_translations_newsId_locale_key" ON "news_translations"("newsId", "locale");

-- CreateIndex
CREATE INDEX "market_report_translations_locale_idx" ON "market_report_translations"("locale");

-- CreateIndex
CREATE UNIQUE INDEX "market_report_translations_reportId_locale_key" ON "market_report_translations"("reportId", "locale");

-- CreateIndex
CREATE INDEX "regulation_translations_locale_idx" ON "regulation_translations"("locale");

-- CreateIndex
CREATE UNIQUE INDEX "regulation_translations_regulationId_locale_key" ON "regulation_translations"("regulationId", "locale");

-- CreateIndex
CREATE INDEX "property_translations_locale_idx" ON "property_translations"("locale");

-- CreateIndex
CREATE UNIQUE INDEX "property_translations_propertyId_locale_key" ON "property_translations"("propertyId", "locale");

-- CreateIndex
CREATE INDEX "library_translations_locale_idx" ON "library_translations"("locale");

-- CreateIndex
CREATE UNIQUE INDEX "library_translations_documentId_locale_key" ON "library_translations"("documentId", "locale");

-- CreateIndex
CREATE INDEX "expert_translations_locale_idx" ON "expert_translations"("locale");

-- CreateIndex
CREATE UNIQUE INDEX "expert_translations_expertId_locale_key" ON "expert_translations"("expertId", "locale");

-- CreateIndex
CREATE INDEX "market_item_translations_locale_idx" ON "market_item_translations"("locale");

-- CreateIndex
CREATE UNIQUE INDEX "market_item_translations_itemId_locale_key" ON "market_item_translations"("itemId", "locale");

-- AddForeignKey
ALTER TABLE "news_translations" ADD CONSTRAINT "news_translations_newsId_fkey" FOREIGN KEY ("newsId") REFERENCES "News"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "market_report_translations" ADD CONSTRAINT "market_report_translations_reportId_fkey" FOREIGN KEY ("reportId") REFERENCES "MarketReport"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "regulation_translations" ADD CONSTRAINT "regulation_translations_regulationId_fkey" FOREIGN KEY ("regulationId") REFERENCES "Regulation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "property_translations" ADD CONSTRAINT "property_translations_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "library_translations" ADD CONSTRAINT "library_translations_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "LibraryDocument"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expert_translations" ADD CONSTRAINT "expert_translations_expertId_fkey" FOREIGN KEY ("expertId") REFERENCES "ExpertProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "market_item_translations" ADD CONSTRAINT "market_item_translations_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "MarketItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
