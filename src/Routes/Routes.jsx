import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Pages/Root';
import Home from '../Pages/Home';

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                path: '/',
                Component: Home,

            }
        ]
    },
]);

export default router;