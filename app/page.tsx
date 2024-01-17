import { cookies } from 'next/headers'
import React from "react";
import Browse from "@/components/pages/Browse";
import {createClient} from "@/utils/supabase/server";
import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {Divider, Paper, Stack, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/system/Unstable_Grid";
import SearchBox from "@/components/SearchBox";
import Link from "next/link";

export default async function Index() {
    const cookieStore = cookies();
    const supabase = createServerComponentClient({cookies: () => cookieStore});

    const canInitSupabaseClient = () => {
    try {
      createClient(cookieStore);
      return true;
    } catch (e) {
      return false;
    }
  };

    const isSupabaseConnected = canInitSupabaseClient();

    const { data: recipes, error } = await supabase.from('recipe').select('id, name, cumulative_rating, imageurl, creator_name', { count: 'exact' }).eq('visible', 'TRUE')
    if(error != null){
        console.log(error)
    }
    return (
    <Stack direction="row" className={"w-3/4"} divider={<Divider orientation="vertical" flexItem />} spacing={2}>
        <SearchBox/>
        <Grid container spacing={3} className={"bg-white/50"}>
            {recipes?.map((recipe) => (
            <Grid item xs={4} key={recipe.id}>
                <Link href={`/Recipe/${recipe.id}`}>
                <Box className={"bg-white rounded-lg py-3 ps-2 pe-2"}>
                    <Typography className={"font-bold text-lg p-2"}>{recipe.name}</Typography>
                    <img className={"w-full h-2/3 rounded shadow-xl"} src={recipe.imageurl} alt={recipe.name}/>
                    <Typography className={"p-1"}>Creator: {recipe.creator_name}</Typography>
                    <Typography className={"text-sm p-1"}>Rating: {recipe.cumulative_rating}</Typography>
                </Box>
                </Link>
            </Grid>
            ))}
        </Grid>
    </Stack>
    );
}
