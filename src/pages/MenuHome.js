import React, { useEffect } from "react";
// import { Container } from "react-bootstrap";
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from "../components/Header";

import Section2 from "./Section2";
import {FaSomeIcon} from 'react-icons/fa';
import { BiBorderRadius } from "react-icons/bi";
import ComponentName from "./zi";
import Dashboard from './Dashboard';


const MenuHome = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // useEffect(() => {
    //     return () => {
    //         document.body.style.background = "";
    //     };
    // }, []);

    return (
        <div>
            <Navbar />
            <ComponentName />
            <Section2 />
            <Dashboard />
        </div>
    );
};

export default MenuHome;
