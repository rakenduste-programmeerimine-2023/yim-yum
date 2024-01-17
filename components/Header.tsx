import {cookies} from "next/headers";
import Navigation from "@/components/Navigation";
import OldHeader from "@/components/premade/OldHeader";
import React from "react";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import {GetRandomFoodImages} from "@/API/RandomFoodPics";
export default async function Header() {
    const headerImages = await GetRandomFoodImages(3);

    return (
        <Box className="flex w-full bg-white/50 place-content-center">
            {headerImages.map((image, index) => (
                <Box key={index} component="img" src={image} className={"max-h-80 max-w-2xl border mr-4"} />
            ))}
        </Box>
    );
}