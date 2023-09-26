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
            <slot />
        </div>

        <div class="line-border"></div>

        <footer class="footer">
            <FooterMain />
        </footer>
    </div>
</template>

<script>
    
export default {
    data: () => {
        return {
            isElVisible: false
        }
    },
    methods: {
        toggleShowSide() {
            this.isElVisible = !this.isElVisible
            console.log('mb')
        },
    },
    // data() {
    //     return {
    //         search: '',
    //         data: [],
    //     }
    // },
    // created() {
    //     this.data = products;
    // },
    // computed: {
    //     filteredList() {
    //         return this.postList.filter(post => {
    //             return post.title.toLowerCase().includes(this.search.toLowerCase())
    //         })
    //     }
    // }
}
</script>

<style scoped lang="scss">
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
        margin-bottom: 57px;
        @media (max-width: 1240px) {
            margin-bottom: 32px;
        }
        @media (max-width: 768px) {
            margin-bottom: 24px;
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
            transform: rotate(45deg) translate(0, 51%);
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
        @media (max-width: 1240px) {
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }
        @media (max-width: 1024px) {
            margin-left: -16px;
            left: 94%
        }
        @media (min-width: 1240px) {
            display: none;
        }
        @media (max-width: 480px) {
            left: 90%;
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
</style>