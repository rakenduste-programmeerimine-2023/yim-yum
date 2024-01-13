import {Stack, TextField, Typography} from "@mui/material";
import {KarlButton} from "@/components/NewComponents";
import Box from "@mui/material/Box";
import React from "react";
import Link from "next/link";
import {createClient} from "@/utils/supabase/server";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import {name} from "ts-interface-checker";

export default async function Register(){
    const register = async (formData: FormData) => {
        'use server'

        const email = formData.get('email-input') as string
        const password = formData.get('password-input') as string
        const username = formData.get('username-input') as string
        const cookieStore = cookies()
        const supabase = createClient(cookieStore)

        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    username
                }
            },
        })

        if (error) {
            return console.log(error)
        }

        if(!error) {
            const { databaseError } = await supabase.from('User').insert({name: username, email: email})
            if(databaseError){
                return console.log(databaseError);
                //I have just discovered there is a much easier way to do this, but it works so whatever
            }
        }

        return redirect('/')

    }

    return (
        <Stack spacing={2} className={"bg-white p-3 rounded-md w-1/2"}>
            <form action={register}>
                <Stack spacing={2} className={"w-5/12"}>
                    <Typography className={"font-bold"} variant="h5">Welcome!</Typography>
                    <TextField size="small" name="username-input" color="warning" placeholder={"Username"}></TextField>
                    <TextField size="small" name="email-input" color="warning" placeholder={"Email"}></TextField>
                </Stack>
                <Stack direction="vertical" className={"space-x-8 py-5"}>
                    <TextField size="small" name="password-input" color="warning" type="password" placeholder={"Password"} className={"w-5/12"}></TextField>
                    <TextField size="small" name="password-confirm-input" color="warning" type="password" placeholder={"Confirm password"}  className={"w-5/12"}></TextField>
                </Stack>
                <Stack direction="vertical">
                    <KarlButton variant="contained" text="Sign up!" className={"w-5/12"} type={"submit"}/>
                    <Typography className={"pl-8 pt-2"}>Already an user? </Typography>
                    <Link href={"/Login"}><KarlButton variant="smallText" className="m-0 pt-5" text="Log in"/></Link>
                </Stack>
            </form>
        </Stack>
    )
}