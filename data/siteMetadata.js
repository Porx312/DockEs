/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: "jose",
  author: "jose",
  headerTitle: "DocsJs",
  description: "Documentación de JavaScript y TypeScript",
  language: "es-es",
  theme: "light", // system, dark or light
  siteUrl: "https://www.docsjs.com",
  siteRepo: "https://github.com/Porx312/codeporx",
  siteLogo: `${process.env.BASE_PATH || ""}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ""}/static/images/twitter-card.jpg`,
  mastodon: "https://mastodon.social/@mastodonuser",
  email: "address@yoursite.com",
  github: "https://github.com",
  // twitter: 'https://twitter.com/Twitter',
  threads: "https://www.threads.net",
  locale: "en-US",
  // set to true if you want a navbar fixed to the top
};

module.exports = siteMetadata;
