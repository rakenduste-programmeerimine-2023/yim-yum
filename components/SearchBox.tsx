'use client'
import {
    Checkbox,
    Collapse,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    TextField
} from "@mui/material";
import React from "react";



export default function SearchBox() {
    const [open, setOpen] = React.useState(false);
    const [checked, setChecked] = React.useState([0]);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <Stack spacing={2} className={"bg-white p-3 rounded-md"}>
            <TextField variant="outlined" size="small" margin="normal" label="Search"/>
            <List>
                <ListItemButton onClick={handleClick}>
                    <ListItemText primary="Tags" />
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List sx={{ width: '100%', maxWidth: 360}}>
                        {[0, 1, 2, 3].map((value) => {
                            const labelId = `checkbox-list-label-${value}`;

                            return (
                                <ListItem
                                    key={value}
                                    disablePadding
                                >
                                    <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                                        <ListItemIcon>
                                            <Checkbox
                                                edge="start"
                                                checked={checked.indexOf(value) !== -1}
                                                tabIndex={-1}
                                                disableRipple
                                                inputProps={{ 'aria-labelledby': labelId }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText id={labelId} primary={`Tag ${value + 1}`} />
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}
                    </List>
                </Collapse>
            </List>
        </Stack>
    )
}