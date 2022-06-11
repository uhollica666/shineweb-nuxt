<template>
  <NuxtLayout name="default">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12">
          <CommonSidebarFilter
            :filterItems="filterItems"
            :searchFilter="searchFilter"
            :starFilter="starFilter"
          />
        </div>
        <div
          class="col-md-9 col-lg-9 col-xl-9 col-sm-12 col-xs-12 infinite-scroll"
        >
          <CommonPageBanner />
          <CommonSortByCategory />
          <CommonToursByDzongkhag />
          <Tours :tours="tours" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12 mt-5">
          <CommonPromotionWrapper>
            <CommonPromotion title="Top Events">
              <CommonPromotionEvents />
            </CommonPromotion>
            <CommonPromotion title="Trending Tours">
              <CommonPromotionTours />
            </CommonPromotion>
            <CommonPromotion title="Top Selling Products">
              <CommonPromotionProducts />
            </CommonPromotion>
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
import TOURS_DATA from "~/APIs/Tours_DATA.json";

export default {
    data() {
        return {
            tours: TOURS_DATA,
        };
        // return {
        //     tours: []
        // };
    },
    // async mounted(){
    //     const touritems = await fetch('http://localhost:8000/api/tours');
    //     const content = await touritems.json();
    //     this.tours = content;
    // },

  methods: {
    filterItems(filter) {
      this.resetAccommodations();
      if (filter === "All") {
        this.tours = TOURS_DATA;
      } else if (filter === "Dagana") {
        return alert("No Tours Available in Dagana");
      } else {
        this.tours = TOURS_DATA.filter((tour) => {
          return tour.location_id.toLowerCase().includes(filter.toLowerCase());
        });
      }
    },

    starFilter(starRating) {
      this.resetAccommodations();
      if (starRating === "All") {
        this.tours = TOURS_DATA;
      } else if (starRating === 3) {
        this.tours = TOURS_DATA.filter((tour) => {
          return tour.star_rate === 3;
        });
      } else if (starRating === 4) {
        this.tours = TOURS_DATA.filter((tour) => {
          return tour.star_rate === 4;
        });
      } else if (starRating === 5) {
        this.tours = TOURS_DATA.filter((tour) => {
          return tour.star_rate === 5;
        });
      } else {
        this.tours = TOURS_DATA.filter((tour) => {
          return tour.star_rate === 2;
        });
      }
    },

    searchFilter(search) {
      this.resetAccommodations();
      this.tours = TOURS_DATA.filter((tour) => {
        return tour.title.toLowerCase().includes(search.toLowerCase());
      });
    },
    resetAccommodations() {
      this.tours = TOURS_DATA;
    },
  },
};
</script>

<style>
</style>