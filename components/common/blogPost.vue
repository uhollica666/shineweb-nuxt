<template>
  <h4 class="text-center p-3">Read Stories</h4>
  <p class="text-center">Explore the stories and weekly blog updates</p>
  <div class="row flex-row flex-nowrap overflow-auto mb-5">
    <div
      class="col-md-4 col-lg-4 col-xl-4 col-sm-6 col-xs-6 mt-3 mx-auto"
      v-for="story in stories"
      :key="story.id"
    >
      <div class="card mt-3 mb-3">
        <div class="card-body">
          <img :src="story.image_id" alt="" class="card-img-blog" />
          <NuxtLink to="/#AccomodationDetails" class="category-details">
            <div class="card-details">
              <h6 class="card-title text-truncate">
                {{ story.post_id }}
              </h6>
              <p class="post-details text-truncate">{{ story.post_details }}</p>
              <div class="location text-truncate">
                <i class="bi bi-tag"></i> Category: {{ story.category_id }}
              </div>
              <p class="my-3">
                <i class="bi bi-calendar"></i> Posted on
                {{ story.date_added }}
              </p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BLOG_DATA from "~/APIs/Story_DATA.json";
export default {
  data() {
    return {
      stories: BLOG_DATA,
    };
  },
};
</script>

<style scoped>
.card-img-blog {
  height: 250px;
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
}
</style>