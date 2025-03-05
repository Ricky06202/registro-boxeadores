import { prisma } from "@db/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const categorias = await prisma.categoria.findMany({
    select: {
      id: true,
      categoria: true,
    },
  });
  return NextResponse.json(categorias);
}
