-- CreateEnum
CREATE TYPE "FlowerOrderType" AS ENUM ('BOUQUET', 'ARRANGEMENT');

-- CreateEnum
CREATE TYPE "FlowerOrderSize" AS ENUM ('SMALL', 'MEDIUM', 'LARGE');

-- CreateEnum
CREATE TYPE "FulfillmentMethod" AS ENUM ('PICKUP', 'DELIVERY');

-- CreateTable
CREATE TABLE "FlowerOrder" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" "FlowerOrderType" NOT NULL,
    "size" "FlowerOrderSize" NOT NULL,
    "quantity" INTEGER NOT NULL,
    "fulfillmentMethod" "FulfillmentMethod" NOT NULL,
    "requestedDate" TIMESTAMP(3) NOT NULL,
    "note" TEXT,
    "status" "ReservationStatus" NOT NULL DEFAULT 'PENDING',
    "decisionReason" TEXT,
    "decidedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FlowerOrder_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FlowerOrder" ADD CONSTRAINT "FlowerOrder_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
