// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import "@/assets/scss/main.scss";

const siteUrl = "https://fairfinesnofees.com/";
const siteName = "Fair Fines No Fees";
const metaImage = siteUrl + "meta/meta-img.png";

import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  // Remove hash if users have hash route bookmarked, saved, etc.
  router.beforeEach((to, from, next) => {
    if (to.hash.length) {
      next(to.hash.substr(1));
    } else {
      next();
    }
  });

  head.meta.push({
    property: "og:title",
    content: siteName
  });
  head.meta.push({
    property: "og:url",
    content: siteUrl
  });
  head.meta.push({
    property: "og:site_name",
    content: siteName
  });
  head.meta.push({
    property: "og:image",
    content: metaImage
  });
  head.meta.push({
    name: "twitter:card",
    content: "summary"
  });
  head.meta.push({
    name: "twitter:title",
    content: siteName
  });
  head.meta.push({
    name: "twitter:image",
    content: metaImage
  });
}
