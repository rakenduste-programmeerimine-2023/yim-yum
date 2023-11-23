import Box from "@mui/material/Box";
import {Card, CardContent, CardMedia, Divider, Stack, TextField, Typography} from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import {GenerateRecipes} from "@/components/placeholders";


const RecipeGrid = () => {
    const recipes = GenerateRecipes();

    return (
        <Grid container spacing={2} maxWidth="600px" columns={4}>
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
    );
};


export default async function Browse(){
    return (
        <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
            <Stack>
                <TextField/>
                <ul>
                    <li>Placeholder</li>
                    <li>Placeholder</li>
                    <li>Placeholder</li>
                </ul>
            </Stack>
            <RecipeGrid/>
        </Stack>
    )
}