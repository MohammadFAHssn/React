import supabase from "./supabase";

export async function getBusinessTrip() {
  return await supabase.from("Business_trip").select("*");
}
