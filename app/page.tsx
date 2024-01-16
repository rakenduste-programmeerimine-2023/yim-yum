import { cookies } from 'next/headers'
import React from "react";
import Browse from "@/components/pages/Browse";
import {createClient} from "@/utils/supabase/server";

export default async function Index() {
  const cookieStore = cookies();

  const canInitSupabaseClient = () => {
    try {
      createClient(cookieStore);
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();
  return (
      <Browse/>
  )
}
