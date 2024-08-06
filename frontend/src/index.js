import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import MainPage from "./components/Mainpage/Mainpage";
import LoginedPage from "./components/Logined/LoginedPage";
import components from "./components/Logined/FunctionPage/component";
import { items } from "./components/Logined/data";
import Form from "./components/Logined/Example_Form/Form";
import LoginPage from "./components/LoginPage/LoginPage";
import AdminPage from "./components/Admin/AdminPage";
import AdminNavigation from "./components/Admin/AdminNavigation/AdminNavigation";

// Component cho nội dung chính của ứng dụng
const AppContent = () => {
    const location = useLocation();
    const showNavAndFooter = location.pathname !== '/login' && !location.pathname.startsWith('/admin');

    return (
        <>
            {showNavAndFooter && <Navigation />}
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/home" element={<LoginedPage />}>
                    {items.map((item, index) => (
                        <Route
                            key={index}
                            path={item.link.slice(1)}
                            element={React.createElement(components[index + 1])}
                        />
                    ))}
                    <Route path="bieu-mau" element={<Form />} />
                </Route>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/admin/*" element={<AdminRoutes />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            {showNavAndFooter && <Footer />}
        </>
    );
};

// Component cho các trang của admin
const AdminRoutes = () => {
    const location = useLocation();
    const showAdminNavAndFooter = location.pathname !== '/admin/login';

    return (
        <>
            {showAdminNavAndFooter && <AdminNavigation />}
            <Routes>
                <Route path="" element={<AdminPage />} />
                {/* Thêm các route khác của admin tại đây */}
                {/*<Route path="dashboard" element={<AdminDashboard />} />*/}
                {/*<Route path="users" element={<AdminUsers />} />*/}
                {/* Thêm các route khác của admin tại đây */}
            </Routes>
        </>
    );
};

// Component chính của ứng dụng
const App = () => {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

// Khởi tạo ứng dụng
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

reportWebVitals();
