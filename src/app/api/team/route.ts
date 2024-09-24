import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data.json`);
    const data = await res.json();

    const team = data["team"]

    return NextResponse.json(team);
  } catch (error) {
    return NextResponse.json({ message: "Nessun membro del team presente" }, { status: 500 });
  }
}