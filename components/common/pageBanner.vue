<template>
  <div class="banner">
    <div class="row mt-5">
      <div class="col-md-12">
        <div class="banner-content" v-if="$route.name === 'accommodation'">
          <div class="banner-text">
            <h1>
              <span class="text-uppercase"> {{ $route.name }} </span>
            </h1>
            <p>{{ subTitleAccommodation}}</p>
          </div>
        </div>
        <div class="banner-content-tours" v-else>
          <div class="banner-text">
            <h1>
              <span class="text-uppercase"> {{ $route.name }} </span>
            </h1>
            <p>{{ subTitleTours }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const subTitleAccommodation = 'The best places to stay in Bhutan';
    const subTitleTours = 'The Best Bhutan Experience';
    return {
      subTitleAccommodation,
      subTitleTours
    };
  }
};
</script>

<style scoped>
.banner-content-tours{
  background-image: url(~/assets/img/tourpackage.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 350px;
  display: flex;
  position: relative;
  border-radius: 5px;
  transition: 0.3s all ease-in-out;
}
.banner-content {
  background-image: url(~/assets/img/AccommoDation.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 350px;
  display: flex;
  position: relative;
  border-radius: 5px;
  transition: 0.3s all ease-in-out;
}
.banner-content:hover{
  scale: 1.1;
  filter: brightness(0.8);
}

.banner-text {
  position: absolute;
  bottom: 10%;
  color: #fff;
  padding-left: 2rem;
  padding-bottom: 1rem;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  width: 100%;
}
</style>