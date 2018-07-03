import React from "react";
import Home from './components/home';
import Products from './components/products';
import About from './components/about';

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <Home />
    },
    {
        path: "/products",
        main: () => <Products />
    },
    {
        path: "/about",
        main: () => <About />
    }
];

export default routes;