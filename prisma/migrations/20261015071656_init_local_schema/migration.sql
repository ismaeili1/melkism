/*
  Warnings:

  - You are about to drop the column `accessScope` on the `User` table. All the data in the column will be lost.
  - The `role` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `status` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Comment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `NewsArticle` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[mobile]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('GUEST', 'USER', 'EXPERT', 'AGENCY', 'COMPANY', 'MANAGER', 'SUPER_ADMIN');

-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('ACTIVE', 'PENDING', 'INACTIVE');

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_articleId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "accessScope",
ADD COLUMN     "bankName" TEXT,
ADD COLUMN     "city" TEXT,
ADD COLUMN     "iban" TEXT,
ADD COLUMN     "mobile" TEXT,
ADD COLUMN     "password" TEXT,
ADD COLUMN     "province" TEXT,
ADD COLUMN     "username" TEXT,
ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "email" DROP NOT NULL,
DROP COLUMN "role",
ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'USER',
DROP COLUMN "status",
ADD COLUMN     "status" "UserStatus" NOT NULL DEFAULT 'PENDING';

-- DropTable
DROP TABLE "Comment";

-- DropTable
DROP TABLE "NewsArticle";

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_mobile_key" ON "User"("mobile");
