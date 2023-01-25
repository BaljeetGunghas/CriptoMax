import React from 'react';
import { createRoot } from "react-dom/client";
import App from './App';
import { ChakraBaseProvider, theme } from '@chakra-ui/react';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
    <React.StrictMode>
        <ChakraBaseProvider theme={theme}>
            <App />
        </ChakraBaseProvider>
    </React.StrictMode>
);


