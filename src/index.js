import React from 'react';
import ReactDOM from 'react-dom';

//Для изменение цвета
import {ThemeProvider, createTheme} from "@mui/material";

import './index.css';
import App from './components/App';

//Изменение цвета
const theme = createTheme({
    palette: {
        primary: {
            main: '#61dafb'
        },
        secondary: {
            main: '#00ff00'
        }
    }
})

ReactDOM.render(
    <React.StrictMode>
        {/*Добавляет изменения темы*/}
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
