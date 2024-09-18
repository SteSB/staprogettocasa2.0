import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data.json`);
    const data = await res.json();
    const progetti = data["progetti"]

    if (typeof params.id !== 'string') {
      return NextResponse.json({ message: "Id non valido" }, { status: 400 });
    }

    const progetto = progetti[params.id];
    if (!progetto) {
      return NextResponse.json({ message: "Progetto non trovato" }, { status: 404 });
    }

    return NextResponse.json(progetto);
  } catch (error) {
    return NextResponse.json({ message: "Progetto non trovato" }, { status: 500 });
  }
}