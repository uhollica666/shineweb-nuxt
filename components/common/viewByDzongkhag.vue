<template>
  <div class="by-category mt-5 mb-2">
    <h4 class="heading text-capitalize">
      Explore {{ $route.name }} by Dzongkhags
    </h4>
    <p class="mt-3">{{ catSubtitle }}</p>
    <div class="row">
      <div
        v-for="dzongkhag in dzongkhags"
        :key="dzongkhag.id"
        class="col-md-2 col-lg-2 col-xl-2 col-sm-4 col-xs-6 mt-2"
      >
        <div class="card mt-2">
          <div class="card-body">
            <img :src="dzongkhag.image_id" alt="" class="card-img-dzo" />
            <NuxtLink
              :to="'/dzongkhags/' + dzongkhag.name"
              class="category-details text-center"
            >
              <div class="card-details">
                <h6 class="card-title text-truncate">
                  {{ dzongkhag.name }}
                </h6>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async setup() {
    const catSubtitle = "Eastern Bhutan Destinations Now Open";
    const apiURL = "http://dev.hemantbhutanrealestate.com/uploads/";
    const [{ data: dzongkhags }] = await Promise.all([
      useFetch("http://dev.hemantbhutanrealestate.com/api/bc_locations"),
    ]);
    return {
      dzongkhags,
      apiURL,
      catSubtitle,
    };
  },
};
</script>

<style scoped>
.card-img-dzo {
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
}
</style>