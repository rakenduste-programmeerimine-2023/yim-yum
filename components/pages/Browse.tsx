import Box from "@mui/material/Box";
import {Card, CardContent, CardMedia, Divider, List, Stack, TextField, Typography} from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import {GenerateRecipes} from "@/components/placeholders";
import SearchBox from "@/components/SearchBox";


const RecipeGrid = () => {
    const recipes = GenerateRecipes();

    return (
        <Grid container spacing={2} maxWidth="600px" columns={4} className={"bg-white rounded-md"}>
            {recipes.map((recipe, index) => (
                <Grid xs={1} key={index}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="200"
                            image={recipe.thumbnail}
                            alt={recipe.name}
                        />
                        <CardContent>
                            <Typography variant="h6" component="h4">
                                {recipe.name}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}


export default async function Browse(){
    return (
        <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
            <SearchBox/>
            <RecipeGrid/>
        </Stack>
    )
}