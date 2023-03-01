import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RouterLayout from './RouterLayout';
import Home from './HomePage';
import Contacts from './ContactsPage';
import About from './AboutPage';
import Login from './LoginPage';
import NotFoundPage from './NotFoundPage';

class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<RouterLayout />}>
                        <Route index element={<Home />} />
                        <Route path='contacts' element={<Contacts />} />
                        <Route path='about' element={<About />} />
                        <Route path='login' element={<Login />} />
                        <Route path='*' element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default Router