import React from "react";
import "../portfolio/style.css";
import {
    dataportfolio
} from "../../content_option";


export const Article2 = () => {
    return (
        <div className="portfolio-item-page">
        <br />
        <h1>{dataportfolio.find(article => article.id === "article2").title}</h1>
        <p>{dataportfolio.find(article => article.id === "article2").description}</p>
        {/* <div dangerouslySetInnerHTML={{ __html: item.detailedContent }} /> */}
        </div>
    );
};