// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const purgecss = require("@fullhuman/postcss-purgecss");

const postcssPlugins = [tailwind, autoprefixer];

if (process.env.NODE_ENV === "production") postcssPlugins.push(purgecss());

module.exports = {
  siteName: "Fair Fines & Fees Coalition",
  siteUrl: "https://www.fairfinesnofees.com",
  titleTemplate: "%s | Fair Fines & Fees Coalition",
  plugins: [
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-151711297-1",
        debug: {
          sendHitTask: process.env.NODE_ENV === "production"
        }
      }
    }
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  }
};
