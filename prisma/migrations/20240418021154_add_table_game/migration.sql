-- CreateEnum
CREATE TYPE "GameStatus" AS ENUM ('Agendado', 'Progresso', 'Concluido');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Masculino', 'Feminino');

-- AlterTable
ALTER TABLE "atleticas" ADD COLUMN     "gameId" INTEGER;

-- CreateTable
CREATE TABLE "games" (
    "id" SERIAL NOT NULL,
    "sport" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "date" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "location" TEXT NOT NULL,
    "status" "GameStatus" NOT NULL DEFAULT 'Agendado',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "games_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "atleticas" ADD CONSTRAINT "atleticas_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "games"("id") ON DELETE SET NULL ON UPDATE CASCADE;
