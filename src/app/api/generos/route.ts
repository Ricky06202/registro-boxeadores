import { prisma } from "../../../modules/shared/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const generos = await prisma.genero.findMany({
    select: {
      id: true,
      genero: true,
    },
  });
  return NextResponse.json(generos);
}
