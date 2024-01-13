import {Button, Stack, Typography} from "@mui/material";
import {KarlButton} from "@/components/NewComponents";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client"

async function UserStatus(){
    const supabase = createClient();
    const { data, error } = await supabase.auth.getSession();
    if(!data.session){
        console.log("No session");
        return (
        <Stack direction={"row"} spacing={2}>
            <Link href={"/Register"}><KarlButton variant="text" text="Register"/></Link>
            <Link href={"/Login"}><KarlButton variant="text" text="Sign in"/></Link>
        </Stack>
        )
    }
    else{
        const { name } = await supabase.from('User').select('name').eq('email', data.session.user.email);
        console.log(name);
        return (
            <Stack direction={"row"} spacing={2}>
                <Typography>Hi {name}!</Typography>
                <Link href={"/Login"}><KarlButton variant="text" text="My profile"/></Link>
                <Link href={"/Login"}><KarlButton variant="text" text="Log out"/></Link>
            </Stack>
        )
    }
}

export default async function Navigation(){
    return (
        <Stack direction={"row"} justifyContent={"space-between"} className={"bg-white w-full"}>
            <Stack direction={"row"} spacing={4}>

                <Link href={"/"}><KarlButton variant="text" text="Browse"/></Link>
                <Link href={"/AddRecipe"}><KarlButton variant="text" text="Add Recipe"/></Link>
            </Stack>
            <UserStatus/>
        </Stack>
    )
}