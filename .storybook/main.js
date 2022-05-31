module.exports = {
  stories: ["../libs/**/*.stories.@(js|jsx|ts|tsx)", '../apps/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'] // uncomment the property below if you want to apply some webpack config globally
  // webpackFinal: async (config, { configType }) => {
  //   // Make whatever fine-grained changes you need that should apply to all storybook configs
  //   // Return the altered config
  //   return config;
  // },
  ,
  core: {
    builder: 'webpack5'
  }
};
