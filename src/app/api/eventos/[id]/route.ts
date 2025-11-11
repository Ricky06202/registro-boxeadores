import { prisma } from "@/modules/shared/lib/prisma"
import { NextResponse } from "next/server"

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const evento = await prisma.evento.findUnique({ where: { id: parseInt(id) },
    include: {
      evento_encuentro: {
        include: {
          encuentro: {
            include: {
              resultados_encuentros: true,
              boxeador1: {
                include: {
                  person: true,
                }
              },
              boxeador2: {
                include: {
                  person: true,
                }
              },
            }
          },
        }
      },
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
   })
  if (!evento) {
    return NextResponse.json({ error: "No se encontro el evento" }, { status: 404 })
  }
  return NextResponse.json(evento)
}