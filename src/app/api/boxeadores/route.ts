import { prisma } from "@db/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const boxeadores = await prisma.boxeador.findMany({
    select: {
      id: true,
      categoria: {
        select: {
          categoria: true,
        },
      },
      genero: {
        select: {
          genero: true,
        },
      },
      person: {
        select: {
          id: true,
          name: true,
          alias: true,
          image: true,
          nationality: {
            select: {
              nacionalidad: true,
              countryCode: true,
            },
          },
        },
      },
    },
  });
  return NextResponse.json(boxeadores);
}
