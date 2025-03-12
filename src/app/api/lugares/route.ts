import { prisma } from "@db/prisma";
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
