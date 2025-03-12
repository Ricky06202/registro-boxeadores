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

export async function POST(req: Request) {
  const data = await req.json();
  const newCategoria = await prisma.categoria.create({
    data,
  });
  return NextResponse.json(newCategoria);
}
