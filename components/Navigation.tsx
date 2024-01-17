import {Stack, Typography} from "@mui/material";
import {KarlButton} from "@/components/NewComponents";
import Link from "next/link";
import {cookies} from "next/headers";
import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {createClient} from "@/utils/supabase/server";
import {redirect} from "next/navigation";
import {name} from "ts-interface-checker";

let username;

async function UserStatus(){
    const cookieStore = cookies();
    const supabase = createServerComponentClient({ cookies: () => cookieStore });

    const {
        data: { user },
    } = await supabase.auth.getUser();

    const {
        data: { session },
    } = await supabase.auth.getSession();


    if(user != null){
        const { data, error } = await supabase
            .from('User')
            .select('name').eq('email', user.email)
            .limit(1)
            .single()
        username = data;
    }
    else {
        username = "test";
    }

    const signOut = async () => {
        "use server";

        const cookieStore = cookies();
        const supabase = createClient(cookieStore);
        await supabase.auth.signOut();
        return redirect("/Login");
    };

    return session && user ? (
            <Stack direction={"row"} spacing={2}>
                <Typography className={"pt-1 font-bold text-red-700"}>Hi { username.name }!</Typography>
                <Link href={"/Login"}><KarlButton variant="text" text="My profile"/></Link>
                <form action={signOut}>
                    <KarlButton variant="text" type="submit" text="Log out"/>
                </form>
            </Stack>
        ) : (
            <Stack direction={"row"} spacing={2}>
                <Link href={"/Register"}><KarlButton variant="text" text="Register"/></Link>
                <Link href={"/Login"}><KarlButton variant="text" text="Sign in"/></Link>
            </Stack>
        )
    }

    export async function GetUsername(){
        return {username};
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