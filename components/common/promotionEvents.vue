<template>
  <div class="by-category mb-3">
    <div class="row flex-row flex-nowrap overflow-auto">
      <div
        class="col-md-3 col-lg-3 col-xl-3 col-sm-3 col-xs-3 mt-2 mb-3 mx-0"
        v-for="prompEvent in prompEvents"
        :key="prompEvent.id"
      >
        <div class="card mt-3">
          <div class="card-body">
            <img :src="apiURL + prompEvent.file_path" alt="" class="card-img" />
            <NuxtLink
              :to="'/stories/' + prompEvent.title"
              class="category-details"
            >
              <div class="card-details">
                <h6 class="card-title text-truncate">
                  {{ prompEvent.title }}
                </h6>
                <div class="location text-truncate">
                  <i class="bi bi-tag"></i>{{ prompEvent.name }}
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
    prompEvents() {
      return prompEvents.filter(
        (prompEvent) => prompEvent.name === "Adventure Travel"
      );
    },
  },
  async setup() {
    const apiURL = "http://dev.hemantbhutanrealestate.com/uploads/";
    const [{ data: prompEvents }] = await Promise.all([
      useFetch("http://dev.hemantbhutanrealestate.com/api/articles"),
    ]);
    return {
      prompEvents,
      apiURL,
    };
  },
};
</script>
<style scoped>
.contain {
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;
}

i.bi {
  margin-right: 0.5rem;
}
</style>