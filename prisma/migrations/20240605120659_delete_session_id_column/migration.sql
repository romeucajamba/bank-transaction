/*
  Warnings:

  - You are about to drop the column `session_id` on the `transactions` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_transactions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "amount" DECIMAL NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_transactions" ("amount", "created_at", "id", "title") SELECT "amount", "created_at", "id", "title" FROM "transactions";
DROP TABLE "transactions";
ALTER TABLE "new_transactions" RENAME TO "transactions";
PRAGMA foreign_key_check("transactions");
PRAGMA foreign_keys=ON;
