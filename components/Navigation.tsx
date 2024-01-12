import {Button, Stack} from "@mui/material";
import {KarlButton} from "@/components/NewComponents";
import Link from "next/link";

export default async function Navigation(){
    return (
        <Stack direction={"row"} justifyContent={"space-between"} className={"bg-white w-full"}>
            <Stack direction={"row"} spacing={4}>

                <Link href={"/"}><KarlButton variant="text" text="Browse"/></Link>
                <Link href={"/AddRecipe"}><KarlButton variant="text" text="Add Recipe"/></Link>
            </Stack>
            <Stack direction={"row"} spacing={2}>
                <Link href={"/Register"}><KarlButton variant="text" text="Register"/></Link>
                <Link href={"/Login"}><KarlButton variant="text" text="Sign in"/></Link>
            </Stack>
        </Stack>
    )
}