<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
useHead({
  title: "Shine",
  // or, instead:
  titleTemplate: (title) => `Welcome to ${title}`,
  viewport: "width=device-width, initial-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: "Shine amazing site." }],
  link: [{ rel: "icon", href: "/favicon.png" }],
  script: [{ src: "/assets/js/bootstrap.min.js", mode: "client" }],
  bodyAttrs: {
    class: "test",
  },
});
</script>

