<template>
    <div>
        <HomeHeader />
        <main class="main">
            <div class="mini-store">
                <h1 class="mini-store-title">our best gadgets and clothes</h1>
                <div class="mini-store-container">
                    <div v-for="p in products">
                        <ProductCard :product="p" />
                    </div>
                </div>
            </div>
            <div class="feature">
                <h1 class="feature-title">Why should you choose us?!</h1>
                <div class="feature-content">
                    <div class="feature-step">
                        <img src="../assets/img/working.png" alt="" class="faeture-img">
                        <h2 class="feuture-name">Hardworking workers</h2>
                        <p class="feuture-desc">Dozens of our specialists, selected from hundreds of vacancies, work for you!</p>
                    </div>
                    <div class="feature-step">
                        <img src="../assets/img/account-cash.png" alt="" class="faeture-img">
                        <h2 class="feuture-name">Your money</h2>
                        <p class="feuture-desc">We're interested in helping you buy products for less</p>
                    </div>
                    <div class="feature-step">
                        <img src="../assets/img/account-cash.png" alt="" class="faeture-img">
                        <h2 class="feuture-name">The best quality</h2>
                        <p class="feuture-desc">We're interested in helping you buy products for less</p>
                    </div>
                    <div class="feature-step">
                        <img src="../assets/img/account-cash.png" alt="" class="faeture-img">
                        <h2 class="feuture-name">Your trust</h2>
                        <p class="feuture-desc">For 13 years we have been delighting you and your loved ones with affordable and high-quality goods.</p>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    });

    fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=> console.log(json))

    const uri = 'https://fakestoreapi.com/products/';
    console.log(uri)

    const { data: products } = await useFetch('https://fakestoreapi.com/products/?limit=6');
</script>

<style lang="scss" scoped>
    .feature {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .feature-title {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 800;
        font-size: 64px;
        line-height: 75px;
        text-align: center;

        color: #000000;
        max-width: 466px;
        @media (max-width: 640px) {
            font-size: 56px;
            line-height: 62px;
        }
        @media (max-width: 480px) {
            font-size: 40px;
            line-height: 1.2;
        }    
        // @media (max-width: 768px) {
        //     font-size: 58px;
        //     line-height: 64px;
        // }
    }
    .logo { 
        list-style-type: none;  
        text-decoration: none; 
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 32px;
        color: #000000;
    }
    .test {
        border: 1px solid #000;
        padding: 3px;
        height: 48px;
        border-radius: 30px;
        width: 100%;
        background: url(assets/img/search.png) no-repeat 99.4% 6px;
        background-size: auto 42px;
        display: flex;
        
    }   
    .main-navigation {
        display: flex;
        justify-content: space-between;
        margin: 28px 0px;
        align-items: center
    }
    .body {
        margin: 0 80px;
    }
    .btn {    
        background: #545050;
        border-radius: 67px;
        text-align: center;
        width: 161px;
        height: 70px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
        color: #FFFFFF;

    }
    .search {
        margin-bottom: 57px;
    }
    .navigation {
        display: flex;
        justify-content: space-between;
        li {
            margin: 0px 28px 0px 28px;
            list-style-type: none;
            a { 
                text-decoration: none; 
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 400;
                font-size: 20px;
                line-height: 20px;
                color: #000000;
            } 
        }
    }
    .feature-content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .feature-step {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .feuture-name {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 800;
        font-size: 48px;
        line-height: 1.2;
        text-align: center;
        margin: 0;

        color: #000000;
        @media (max-width: 640px) {
            font-size: 48px;
            line-height: 54px;
        }
        @media (max-width: 480px) {
            font-size: 40px;
            line-height: 1.2;
        }    
    }
    .feuture-desc {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 800;
        font-size: 18px;
        line-height: 24px;
        text-align: center;
        max-width: 301px;

        color: #000000;
    }
    .main {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .mini-store {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        max-width: 520px
    }
    .mini-store-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        @media (min-width: 1440px) {
            grid-template-columns: 1fr 1fr 1fr;
        }
        @media (max-width: 768px) {
            grid-template-columns: 1fr;
        }
    }
    .mini-store-title {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 64px;
        line-height: 75px;
        text-align: center;
        color: #000000;
        @media (max-width: 640px) {
            font-size: 56px;
            line-height: 62px;
        }
        @media (max-width: 480px) {
            font-size: 32px;
            line-height: 36px;
        }
    }
</style>