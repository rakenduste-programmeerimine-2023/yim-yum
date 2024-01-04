import {Stack, TextField, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {KarlButton} from "@/components/NewComponents";
import React from "react";
import Login, {LoginForm} from "@/components/pages/Login";

export default async function AddRecipeLogIn(){
    return (
        <Stack spacing={2} className={"bg-white p-3 rounded-md w-2/3 items-center"}>
            <Typography className={"font-bold"} variant="h5">You need to be a signed-in user to add a new recipe!</Typography>
            <LoginForm/>
        </Stack>
    )
}