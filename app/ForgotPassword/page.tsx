import {Stack, TextField, Typography} from "@mui/material";
import {KarlButton} from "@/components/NewComponents";
import Box from "@mui/material/Box";
import React from "react";

export default async function ForgotPassword(){
    return (
        <Stack spacing={2} className={"bg-white p-3 rounded-md w-1/3 items-center"}>
            <Stack spacing={2} className={"w-5/6 justify-center"}>
                <Typography className={"font-bold"} variant="h5">Forgot your password?</Typography>
                <Typography>Enter the email you signed up with and we will send you further instructions</Typography>
                <TextField label="Email" size="small" id="email-input" color="warning"></TextField>
                <KarlButton variant="contained" text="Submit"/>
            </Stack>
        </Stack>
    )
}