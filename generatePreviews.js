// generatePreviews.js
const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

// Define an array with your portfolio item IDs and corresponding URLs
const portfolioItems = [
  { id: "article1", url: "http://localhost:3000/portfolio/article1" },
  { id: "article2", url: "http://localhost:3000/portfolio/article2" },
  // Add more items as needed
];

// Output directory for saving preview images
const outputDir = path.join(__dirname, "public", "previews");

async function generatePreviews() {
  // Ensure the output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Launch Puppeteer
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  for (const item of portfolioItems) {
    const screenshotPath = path.join(outputDir, `${item.id}.png`);

    try {
      console.log(`Generating preview for ${item.id}...`);
      await page.goto(item.url, { waitUntil: "networkidle2" });

      // Optionally, set a specific viewport size for consistency
      await page.setViewport({ width: 1280, height: 720 });

      // Take a screenshot
      await page.screenshot({ path: screenshotPath, fullPage: true });
      console.log(`Screenshot saved for ${item.id} at ${screenshotPath}`);
    } catch (error) {
      console.error(`Error generating preview for ${item.id}:`, error);
    }
  }

  await browser.close();
  console.log("All previews generated!");
}

// Run the script
generatePreviews().catch((error) => {
  console.error("Error generating previews:", error);
});
