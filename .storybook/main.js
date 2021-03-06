module.exports = {
  stories: ["../packages/**/*.stories.*"],
  addons: [
    "@storybook/addon-viewport",
    "@storybook/addon-docs",
    "@storybook/addon-storysource",
    "@storybook/addon-knobs",
    "@storybook/addon-actions",
    "@storybook/addon-links",
  ],
  typescript: {
    check: true,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
};
