import { supabase } from "@/utils/supabaseConn";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { email, phase, progress } = await req.json();

  try {
    if (phase === 1) {

      const { data, error } = await supabase
        .from("user_form_data")
        .upsert(
          { email, phase, progress, status: "in-progress" },
          { onConflict: ["email"] } 
        );

      if (error) {
        throw new Error(error.message);
      }

      return NextResponse.json({ data }, { status: 200 });
    } else {
      
      const status = phase === 3 ? "completed" : "in-progress";
      const { data, error } = await supabase
        .from("user_form_data")
        .update({ phase, progress, status })
        .eq("email", email);

      if (error) {
        throw new Error(error.message);
      }

      return NextResponse.json({ data }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


export async function GET(req) {
  const { searchParams } = new URL(req.url); // Create a URL object to access query params
  const email = searchParams.get("email"); // Get the "email" query parameter

  const { data, error } = await supabase
    .from("user_form_data")
    .select("*")
    .eq("email", email);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ data }, { status: 200 });
}
