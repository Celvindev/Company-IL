import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import ProductList from './AdminPage/AdminProduct/ProductList';


function AdminRoutes() {
    return (
        <Routes>
            <Route path="/admin/product" element={<ProductList />} />
        </Routes>
    );
}

export default AdminRoutes;
