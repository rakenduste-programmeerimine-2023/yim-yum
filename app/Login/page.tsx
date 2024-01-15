import Box from "@mui/material/Box";
import {Divider, Stack, TextField, Typography} from "@mui/material";
import {KarlButton} from "@/components/NewComponents";
import React from "react";
import Link from "next/link";
import {cookies} from "next/headers";
import {createClient} from "@/utils/supabase/server";
import {redirect} from "next/navigation";

export function LoginForm(){
    const signIn = async (formData: FormData) => {
        'use server'

        const email = formData.get('Email-input') as string
        const password = formData.get('Password-input') as string
        const cookieStore = cookies()
        const supabase = createClient(cookieStore)

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if (error) {
            return console.log(error)
        }

        return redirect('/')
    }

    return (
        <form action={signIn}>
            <Stack direction={"row"}>
                <Stack spacing={2}>
                    <TextField name="Email-input" placeholder="Email" size="small" color="warning"></TextField>
                    <TextField name="Password-input" placeholder="Password" size="small" color="warning" type="password"></TextField>
                    <KarlButton variant="contained" text="Sign in" type={"submit"}/>
                </Stack>
                <Stack spacing={1} justifyContent={"flex-end"} className={"pl-4"}>
                    <Stack spacing={0} direction="vertical">
                        <Typography>Not an user yet?</Typography>
                        <Link href={"/Register"}><KarlButton variant="smallText" text="Sign up now!"/></Link>
                    </Stack>
                    <Box>
                        <Link href={"/ForgotPassword"}><KarlButton variant="smallText" text="Forgot your password?" className={"pb-3"}/></Link>
                    </Box>
                </Stack>
            </Stack>
        </form>
    )
}

export default async function Login(){
    return (
        <Stack spacing={2} className={"bg-white p-3 rounded-md w-1/2"}>
            <Typography className={"font-bold"} variant="h5">Welcome back!</Typography>
            <LoginForm/>
        </Stack>
    )
}