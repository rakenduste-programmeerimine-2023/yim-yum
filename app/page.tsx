import { cookies } from 'next/headers'
import React from "react";
import Browse from "@/components/pages/Browse";
import {createClient} from "@/utils/supabase/server";
import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {Divider, Paper, Stack, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/system/Unstable_Grid";
import SearchBox from "@/components/SearchBox";

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

    const { data: recipes } = await supabase.from('recipe').select('id, name, creator_id, cumulative_rating, imageurl, creator_name', { count: 'exact' }).eq('visible', 'TRUE')
    return (
    <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
        <SearchBox/>
        <Grid container spacing={3}>
            {recipes?.map((recipe) => (
            <Grid item xs={12} sm={6} md={4} key={recipe.id}>
                <Paper>
                    <img src={recipe.imageurl} alt={recipe.name} style={{ width: '100%' }} />
                    <Typography variant="h6">{recipe.name}</Typography>
                    <Typography variant="body2">Creator: {recipe.creator_name}</Typography>
                    <Typography variant="body2">Cumulative Rating: {recipe.cumulative_rating}</Typography>
                </Paper>
            </Grid>
            ))}
        </Grid>
    </Stack>
    );
}
