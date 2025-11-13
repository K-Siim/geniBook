/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Author` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Author` table. All the data in the column will be lost.
  - The primary key for the `AuthorOnBook` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `AuthorOnBook` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `AuthorOnBook` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `publishedAt` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `realeseYear` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Book` table. All the data in the column will be lost.
  - Added the required column `updated_at` to the `Author` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `AuthorOnBook` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `AuthorOnBook` table without a default value. This is not possible if the table is not empty.
  - Added the required column `release_year` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Author` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `AuthorOnBook` DROP PRIMARY KEY,
    DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Book` DROP COLUMN `createdAt`,
    DROP COLUMN `publishedAt`,
    DROP COLUMN `realeseYear`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `release_year` INTEGER NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;
