import { prisma } from "@/modules/shared/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const eventos = await prisma.evento.findMany({
    include: {
      doctor: true,
      promotor: true,
      matchmaker: true,
      lugar: {
        include: {
          pais: true,
          provincia: {
            include: {
              pais: true,
            }
          },
          ciudad: {
            include: {
              provincia: {
                include: {
                  pais: true
                }
              }
            }
          }
        }
      }
    }
  });
  if (!eventos) {
    return NextResponse.json({ error: "No se encontraron eventos" }, { status: 404 });
  }
  return NextResponse.json(eventos);
}