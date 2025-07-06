import { prisma } from "../../../modules/shared/lib/prisma";
import { Prisma } from "@prisma/client";
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

export async function POST(req: Request) {
  const data = await req.json();
  const newBoxeador = await prisma.boxeador.create({
    data: data,
  });
  return NextResponse.json(newBoxeador);
}
