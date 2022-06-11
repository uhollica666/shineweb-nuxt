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
  script: [{ src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js", mode: "client", integrity:"sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" }],
  bodyAttrs: {
    class: "test",
  },
});
</script>
