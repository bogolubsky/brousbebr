<template>
    <div class="body">
        <header class="header">
            <nav class="main-navigation">
                <NuxtLink to="/" class="logo">Brousbebr</NuxtLink>
                <ul class="navigation">
                    <li>
                        <NuxtLink to="/basket">Basket</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/contacts">Contacts</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/products" class="">Products</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/worked" class="">Workers</NuxtLink>
                    </li>
                </ul>
                <NuxtLink to="/company" class="company">
                    <button  class="btn">Company</button>
                </NuxtLink>
            </nav>
            <nav class="main-navigation-1">
                <NuxtLink to="/" class="logo">Brousbebr</NuxtLink>
                <div class="header-burger" @click="toggleShowSide" v-bind:class="{ active: isElVisible }">
                    <span></span>
                </div>
                <ul class="navigation-1" v-if="isElVisible">
                    <li class="item">
                        <NuxtLink to="/basket" class="item-phone">Basket</NuxtLink>
                    </li>
                    <li class="item">
                        <NuxtLink to="/contacts" class="item-phone">Contacts</NuxtLink>
                    </li>
                    <li class="item">
                        <NuxtLink to="/products" class="item-phone">Products</NuxtLink>
                    </li>
                    <li class="item">
                        <NuxtLink to="/worked" class="item-phone">Workers</NuxtLink>
                   </li>
                    <li class="item">
                        <NuxtLink to="/company" class="item-phone">Company</NuxtLink>
                    </li>
                    <li class="item">
                        <NuxtLink to="/" class="item-phone">Home</NuxtLink>
                    </li>
                </ul>
            </nav>
            <div class="search">
                <input class='test'/>
                <!-- <ul> v-model="search" 
                    <li v-for="item in searchHandler" :key="item">
                        <h1>{{ item.title }}</h1>
                    </li>
                </ul> -->
            </div>
        </header>

        <div class="main-content">
            <div class="store">
                <div class="Products-container">
                    <div class="buttons-container">
                        <button @click="toggle1()" class="btn-rule">
                            default
                        </button>
                        <button @click="toggle2()" class="btn-rule">       
                            from cheap
                        </button>
                        <button @click="toggle3()" class="btn-rule">
                            best rating
                        </button>
                        <button @click="toggle4()" class="btn-rule">
                            from expensive
                        </button>
                        <button @click="toggle5()" class="btn-rule">                      
                            alphabet order
                        </button>
                    </div>
                    <div class="allProducts">
                        <div class="title-products products store_none" v-if="isElVisible1">
                            <div v-for="p_default in products">
                                <ProductCard :product="p_default" />
                            </div>
                        </div>
                        <div class="price-products products" v-if="isElVisible2">
                            <div v-for="p_price in cheapPrice">
                                <ProductCard :product="p_price" />
                            </div>
                        </div>
                        <div class="rating-products products" v-if="isElVisible3">
                            <div v-for="p_rating in rating">
                                <ProductCard :product="p_rating" />
                            </div>
                        </div>
                        <div class="rating-products products" v-if="isElVisible4">
                            <div v-for="p_pric in expensivePrice">
                                <ProductCard :product="p_pric" />
                            </div>
                        </div>
                        <div class="rating-products products" v-if="isElVisible5">
                            <div v-for="p_pric in title">
                                <ProductCard :product="p_pric" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="line-border"></div>

        <footer class="footer">
            <FooterMain />
        </footer>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products',
        layout: 'rating',
        layout: 'cheapPrice',
        layout: 'expensivePrice',
        layout: 'title',
    });
    const { data: products } = await useFetch('https://fakestoreapi.com/products');

    const arr = [];
    const arr2 = [];
    const arr3 = [];
    const arr4 = [];

    toRaw(products.value.forEach(item => {
        arr.push(item)
    }));
    toRaw(products.value.forEach(item => {
        arr2.push(item)
    }));
    toRaw(products.value.forEach(item => {
        arr3.push(item)
    }));
    toRaw(products.value.forEach(item => {
        arr4.push(item)
    }));

    const cheapPrice = arr.sort((a, b) => {
        if (b.price > a.price) {
            return -1;
        }
        if (b.price < a.price) {
            return 1;
        }

        return 0;
    });

    const expensivePrice = arr3.sort((a, b) => {
        if (b.price < a.price) {
            return -1;
        }
        if (b.price > a.price) {
            return 1;
        }

        return 0;
    });


    const rating = arr2.sort((a, b) => {
        if (b.rating.rate < a.rating.rate) {
            return -1;
        }
        if (b.rating.rate > a.rating.rate) {
           return 1;
        }

        return 0;
    });

    const title = arr4.sort((a, b) => {
        const t_a=a.title.toLowerCase(), t_b=b.title.toLowerCase()

        if (t_a < t_b) {
            return -1;
        }
        if (t_b > t_a) {
           return 1;
        }

        return 0;
    });

    console.log(rating)

</script>
<script>
export default {
    data: () => {
        return {
            isElVisible: false,
            isElVisible1: true,
            isElVisible2: false,
            isElVisible3: false,
            isElVisible4: false,
            isElVisible5: false
        }
    },
    methods: {
        toggleShowSide() {
            this.isElVisible = !this.isElVisible
            console.log('mb')
        },
        toggle1() {
            this.isElVisible1 = true,
            this.isElVisible2 = false,
            this.isElVisible3 = false,
            this.isElVisible4 = false
            this.isElVisible5 = false
        },
        toggle2() {
            this.isElVisible1 = false,
            this.isElVisible2 = true,
            this.isElVisible3 = false,
            this.isElVisible4 = false
            this.isElVisible5 = false
        },
        toggle3() {
            this.isElVisible1 = false,
            this.isElVisible2 = false,
            this.isElVisible3 = true,
            this.isElVisible4 = false
            this.isElVisible5 = false
        },
        toggle4() {
            this.isElVisible1 = false,
            this.isElVisible2 = false,
            this.isElVisible3 = false,
            this.isElVisible4 = true
            this.isElVisible5 = false
        },
        toggle5() {
            this.isElVisible1 = false,
            this.isElVisible2 = false,
            this.isElVisible3 = false,
            this.isElVisible4 = false
            this.isElVisible5 = true
        }
    },
}
</script>

<style lang="scss" scoped>
    .store_none {
        display: none;
    }
    body {
        margin: 0
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
    .footer {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .line-border {
        width: 100%;
        height: 1px;
        background-color: #111;
        margin: 50px 0 20px;
    }
    // .company {
    //     display: none;
    // }
    .search {
        margin-bottom: 24px;
        @media (max-width: 1240px) {
            margin-bottom: 20px;
        }
        @media (max-width: 768px) {
            margin-bottom: 16px;
        }
    }
    .test {
        border: 1px solid #000;
        padding: 3px;
        height: 48px;
        border-radius: 30px;
        width: 100%;
        background: url(assets/img/search.png) no-repeat 99.3% 6px;
        background-size: auto 42px;
        display: flex;
        @media (max-width: 1024px) {
            background: url(assets/img/search.png) no-repeat 99.3% 6px;
            background-size: auto 36px;
            height: 42px;
        }
        @media (max-width: 768px) {
            background: url(assets/img/search.png) no-repeat 98.8% 6px;
            background-size: auto 36px;
        }
        @media (max-width: 375px) {
            background: url(assets/img/search.png) no-repeat 98.4% 6px;
            background-size: auto 30px;
            height: 36px;
        }
    }   
    .main-navigation {
        display: flex;
        justify-content: space-between;
        margin: 28px 0px;
        align-items: center;
        @media (max-width: 1240px) {
            display: none;
        }
    }
    .active {
        span {
            animation: burgerAnimationReverse 0.1s ease 0s;
            animation-fill-mode: forwards
        }
        &::before {
            @media (max-width: 1240px) {
                animation: burgerBeforeAnimation 0.3s ease 0s;
                animation-fill-mode: forwards
            }
            @media (max-width: 480px) {
                animation: burgerBeforeAnimationPhone 0.3s ease 0s;
                animation-fill-mode: forwards
            }
        }
        &::after {
            @media (max-width: 1240px) {
                animation: burgerAfterAnimation 0.3s ease 0s;
                animation-fill-mode: forwards
            }
            @media (max-width: 480px) {
                animation: burgerAfterAnimationPhone 0.3s ease 0s;
                animation-fill-mode: forwards
            }
        }
}

    @keyframes burgerAnimation {
        from {opacity: 0;}
        to {opacity: 1;}
    }
    @keyframes burgerAnimationReverse {
        from {opacity: 1;}
        to {opacity: 0;}
    }
    @keyframes burgerBeforeAnimation {
        0% {
            bottom: 0%;
        }
        100% {
            bottom: 51%;
            transform: rotate(-45deg) translate(0, 51%);
        }
    }
    @keyframes burgerAfterAnimation {
        0% {
            top: 0%;
        }
        100% {
            top: 41%;
            transform: rotate(45deg) translate(0, 51%);
        }
    }
    @keyframes burgerBeforeAnimationPhone {
        0% {
            bottom: 0%;
        }
        100% {
            bottom: 51%;
            background-color: #fff;
            transform: rotate(-45deg) translate(0, 51%);
        }
    }
    @keyframes burgerAfterAnimationPhone {
        0% {
            top: 0%;
        }
        100% {
            top: 41%;
            background-color: #fff;
            transform: rotate(45deg) translate(0, 41%);
        }
    }
    .header-burger {
        display: none;
        position:absolute;
        left: 91%;
        z-index: 150;
        width: 30px;
        height: 18px;
        margin-top: 10px;
        margin-left: -12px;
        @media (min-width: 1240px) {
            display: none;
        }
        @media (max-width: 1240px) {
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }
        @media (max-width: 1024px) {
            left: 92%
        }
        @media (max-width: 480px) {
            left: 94%;
        }
        span {
            height: 3px;
            width: 80%;
            transform: scale(1);
            background-color: #111;
            border-radius: 1px;
            z-index: 150;
        }
        &::before, &::after {
            content: '';
            position: absolute;
            height: 3px;
            width: 100%;
            border-radius: 1px;
            background-color: #111;
            transition: all 0.3s ease;
            z-index: 150;
        }
        &::before {
            bottom: 0;
        }
        &::after {
            top: 0;
        }
    }

    
    .body {
        margin: 0 80px;
        margin-top: -10px;
        @media (max-width: 1024px) {
            margin: 0 20px
        }
        @media (max-width: 480px) {
            left: 12px;
            margin: 0 8px
        }
        @media (max-width: 320px) {
            left: 0;
            margin: 0 5px
        }
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

    }
    .main-navigation-1 {
        @media (min-width: 1240px) {
            display: none;
        }
    }
    .navigation-1 {
        .item a {
            @media (min-width: 1240px) {
                display: none;
            }
        }
        @media (max-width: 1240px) {
            display: flex;
            flex-direction: column;
            position: fixed;
            height: 100%;
            width: 40%;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 102;
            overflow-y: auto;
            padding: 50px 20px;
            background-color: rgb(0, 0, 0, 0.9);
            animation: burgerAnimation 0.4s;
            margin-top: -30px;
            margin: 0;
        }
        @media (max-width: 640px) {
            padding: 30px 20px;
            width: 50%;
        }
        @media (max-width: 475px) {
            width: 100%
        }
        display: none;
        @media (max-width: 768px) {
            margin-top: -10px;
        }
        .item {
            margin-top: 12px;
        }
        .item-phone {
            color: rgb(255, 255, 255);
            margin-right: 53px;
            z-index: 103;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 300;
            font-size: 24px;
            line-height: 1.2; 
            position: relative;
            @media (max-width: 1024px) {
                margin-right: 39px;
                font-size: 20px;
            }
            @media (max-width: 768px) {
                margin-right: 32px;
                font-size: 18px;
            }
            @media (max-width: 475px) {
                font-size: 20px;
            }
        }
        
        &:hover {
            color: rgb(130, 130, 130);
        }
        @media (min-width: 1240px) {
            display: none;
        }
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
        @media (max-width: 1240px) {
            display: none;
        }
    }
    .main-navigation-1 {
        @media (min-width: 1240px) {
            display: none;
        }
        display: flex;
        justify-content: space-between;
        margin: 28px 0px;
        align-items: center;
        li {
            margin: 0px 28px 0px 28px;
            list-style-type: none;
            @media (max-width: 475px) {
                margin: 0px 14px 0px 14px;
            }
            @media (max-width: 375px) {
                margin: 0px 8px 0px 8px;
            }
            @media (max-width: 320px) {
                margin: 0px 6px 0px 6px;
            }
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
    .store {
        display: flex;
        justify-content: center;
    }
    .products {
        @media (min-width: 1900px) {
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        @media (max-width: 1240px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 768px) {
            grid-template-columns: 1fr;
        }
    }
    .buttons-container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .allProducts {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .btn-rule {
        width: 100%;
        max-width: 180px;
        height: 60px;
        color: rgb(33, 31, 31);
        font-size: 18px;
        font-weight: 700;
        border-radius: 14px;
        // background-color:rgba(0, 0, 0, 0.268);
        margin: 6px;
        outline: none;
        border: 1px solid #333;
        &:active {
            transition: ease 0.3s;
            background-color: rgb(189, 181, 181);
            color: rgb(40, 40, 40);
        }
        @media (max-width: 640px) {
            max-width: 120px;
            height: 58px;
            font-size: 13px;
            margin: 3px;
            border-radius: 12px;
        }
        @media (max-width: 475px) {
            max-width: 100px;
            height: 56px;
            border-radius: 10px;
        }
        @media (max-width: 380px) {
            max-width: 90px;
            height: 50px;
            border-radius: 9px;
            margin: 2px;
        }
    }
</style>