"use client";
import { useEffect } from "react";

const SEO = ({ pageTitle }) => {
    useEffect(() => {
        document.title = pageTitle + ' - Marina - Luxury Hotel ';
    }, []);
};

export default SEO;
