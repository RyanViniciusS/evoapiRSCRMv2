-- AlterTable
ALTER TABLE `Instance` MODIFY `token` VARCHAR(500);

-- AlterTable
ALTER TABLE `Webhook` ADD COLUMN `coexistencia` BOOLEAN DEFAULT false;
