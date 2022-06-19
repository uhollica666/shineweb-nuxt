<template>
    <NuxtLayout name="default">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-lg-3 col-xl-3 col-sm-12 col-xs-12">
                    <CommonSidebarFilter :filterItems="filterItems" :searchFilter="searchFilter"
                        :starFilter="starFilter" />
                </div>
                <div class="col-md-9 col-lg-9 col-xl-9 col-sm-12 col-xs-12">
                    <CommonPageBanner />
                    <div class="dzongkhag-accommodation mt-5">
                        <h4 class="text-capitalize">
                            Explore accommodatons under
                            {{ $route.params.location_id }} dzongkhag
                        </h4>
                        <div class="row">
                            <div class="col-md-4 col-lg-3 col-xl-3 col-sm-6 col-xs-12 mt-3"
                                v-for="accommodation in accommodations" :key="accommodation.id">
                                <div class="card mt-3" v-show="
                                    accommodation.location_id === $route.params.location_id
                                ">
                                    <div class="card-body">
                                        <img :src="accommodation.image_id" alt="" class="card-img" />
                                        <NuxtLink :to="'/accomodation/' + accommodation.title"
                                            class="accommodation-details">
                                            <div class="card-details">
                                                <h6 class="card-title text-truncate">
                                                    {{ accommodation.title }}
                                                </h6>
                                                <h6 class="card-text my-3">
                                                    <i class="bi bi-cash-coin mr-1"></i> Nu.
                                                    {{ accommodation.price }} / night
                                                </h6>
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
                    </div>

                    <div class="dzongkhag-accommodation mt-5">
                        <h4 class="text-capitalize">
                            Explore Tours under {{ $route.params.location_id }} dzongkhag
                        </h4>
                        <div class="row">
                            <div class="col-md-4 col-lg-3 col-xl-3 col-sm-6 col-xs-12 mt-3" v-for="tour in tours"
                                :key="tour.id">
                                <div class="card mt-2" loading="lazy"
                                    v-show="tour.location_id === $route.params.location_id">
                                    <div class="card-body">
                                        <img :src="tour.image_id" alt="" class="card-img" />
                                        <NuxtLink :to="'/tour/' + tour.post_id" class="accommodation-details">
                                            <div class="card-details">
                                                <h6 class="card-title text-truncate">
                                                    {{ tour.post_id }}
                                                </h6>
                                                <h6 class="card-text my-3">
                                                    <i class="bi bi-cash-coin mr-1"></i> Nu.
                                                    {{ tour.price }} / night
                                                </h6>
                                                <div class="location-tours text-truncate mb-2">
                                                    <i class="bi bi-geo-alt"></i>{{ tour.location_id }}
                                                </div>
                                                <div class="duration-tours text-truncate">
                                                    <i class="bi bi-stopwatch"></i>
                                                    {{ tour.duration_time }}
                                                </div>
                                            </div>
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="my-5">
                        <h4 class="text-capitalize my-3">
                            A little Insight about {{ $route.params.location_id }}
                        </h4>
                        <div><span v-html="sampleText"></span></div>
                    </div>

                    <div class="dzongkhag-accommodation mt-5">
                        <h4 class="text-capitalize">
                            top selling agr products from {{ $route.params.location_id }} dzongkhag
                        </h4>
                        <div class="row">
                            <div class="col-md-4 col-lg-3 col-xl-3 col-sm-6 col-xs-12 mt-3" v-for="tour in tours"
                                :key="tour.id">
                                <div class="card mt-2" loading="lazy"
                                    v-show="tour.location_id === $route.params.location_id">
                                    <div class="card-body">
                                        <img :src="tour.image_id" alt="" class="card-img" />
                                        <NuxtLink :to="'/tour/' + tour.post_id" class="accommodation-details">
                                            <div class="card-details">
                                                <h6 class="card-title text-truncate">
                                                    {{ tour.post_id }}
                                                </h6>
                                                <h6 class="card-text my-3">
                                                    <i class="bi bi-cash-coin mr-1"></i> Nu.
                                                    {{ tour.price }} / night
                                                </h6>
                                                <div class="location-tours text-truncate mb-2">
                                                    <i class="bi bi-geo-alt"></i>{{ tour.location_id }}
                                                </div>
                                                <div class="duration-tours text-truncate">
                                                    <i class="bi bi-stopwatch"></i>
                                                    {{ tour.duration_time }}
                                                </div>
                                            </div>
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div class="dzongkhag-accommodation mt-5">
                        <h4 class="text-capitalize">
                            top selling handicraft products from {{ $route.params.location_id }} dzongkhag
                        </h4>
                        <div class="row">
                            <div class="col-md-4 col-lg-3 col-xl-3 col-sm-6 col-xs-12 mt-3" v-for="tour in tours"
                                :key="tour.id">
                                <div class="card mt-2" loading="lazy"
                                    v-show="tour.location_id === $route.params.location_id">
                                    <div class="card-body">
                                        <img :src="tour.image_id" alt="" class="card-img" />
                                        <NuxtLink :to="'/tour/' + tour.post_id" class="accommodation-details">
                                            <div class="card-details">
                                                <h6 class="card-title text-truncate">
                                                    {{ tour.post_id }}
                                                </h6>
                                                <h6 class="card-text my-3">
                                                    <i class="bi bi-cash-coin mr-1"></i> Nu.
                                                    {{ tour.price }} / night
                                                </h6>
                                                <div class="location-tours text-truncate mb-2">
                                                    <i class="bi bi-geo-alt"></i>{{ tour.location_id }}
                                                </div>
                                                <div class="duration-tours text-truncate">
                                                    <i class="bi bi-stopwatch"></i>
                                                    {{ tour.duration_time }}
                                                </div>
                                            </div>
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>
            </div>

            <div class="row">
                <div class="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12 mt-5">
                    <LazyCommonPromotionWrapper>
                        <CommonPromotion title="Top Events">
                            <CommonPromotionEvents />
                        </CommonPromotion>
                        <CommonPromotion title="Trending Tours">
                            <CommonPromotionTours />
                        </CommonPromotion>
                        <CommonPromotion title="Top Selling Products">
                            <CommonPromotionProducts />
                        </CommonPromotion>
                    </LazyCommonPromotionWrapper>
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
import TOURS_DATA from "~/APIs/Tours_DATA.json";
export default {
    
    computed: {
        accommodations() {
            return ACCOMMODATION_DATA.filter(
                (accommodation) =>
                    accommodation.location_id === this.$route.params.location_id
            );
        },
        tours() {
            return TOURS_DATA.filter(
                (tour) => tour.location_id === this.$route.params.location_id
            );
        },

    },

    data() {
        return {
            sampleText:
                "<h6>Welcome to Zhemgang</h6><p>Zhemgang District, is one of the 20 dzongkhags comprising Bhutan. It is bordered by Sarpang, Trongsa, Bumthang, Mongar and Samdrup Jongkhar Districts, and borders Assam in India to the south. The administrative center of the district is Zhemgang.</p>",
            
        };
    },
};
</script>

<style>
.btn-container {
    justify-content: flex-end;
}

button.limit {
    display: none;
}

.showButton {
    max-width: 100%;
    background: #f7941e;
    color: #fff;
    border: none;
    padding: 0.5rem 2rem;
}

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
