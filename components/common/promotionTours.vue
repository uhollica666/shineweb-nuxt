<template>
  <div class="by-category mb-3">
    <div class="row flex-row flex-nowrap overflow-auto">
      <div
        v-for="prompTour in prompTours"
        :key="prompTour.id"
        class="col-md-3 col-lg-3 col-xl-3 col-sm-3 col-xs-3 mt-2 mb-3"
      >
        <div class="card mt-3">
          <div class="card-body">
            <img :src="apiURL + prompTour.file_path" alt="" class="card-img" />
            <NuxtLink :to="apiURL + prompTour.title" class="category-details">
              <div class="card-details">
                <h6 class="card-title text-truncate">
                  {{ prompTour.title }}
                </h6>
                <div class="location text-truncate">
                  <i class="bi bi-geo-alt"></i>{{ prompTour.name }}
                </div>
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
  computed: {
    prompTours() {
      return prompTours.filter(
        (prompTour) => prompTour.name === "Adventure Travel"
      );
    },
  },
  async setup() {
    const apiURL = "http://dev.hemantbhutanrealestate.com/uploads/";
    const [{ data: prompTours }] = await Promise.all([
      useFetch("http://dev.hemantbhutanrealestate.com/api/bc_tours"),
    ]);
    return {
      prompTours,
      apiURL,
    };
  },
};
</script>

<style scoped>
i.bi {
  margin-right: 0.5rem;
}
</style>