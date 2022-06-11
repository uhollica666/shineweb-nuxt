<template>
  <div class="by-category mt-5 mb-3">
    <h4 class="heading text-capitalize">Explore {{ $route.name }} by Category</h4>
    <p class="mt-3">{{ subTitleCategory }}</p>
    <div class="row">
      <div
        v-for="category in categories"
        :key="category.id"
        class="col-md-3 col-lg-3 col-xl-3 mt-2"
      >
        <div class="card mt-2">
          <div class="card-body">
            <img :src="category.image_id" alt="" class="card-img" />
            <NuxtLink
              to="/#AccomodationDetails"
              class="category-details text-center"
            >
              <div class="card-details">
                <h6 class="card-title text-truncate">
                  {{ category.category }}
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
import CATEGORY_DATA from "~/APIs/TourCategory_DATA.json";

export default {
  setup() {
    const subTitleCategory = "Your comfort is our concern";
    return {
      subTitleCategory,
    }
  },
  data() {
    return {
      categories: CATEGORY_DATA,
    };
  },
};
</script>

<style>
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
.category-details {
  text-decoration: none;
  color: #2c3e50;
}
.category-details:hover {
  color: #f7941e;
}
</style>