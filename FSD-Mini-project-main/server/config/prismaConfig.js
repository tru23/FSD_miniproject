import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export { prisma }

// npx prisma db push
// npx prisma generate
