module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo", "@babel/preset-typescript"],
    plugins: [
      ["nativewind/babel"],
      [
        "module:react-native-dotenv",
        {
          moduleName: "react-native-config",
          path: ".env",
        },
      ],
    ],
  };
};
