import {Stack, Typography} from "@mui/material";
import {KarlButton} from "@/components/NewComponents";
import Link from "next/link";
import {cookies} from "next/headers";
import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {createClient} from "@/utils/supabase/server";
import {redirect} from "next/navigation";

async function UserStatus(){
    const cookieStore = cookies();
    const supabase = createServerComponentClient({ cookies: () => cookieStore });

    const {
        data: { user },
    } = await supabase.auth.getUser();

    const {
        data: { session },
    } = await supabase.auth.getSession();

    const signOut = async () => {
        "use server";

        const cookieStore = cookies();
        const supabase = createClient(cookieStore);
        await supabase.auth.signOut();
        return redirect("/Login");
    };

    return session && user ? (
            <Stack direction={"row"} spacing={2}>
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