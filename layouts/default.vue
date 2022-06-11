<template>
    <div>
        <CommonNavbar />
        <NuxtPage />
        <slot />
        <CommonFooter />
    </div>
</template>

<script>
import Navbar from '~~/components/common/navbar.vue';
export default {
    components: { Navbar }
}
</script>

<style>

</style>