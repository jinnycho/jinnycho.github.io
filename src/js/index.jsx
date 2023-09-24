import React from 'react';
import { createRoot } from 'react-dom/client';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import { Blog } from "./Blog";

addEventListener('DOMContentLoaded', () => {
    const root = createRoot(document.querySelector('#root'));
    root.render(<Blog />);
    // root.render(
        // <React.StrictMode>
        //     <BrowserRouter>
        //         <Blog />
        //     </BrowserRouter>
        // </React.StrictMode>
    // );
});