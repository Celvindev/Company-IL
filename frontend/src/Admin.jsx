import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import ProductList from './AdminPage/AdminProduct/ProductList';
import TeamView from './AdminPage/AdminTeam/TeamView';
import AddProduct from './AdminPage/AdminProduct/AddProduct';
import NewsView from './AdminPage/AdminNews/NewsView';


function AdminRoutes() {
    return (
        <Routes>
            <Route path="/admin/product" element={<ProductList />} />
            <Route path="/admin/addproduct" element={<AddProduct />} />
            <Route path="/admin/team" element={<TeamView />} />
            <Route path="/admin/news" element={<NewsView />} />
        </Routes>
    );
}

export default AdminRoutes;
