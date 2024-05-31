import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const apiKey = process.env.OPENWEATHERMAP_API_KEY;
    const lat = 40.4165;
    const lon = -3.7026;

    const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const response = await fetch(url, {
      next: { revalidate: 3600 },
    });

    const dailyData = await response.json();
    return NextResponse.json(dailyData);
  } catch (error) {
    console.log("Error in getting daily data");
    return new Response("Error in getting daily data", { status: 500 });
  }
}
