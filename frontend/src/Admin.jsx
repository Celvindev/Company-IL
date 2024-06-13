import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import ProductList from './AdminPage/AdminProduct/ProductList';
import TeamView from './AdminPage/AdminTeam/TeamView';
import AddProduct from './AdminPage/AdminProduct/AddProduct';


function AdminRoutes() {
    return (
        <Routes>
            <Route path="/admin/product" element={<ProductList />} />
            <Route path="/admin/addproduct" element={<AddProduct />} />
            <Route path="/admin/team" element={<TeamView />} />
        </Routes>
    );
}

export default AdminRoutes;
