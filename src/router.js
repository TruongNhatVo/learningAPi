import React from "react";
import Home from './components/home';
import ProductsPage from './pages/productsPage';
import ProductActionPage from './pages/productActionPage';
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
        path: "/product/add",
        exact: false,
        main: () => <ProductActionPage />
    },
    {
        path: "/about",
        main: () => <About />
    }
];

export default routes;