import { prisma } from '@/modules/shared/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const {id} = await params
    console.log(id)

    const boxeador = await prisma.boxeador.findUnique({
      where: { id: Number(id) },
      include: {
        person: {
          include: {
            trainer: true,
            nationality: true,
            residence: {
              include: {
                pais: true,
                provincia: {
                  include: {
                    pais: true
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
            },
            birthplace: {
              include: {
                pais: true,
                provincia: {
                  include: {
                    pais: true
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
          },
        },
        categoria: true,
        genero: true,
        guardia: true,
        manager: true,
        promotor: true,
        
      },
    })

    if (!boxeador) {
      return NextResponse.json(
        { message: 'Boxeador no encontrado' },
        { status: 404 }
      )
    }

    // Devolver el boxeador encontrado
    return NextResponse.json(boxeador)
  } catch (error) {
    console.error('Error al obtener boxeador:', error)
    return NextResponse.json(
      { message: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
