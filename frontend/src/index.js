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

const AppContent = () => {
    const location = useLocation();
    const showNavAndFooter = location.pathname !== '/login';

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
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            {showNavAndFooter && <Footer />}
        </>
    );
}

const App = () => {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

reportWebVitals();
