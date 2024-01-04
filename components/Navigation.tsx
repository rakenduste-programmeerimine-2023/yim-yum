import {Button, Stack} from "@mui/material";
import {KarlButton} from "@/components/NewComponents";

export default async function Navigation(){
    return (
        <Stack direction={"row"} justifyContent={"space-between"} className={"bg-white w-full"}>
            <Stack direction={"row"} spacing={4}>
                <KarlButton variant="text" text="Browse"/>
                <KarlButton variant="text" text="Add Recipe"/>
            </Stack>
            <Stack direction={"row"} spacing={2}>
                <KarlButton variant="text" text="Register"/>
                <KarlButton variant="text" text="Sign in"/>
            </Stack>
        </Stack>
    )
}