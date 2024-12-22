import supabase from "./supabase";

export async function getPersonnel() {
  return await supabase.from("Personnel").select("*");
}
