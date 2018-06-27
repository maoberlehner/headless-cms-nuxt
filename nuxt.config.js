module.exports = {
  head: {
    title: `static-headless`,
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
