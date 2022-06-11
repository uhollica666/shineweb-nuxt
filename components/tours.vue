<template>
  <div class="accommodation-element mt-5">
    <h4>Explore Our Popular Tours</h4>
    <p class="mt-3">Discover the Eastern Bhutan</p>
  </div>
  <div class="row mb-3">
    <div
      v-for="tour in tours"
      :key="tour.id"
      class="col-md-4 col-lg-3 col-xl-3 col-sm-6 col-xs-12 mt-2"
    >
      <div class="card mt-2">
        <div class="card-body">
          <img :src="tour.image_id" alt="" class="card-img" />
          <NuxtLink to="/#AccomodationDetails" class="accommodation-details">
            <div class="card-details">
              <h6 class="card-title text-truncate">
                {{ tour.post_id }}
              </h6>
              <h6 class="card-text my-3"><i class="bi bi-cash-coin mr-1"></i> Nu. {{ tour.price }} / night</h6>
                <div class="location-tours text-truncate mb-2">
                  <i class="bi bi-geo-alt"></i>{{ tour.location_id }}
                </div>
                <div class="duration-tours text-truncate">
                  <i class="bi bi-stopwatch "></i>
                  {{ tour.duration_time }}
                </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tours"],
};
</script>

<style>
.duration-tours {
  display: flex;
}
.card {
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.26);
}
.card-body {
  padding: 0;
}
.card-img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}
.card-details {
  padding: 0.5rem 1rem;
}
.details {
  display: flex;
}
.location-tours {
  width: 50%;
}
.price {
  text-align: right;
}
.accommodation-details {
  text-decoration: none;
  color: #2c3e50;
}
.accommodation-details:hover {
  color: #f7941e;
}
</style>