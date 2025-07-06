import { prisma } from "../../../modules/shared/lib/prisma";
import { NextResponse } from "next/dist/server/web/spec-extension/response";

export async function GET() {
  const lugares = await prisma.lugar.findMany({
    select: {
      id: true,
      ciudad: {
        select: {
          nombre: true,
          provincia: {
            select: {
              nombre: true,
              pais: {
                select: {
                  nombre: true,
                },
              },
            },
          },
        },
      },
      provincia: {
        select: {
          nombre: true,
          pais: {
            select: {
              nombre: true,
            },
          },
        },
      },
      pais: {
        select: {
          nombre: true,
        },
      },
    },
  });
  return NextResponse.json(lugares);
}

export async function POST(req: Request) {
  const data = await req.json();
  const newLugar = await prisma.lugar.create({
    data,
  });
  return NextResponse.json(newLugar);
}
