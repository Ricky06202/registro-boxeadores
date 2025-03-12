import { NextResponse } from "next/server";
import { prisma } from "@db/prisma";

export async function GET() {
  const persons = await prisma.person.findMany();
  return NextResponse.json(persons);
}

export async function POST(req: Request) {
  const data = await req.json();
  const newPerson = await prisma.person.create({
    data,
  });
  return NextResponse.json(newPerson);
}
