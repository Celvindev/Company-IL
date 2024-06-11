import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import AdTeam from './AdminPage/AdminTeam/AdTeam.jsx';

function AdminRoutes() {
    return (
        <Routes>
            <Route path="/admin/team" element={<AdTeam />} />
        </Routes>
    );
}

export default AdminRoutes;
