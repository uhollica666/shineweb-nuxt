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
          <FeaturedProducts :products="products" />
        </div>
      </div>
      
          <CommonRecentProducts />
          <CommonPopularProducts />
    </div>
  </NuxtLayout>
</template>

<script>
import PRODUCTS from '~/APIs/Products_DATA.json';
export default {
    data() {
        return {
            products: PRODUCTS,
        };
    },
}
</script>
