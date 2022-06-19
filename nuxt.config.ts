import { defineNuxtConfig } from "nuxt";
import axios from "axios";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: [ "@pinia/nuxt"],

  css: [
    "~/node_modules/bootstrap/dist/css/bootstrap.min.css",
    "~/assets/css/main.css",
  ],

  script: [{ src: "/assets/js/bootstrap.min.js", mode: "client" }],
});
