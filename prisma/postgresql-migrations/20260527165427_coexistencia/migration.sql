-- AlterTable
ALTER TABLE "Instance" ALTER COLUMN "token" SET DATA TYPE VARCHAR(500);

-- AlterTable
ALTER TABLE "Webhook" ADD COLUMN "coexistencia" BOOLEAN DEFAULT false;
