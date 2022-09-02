
const EleventyVitePlugin = require("@11ty/eleventy-plugin-vite");

module.exports = function(eleventyConfig) {

  eleventyConfig.addPlugin(EleventyVitePlugin, {
    tempFolderName: ".11ty-vite", // Default name of the temp folder

    viteOptions: {
      base: './',
      clearScreen: false,
      server: {
        mode: "development",
        middlewareMode: true,
      },
      build: {
        mode: "production",
      }
    }
  });

  eleventyConfig.addPassthroughCopy('src/assets');

  // Return your Object options:
  return {
    htmlTemplateEngine: "pug",
    templateFormats: [
      "html",
      "pug",
      "md",
      "11ty.js",
      "liquid",
    ],
    dir: {
      input: "src",
      output: "_site"
    }
  }
};