<template>
    <div class="row mt-3">
        <div class="col-md-6 mb-3">
            <h6 class="text-center py-3 home-heading">Agri Products</h6>
            <div class="container home-container">
                <div class="product-images">
                    <div class="cardo">card1</div>
                    <div class="cardo">card1</div>
                    <div class="cardo">card1</div>
                    <div class="cardo">card1</div>
                </div>
                <NuxtLink to="/agriproducts">
                    <button class="btn btn-home mb-3">View More</button>
                </NuxtLink>
            </div>
        </div>
        <div class="col-md-6 mb-3">
            <h6 class="text-center py-3 home-heading">Handicraft Products</h6>
            <div class="container home-container">
                <div class="product-images">
                    <div class="cardo">card1</div>
                    <div class="cardo">card1</div>
                    <div class="cardo">card1</div>
                    <div class="cardo">card1</div>
                </div>
                <NuxtLink to="/handicrafts">
                    <button class="btn btn-home mb-3">View More</button>
                </NuxtLink>
            </div>
        </div>
    </div>

    <div class="row mt-5">
        <div class="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12">
            <h6 class="p-3 home-linear-heading">Tour Packages</h6>
            <div class="home-tour-group">
                <div class="row">
                    <div class="col-md-3">
                    <div class="cardo">card1</div>
                </div>
                    <div class="col-md-3">
                    <div class="cardo">card1</div>
                </div>
                    <div class="col-md-3">
                    <div class="cardo">card1</div>
                </div>
                    <div class="col-md-3">
                    <div class="cardo">card1</div>
                </div>
                </div>
                <NuxtLink to="/tours">
                    <button class="btn btn-home my-3">View All</button>
                </NuxtLink>
            </div>
        </div>
    </div>

    <div class="row mt-5">
        <div class="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12">
            <h6 class="p-3 home-linear-heading">Accommodation</h6>
            <div class="home-tour-group">
                <div class="row">
                    <div class="col-md-3">
                    <div class="cardo">card1</div>
                </div>
                    <div class="col-md-3">
                    <div class="cardo">card1</div>
                </div>
                    <div class="col-md-3">
                    <div class="cardo">card1</div>
                </div>
                    <div class="col-md-3">
                    <div class="cardo">card1</div>
                </div>
                </div>
                <NuxtLink to="/accommodation">
                    <button class="btn btn-home my-3">View All</button>
                </NuxtLink>
            </div>
        </div>
        <div class="row mt-5">
        <div class="col-md-6 mt-3">
            <h6 class="text-center py-3 home-heading">Popular Agri Products</h6>
            <div class="container home-container">
                <div class="product-images">
                    <div class="cardo">card1</div>
                    <div class="cardo">card1</div>
                    <div class="cardo">card1</div>
                    <div class="cardo">card1</div>
                </div>
                <NuxtLink to="/agriproducts">
                    <button class="btn btn-home mb-3">View More</button>
                </NuxtLink>
            </div>
        </div>
        <div class="col-md-6 mt-3">
            <h6 class="text-center py-3 home-heading">Popular Handicraft Products</h6>
            <div class="container home-container">
                <div class="product-images">
                    <div class="cardo">card1</div>
                    <div class="cardo">card1</div>
                    <div class="cardo">card1</div>
                    <div class="cardo">card1</div>
                </div>
                <NuxtLink to="/handicrafts">
                    <button class="btn btn-home mb-3">View More</button>
                </NuxtLink>
            </div>
        </div>
    </div>
    </div>


</template>

<script>
export default {

}
</script>

<style scoped>
.home-linear-heading{
    max-width: 50% ;
    color: #fff;
    background: #f7941e;
    margin: 0;
    border-radius: 5px 5px 0 0;
}
.home-heading {
    color: #fff;
    background: #f7941e;
    margin: 0;
    border-radius: 5px 5px 0 0;
}
.home-tour-group{
    background: #fff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 2rem;
}

.home-container {
    background: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
    /* width: 80%; */
    border-radius: 5px;
}

.product-images {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem;
}

.cardo {
    width: 10rem;
    height: 10rem;
    background: #f7941e;
    border-radius: 5px;
    margin: 0.5rem;
    color: #fff;
}

.btn-home {
    background: #f7941e;
    color: #fff;
    border: none;
    border-radius: 5px;
    margin: 0 auto;
    width: 50%;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 10rem;
}

.btn-home:hover {
    background: #f9741e;
    color: #333369;
}
</style>