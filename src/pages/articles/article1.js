import React from "react";
import "../portfolio/style.css";
import {
    dataportfolio
} from "../../content_option";


export const Article1 = () => {
    return (
        <div className="portfolio-item-page">
            <br />
            <h1>{dataportfolio.find(article => article.id === "article1").title}</h1>
            <p>{dataportfolio.find(article => article.id === "article1").description}</p>
        </div>
    );
};
