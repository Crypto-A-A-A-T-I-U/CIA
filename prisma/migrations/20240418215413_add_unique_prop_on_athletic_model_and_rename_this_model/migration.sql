/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `atleticas` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "atleticas_name_key" ON "atleticas"("name");
