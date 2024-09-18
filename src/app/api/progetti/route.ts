import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data.json`);
    const data = await res.json();

    const progetti = data["progetti"]

    return NextResponse.json(progetti);
  } catch (error) {
    return NextResponse.json({ message: "Nessun progetto presente" }, { status: 500 });
  }
}