<template>
  <NuxtLayout name="default">
    <div class="container">
    <div class="row">
      <div class="col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12">
        <CommonSidebarFilter
          :searchFilter="searchFilter"
          :filterItems="filterItems"
          :starFilter="starFilter"
        />
      </div>
      <div
        class="col-md-9 col-lg-9 col-xl-9 col-sm-12 col-xs-12 infinite-scroll"
      >
        <CommonPageBanner />
        <CommonSortByCategory />
        <CommonViewByDzongkhag />
        <Accommodation :accommodations="accommodations" />
        <Hotels :hotels="hotels" />
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12 mt-5">
        <CommonPromotionWrapper>
          <CommonPromotion title="Top Events"><CommonPromotionEvents /></CommonPromotion>
          <CommonPromotion title="Trending Tours"><CommonPromotionTours /></CommonPromotion>
          <CommonPromotion title="Top Selling Products"
            ><CommonPromotionProducts
          /></CommonPromotion>
        </CommonPromotionWrapper>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12 mt-5">
        <CommonBlogPost />
      </div>
    </div>
  </div>
  </NuxtLayout>
</template>

<script>
import ACCOMMODATION_DATA from "~/APIs/Accommodation_DATA.json";

export default {
  data() {
    return {
      accommodations: ACCOMMODATION_DATA,
    };
  },

  methods: {
    
    filterItems(filter) {
      this.resetAccommodations();
      if (filter === "All") {
        this.accommodations = ACCOMMODATION_DATA;
      } else {
        this.accommodations = ACCOMMODATION_DATA.filter((accommodation) => {
          return accommodation.location_id
            .toLowerCase()
            .includes(filter.toLowerCase());
        });
      }
    },
    starFilter(starRating) {
      this.resetAccommodations();
      if (starRating === "All") {
        this.accommodations = ACCOMMODATION_DATA;
      } else if (starRating === 3) {
        this.accommodations = ACCOMMODATION_DATA.filter((tour) => {
          return tour.star_rate === 3;
        });
      } else if (starRating === 4) {
        this.accommodations = ACCOMMODATION_DATA.filter((tour) => {
          return tour.star_rate === 4;
        });
      } else if (starRating === 5) {
        this.accommodations = ACCOMMODATION_DATA.filter((tour) => {
          return tour.star_rate === 5;
        });
      } else {
        this.accommodations = ACCOMMODATION_DATA.filter((tour) => {
          return tour.star_rate === 2;
        });
      }
    },
    searchFilter(search) {
      this.resetAccommodations();
      this.accommodations = ACCOMMODATION_DATA.filter((accommodation) => {
        return accommodation.title.toLowerCase().includes(search.toLowerCase());
      });
    },
    resetAccommodations() {
      this.accommodations = ACCOMMODATION_DATA;
    },
  },
};
</script>