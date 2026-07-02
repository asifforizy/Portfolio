import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Pages/Root';

import HomePage from '../Pages/HomePage';

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                path: '/',
                Component: HomePage,
            }
        ]
    },
]);

export default router;