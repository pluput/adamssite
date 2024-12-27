import React from "react";
import "../portfolio/style.css";
import {
    dataportfolio
} from "../../content_option";


export const Article1 = () => {
    const article = dataportfolio.find((article) => article.id === "article1");

    if (!article) {
        return <div>Article not found.</div>;
    }

    return (
        <div className="portfolio-item-page">
            <br />
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            <div dangerouslySetInnerHTML={{ __html: article.detailedContent }} />
        </div>
    );
};