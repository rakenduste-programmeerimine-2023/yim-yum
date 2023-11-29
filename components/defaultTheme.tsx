'use client';
import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material/';

const defaultTheme = createTheme({
    palette: {
        background: {
            default: "#ffffff"
        }
    },
});

export default defaultTheme;