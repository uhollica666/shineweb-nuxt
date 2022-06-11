<template>
  <div class="by-category mt-5 mb-2">
    <h4 class="heading text-capitalize">Explore {{ $route.name }} by Dzongkhags</h4>
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
              to="/#AccomodationDetails"
              class="category-details text-center"
            >
              <div class="card-details">
                <h6 class="card-title text-truncate">
                  {{ dzongkhag.location_id }}
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
import DZONGKHAG_DATA from "~/APIs/Dzongkhags_DATA.json";
export default {
  setup() {
        const catSubtitle = 'Eastern Bhutan Destinations Now Open';
        return {
            catSubtitle,
        }
    },
  data() {
    return {
      dzongkhags: DZONGKHAG_DATA,
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