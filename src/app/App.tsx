import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { BubblyButton } from "@/components";

import { Home } from "@/app/pages";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
