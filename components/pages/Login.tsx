import Box from "@mui/material/Box";
import {Divider, Stack, TextField, Typography} from "@mui/material";
import {KarlButton} from "@/components/NewComponents";
import React from "react";

export function LoginForm(){
    return (
        <Stack direction={"row"}>
            <Stack spacing={2}>
                <TextField label="Email" size="small" id="email-input" color="warning"></TextField>
                <TextField label="Password" size="small" id="password-input" color="warning" type="password"></TextField>
                <KarlButton variant="contained" text="Sign in"/>
            </Stack>
            <Stack spacing={1} justifyContent={"flex-end"} className={"pl-4"}>
                <Stack spacing={0} direction="vertical">
                    <Typography>Not an user yet?</Typography>
                    <KarlButton variant="smallText" text="Sign up now!"/>
                </Stack>
                <Box>
                    <KarlButton variant="smallText" text="Forgot your password?" className={"pb-3"}/>
                </Box>
            </Stack>
        </Stack>
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