module.exports = {
  head: {
    title: `headless-cms-nuxt`,
    meta: [
      { charset: `utf-8` },
      { name: `viewport`, content: `width=device-width,initial-scale=1` },
    ],
  },
  router: {
    linkExactActiveClass: `is-active`,
  },
  ignore: [`**/*.spec.js`],
  modules: [
    `@nuxtjs/dotenv`,
  ],
};
