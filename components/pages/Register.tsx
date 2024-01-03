import {Stack, TextField, Typography} from "@mui/material";
import {KarlButton} from "@/components/NewComponents";
import Box from "@mui/material/Box";
import React from "react";

export default async function Register(){
    return (
        <Stack spacing={2} className={"bg-white p-3 rounded-md w-1/2"}>
                <Stack spacing={2} className={"w-5/12"}>
                    <Typography className={"font-bold"} variant="h5">Welcome!</Typography>
                    <TextField label="Username" size="small" id="username-input" color="warning"></TextField>
                    <TextField label="Email" size="small" id="email-input" color="warning"></TextField>
                </Stack>
                <Stack direction="vertical" className={"space-x-8"}>
                    <TextField label="Password" size="small" id="password-input" color="warning" type="password" className={"w-5/12"}></TextField>
                    <TextField label="Confirm password" size="small" id="password-confirm-input" color="warning" type="password"  className={"w-5/12"}></TextField>
                </Stack>
            <Stack direction="vertical">
                <KarlButton variant="contained" text="Sign up!" className={"w-5/12"}/>
                <Typography className={"pl-2 pt-2"}>Already an user? </Typography>
                <KarlButton variant="smallText" className="m-0 pt-5" text="Log in"/>
            </Stack>
        </Stack>
    )
}