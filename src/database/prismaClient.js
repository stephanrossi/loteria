import Prisma from '@prisma/client';

const { PrismaClient } = Prisma;

export const prisma = new PrismaClient();

// import { PrismaClient } from "@prisma/client";

// const prismaClient = new PrismaClient()

// export default prismaClient