<template>
    <div class="store">
        <div class="header">
            <div class="header-points">
                <div class="header-logo"></div>
                <div class="header-items"></div>
                <div class="header-button"></div>
            </div>
        </div>
        <div class="allProducts">
            <div v-for="p in products">
                <ProductCard :product="p" />
            </div>
        </div>
    </div>
</template>


<script setup>
    definePageMeta({
        layout: 'products'
    });
    const { data: products } = await useFetch('https://fakestoreapi.com/products');
    // import store from '@/store/index.js';
    // console.log(this.$store.state.count);
</script>

<style lang="scss" scoped>
    .store {
        display: flex;
        justify-content: center;
    }
    .allProducts {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        @media (max-width: 1240px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 768px) {
            grid-template-columns: 1fr;
        }
    }
</style>