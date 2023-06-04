<template>
    <div class="main-footer">
        <div class="main-footer-navigation">
            <div class="about-navigation-1 about-navigation">
                <p class="about-item"><NuxtLink to="/" class="item-phone">Home</NuxtLink></p>
                <p class="about-item"><NuxtLink to="/products" class="item-phone">Products</NuxtLink></p>
                <p class="about-item"><NuxtLink to="/contacts" class="item-phone">Contacts</NuxtLink></p>
                <p class="about-item"><NuxtLink to="/basket" class="item-phone">Basket</NuxtLink></p>
                <p class="about-item"><NuxtLink to="/worked" class="item-phone">Workers</NuxtLink></p>
                <p class="about-item"><NuxtLink to="/company" class="item-phone">Company</NuxtLink></p>
            </div>
            <div class="about-line about-line-1"></div>
            <div class="about-navigation-2 about-navigation">
                <p class="about-item"><a href="https://t.me/potato_d">Admin tg</a></p>
                <p class="about-item"><a href="tel:+380931226277">380 (93) 122 62 77</a></p>
            </div>
            <div class="about-line about-line-2"></div>
            <div class="about-navigation-3 about-navigation">
                <p class="about-item"><a>item 1</a></p>
                <p class="about-item"><a>item 2</a></p>
                <p class="about-item"><a>item 3</a></p>
                <p class="about-item"><a>item 4</a></p>
                <p class="about-item"><a>item 5</a></p>
            </div>
        </div>
        <div class="main-footer-img">
            <img src="../assets/img/168ace6-deal-warren-buffett.jpg" alt="" class="faeture-img">
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .main-footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        max-width: 768px;
        @media (max-width: 640px) {
            flex-direction: column;
            justify-content: center;
        }
        &-navigation {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        // &-img {
        //     width: 30px;
        // }
    }
    // .about-navigation-2 {
    //     display: flex;
    //     flex-direction: column;
    // }
    .about-line {
        width: 1px;
        background-color: #111;
        height: 160px;
        margin: 0 16px;
    }
    .about-item {
        text-decoration: none;
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 1;
        color: #000000;
    }
    .main-footer-img {
        margin-left: 50px;
        @media (max-width: 640px) {
            margin-left: 0px;
            margin-bottom: 20px;
            margin-top: 20px;
        }
    }
    .faeture-img {
        height: 160px;
    }
    a:hover {
        text-decoration: underline
    }
    a {
        text-decoration: none;
        color: #111;
    }
</style>