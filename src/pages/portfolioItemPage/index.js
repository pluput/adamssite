import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dataportfolio } from "../../content_option"; // Assuming this holds the portfolio data

export const PortfolioItemPage = () => {
  const { id } = useParams();  // Get the dynamic ID from the URL
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Find the portfolio item by its ID
    const portfolioItem = dataportfolio.find((item) => item.id === id);
    setItem(portfolioItem);
  }, [id]);

  if (!item) return <div>Loading...</div>;  // Show loading while fetching item

  return (
    <div className="portfolio-item-page">
      <br></br>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <div dangerouslySetInnerHTML={{ __html: item.detailedContent }} />
    </div>
  );
};
