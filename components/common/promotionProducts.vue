<template>
  <div class="by-category mb-3">
    <div class="row flex-row flex-nowrap overflow-auto">
      <div
        v-for="prompEvent in prompEvents"
        :key="prompEvent.id"
        class="col-md-3 col-lg-3 col-xl-3 col-sm-3 col-xs-3 mt-2 mb-3"
      >
        <div class="card mt-3">
          <div class="card-body">
            <img :src="prompEvent.image_id" alt="" class="card-img" />
            <NuxtLink to="/#AccomodationDetails" class="category-details">
              <div class="card-details">
                <h6 class="card-title text-truncate">
                  {{ prompEvent.event_id }}
                </h6>
                <div class="location text-truncate">
                  <i class="bi bi-geo-alt"></i>{{ prompEvent.location_id }}
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
import PROMOTIONEVENT_DATA from "~/APIs/PromotionEvents_DATA.json";

export default {
  data() {
    return {
      prompEvents: PROMOTIONEVENT_DATA,
    };
  },
};
</script>