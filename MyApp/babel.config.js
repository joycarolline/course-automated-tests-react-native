module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      "babel-preset-expo",
      [
        "@babel/preset-env",
        {
          useBuiltIns: "entry",
          corejs: "3.22",
        },
      ],
    ],
    plugins: [
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-proposal-private-methods",
    ],
  };
};
