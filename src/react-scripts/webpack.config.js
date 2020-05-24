import webpack from "webpack";

export const entry = "./src/index.js";
export const module = {
  rules: [
    //...
    {
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    },
  ],
};
