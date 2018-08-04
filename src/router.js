import React from "react";
import Home from './components/home';
import ProductsPage from './pages/productsPage';
import About from './components/about';

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <Home />
    },
    {
        path: "/products",
        main: () => <ProductsPage />
    },
    {
        path: "/about",
        main: () => <About />
    }
];

export default routes;