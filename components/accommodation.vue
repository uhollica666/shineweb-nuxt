<template>
  <div class="accommodation-element mt-5">
    <h4>Accommodations</h4>
  </div>
  <div class="row mb-5">
    <div
      v-for="accommodation in accommodations"
      :key="accommodation.id"
      class="col-md-4 col-lg-3 col-xl-3 col-sm-6 col-xs-12 mt-3"
    >
      <div class="card mt-3">
        <div class="card-body">
          <img :src="accommodation.image_id" alt="" class="card-img" />
          <NuxtLink to="/#AccomodationDetails" class="accommodation-details">
            <div class="card-details">
              <h6 class="card-title text-truncate">
                {{ accommodation.title }}
              </h6>
              <h6 class="card-text my-3"><i class="bi bi-cash-coin mr-1"></i> Nu. {{ accommodation.price }} / night</h6>
              <div class="details">
                <div class="location text-truncate">
                  <i class="bi bi-geo-alt"></i>{{ accommodation.location_id }}
                </div>
                <h6 class="rating">
                  <i class="bi bi-star-fill start-icon mx-1"></i>
                  {{ accommodation.star_rate }} / 5
                </h6>
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
  props: ["accommodations"],
};
</script>

<style scoped>
.start-icon {
  color: #f7941e;
  padding: 2px;
  padding-bottom: 5px;
}
.rating {
  display: flex;
  justify-content: center;
  align-items: center;
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
.location {
  width: 60%;
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