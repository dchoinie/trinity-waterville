const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "Trinity Evangelical Lutheran Church",
    address: "415 Lake St W",
    city_state: "Waterville, MN",
    zip: "56096",
    phone: "507-362-4454",
    email: "pastor@trinitywaterville.org",
    siteUrl: "https://www.trinity-waterville.org",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "9bpb8o55",
        dataset: "production",
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "\u0016",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
  ],
};