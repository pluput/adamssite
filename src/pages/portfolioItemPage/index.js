import React from "react";
import { dataportfolio } from "../../content_option";

export const PortfolioItemPage = ({ id }) => {
  // Find the portfolio item by its ID
  const item = dataportfolio.find((item) => item.id === id);

  if (!item) return <div>Item not found</div>;  // Show error for invalid ID

  return (
    <div className="portfolio-item-page">
      <br />
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <div dangerouslySetInnerHTML={{ __html: item.detailedContent }} />
    </div>
  );
};
