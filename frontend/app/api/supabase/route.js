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

  console.log(email)
  const { data, error } = await supabase
    .from("user_form_data")
    .select("*")
    .eq("email", email);

  console.log(data)
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ data: data[0] }, { status: 200 });
}

export async function DELETE(req) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  if (!email) {
    return NextResponse.json(
      { error: "Email parameter is required" },
      { status: 400 }
    );
  }

  try {
    const { error } = await supabase
      .from("user_form_data")
      .delete()
      .eq("email", email);

    if (error) {
      throw new Error(error.message);
    }

    return NextResponse.json(
      { message: `User with email ${email} deleted successfully` },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
