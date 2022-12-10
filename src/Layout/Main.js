import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../SharePages/Footer';
import Hader from '../SharePages/Hader';

const Main = () => {
    return (
        <div>
            <Hader></Hader>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;