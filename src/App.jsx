// src/App.js
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import {DashboardLayout} from "./layouts/DashboardLayout.jsx";
import Washers from "./pages/Washers.jsx";
import NewWasher from "./pages/NewWasher.jsx";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Check if the user is authenticated
        const token = localStorage.getItem('adminAuthToken');
        if (token) {
            console.log('token', token);
            setIsAuthenticated(true);
        }
    }, []);

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Auth />}></Route>
                <Route element={<DashboardLayout />}>
                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />
                    <Route
                        path="/washers"
                        element={<Washers /> }
                    />
                    <Route
                        path="/washers/new"
                        element={<NewWasher /> }
                    />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
