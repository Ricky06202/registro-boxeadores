import { prisma } from "@db/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const nacionalidades = await prisma.nacionalidad.findMany({
    select: {
      id: true,
      nacionalidad: true,
      countryCode: true,
    },
  });
  return NextResponse.json(nacionalidades);
}
