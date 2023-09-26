<template>
    <div>
        <h1 class="cart-title">Shopping cart</h1>
        <ul>
            <div class="buttons-container" v-if="visible===true">
                <button @click="toggle1()" class="btn-rule">
                    default
                </button>
                <button @click="toggle2()" class="btn-rule">       
                    from cheap
                </button>
                <button @click="toggle3()" class="btn-rule">
                    rating
                </button>
                <button @click="toggle4()" class="btn-rule">
                    from expensive
                </button>
                <button @click="toggle5()" class="btn-rule">                      
                    alphabet order
                </button>
                <button @click="toggle6()" class="btn-rule btn-rule_very">                      
                    recommend
                </button>
            </div>
            <div class="store-container" v-if="visible===true">
                <div class="title-products products store_none" v-if="isElVisible1">
                    <li v-for="item in cartItems" :key="item.id">
                        <CartItem :product="item" />
                    </li>
                </div>
                <div class="price-products products" v-if="isElVisible2">
                    <li v-for="item in cheapPrice" :key="item.id">
                        <CartItem :product="item" />
                    </li>
                </div>
                <div class="price-products products" v-if="isElVisible3">
                    <li v-for="item in rating" :key="item.id">
                        <CartItem :product="item" />
                    </li>
                </div>
                <div class="price-products products" v-if="isElVisible4">
                    <li v-for="item in expensivePrice" :key="item.id">
                        <CartItem :product="item" />
                    </li>
                </div>
                <div class="price-products products" v-if="isElVisible5">
                    <li v-for="item in title" :key="item.id">
                        <CartItem :product="item" />
                    </li>
                </div>
            </div>
            <h1 class="bad" v-else>
                Sorry) but you haven't added anything to your cart yet, go to <NuxtLink to="/products" class="go-products">this page</NuxtLink> and choose what you like :)
            </h1>
        </ul>
        <div class="buttom-content_container">
            <h3 id="total-price">Total: ${{ totalPrice.toFixed(2) }}</h3>
            <button id="delete-all" @click="productsNull()">Remove: {{ cartItems.length }} products</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cartItems: [],
            cheapPrice: [],
            rating: [],
            expensivePrice: [],
            title: [],
            visible: true,
            isElVisible: false,
            isElVisible1: true,
            isElVisible2: false,
            isElVisible3: false,
            isElVisible4: false,
            isElVisible5: false
        };
    },
    mounted() {
        this.cartItems = JSON.parse(localStorage.getItem('cartItems')).reduce((o, i) => {
            if (!o.find(v => v.id == i.id)) {
                o.push(i);
            }
            return o;
        }, []);

        this.visible = this.cartItems.length >= 1 ? true : false
        
        this.cheapPrice = this.cartItems.slice().sort((a, b) => {
            if (b.price > a.price) {
                return -1;
            }
            if (b.price < a.price) {
                return 1;
            }
            return 0;
        });

        console.log(this.cartItems)

        this.expensivePrice = this.cartItems.slice().sort((a, b) => {
            if (b.price < a.price) {
                return -1;
            }
            if (b.price > a.price) {
                return 1;
            }
            return 0;
        });

        this.rating = this.cartItems.slice().sort((a, b) => {
            if (b.rating.rate < a.rating.rate) {
                return -1;
            }
            if (b.rating.rate > a.rating.rate) {
                return 1;
            }
            return 0;
        });
        this.title = this.cartItems.slice().sort((a, b) => {
            const t_a=a.title.toLowerCase(), t_b=b.title.toLowerCase()
            if (t_a < t_b) {
                return -1;
            }
            if (t_b > t_a) {
                return 1;
            }
            return 0;
        });
    },
    methods: {
        productsNull() {
            let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            cartItems = this.cartItems = []
            localStorage.setItem('cartItems', JSON.stringify(cartItems));

            this.visible = false
        },
        toggle1() {
            this.isElVisible1 = true,
            this.isElVisible2 = false,
            this.isElVisible3 = false,
            this.isElVisible4 = false
            this.isElVisible5 = false
            this.isElVisible6 = false
        },
        toggle2() {
            this.isElVisible1 = false,
            this.isElVisible2 = true,
            this.isElVisible3 = false,
            this.isElVisible4 = false
            this.isElVisible5 = false
            this.isElVisible6 = false
        },
        toggle3() {
            this.isElVisible1 = false,
            this.isElVisible2 = false,
            this.isElVisible3 = true,
            this.isElVisible4 = false
            this.isElVisible5 = false
            this.isElVisible6 = false
        },
        toggle4() {
            this.isElVisible1 = false,
            this.isElVisible2 = false,
            this.isElVisible3 = false,
            this.isElVisible4 = true
            this.isElVisible5 = false
            this.isElVisible6 = false
        },
        toggle5() {
            this.isElVisible1 = false,
            this.isElVisible2 = false,
            this.isElVisible3 = false,
            this.isElVisible4 = false
            this.isElVisible5 = true
            this.isElVisible6 = false
        },
        toggle6() {
            this.isElVisible1 = false,
            this.isElVisible2 = false,
            this.isElVisible3 = false,
            this.isElVisible4 = false
            this.isElVisible5 = false,
            this.isElVisible6 = true
        }
    },
    computed: {
        totalPrice() {
            return this.cartItems.reduce(
                (sum, item) => sum + Number(item.price),
            0,);
        }
    }
};
</script>
    
<style scoped lang="scss">
    h1 {
        font-family: 'Roboto';
    }
    .cart-title {
        text-align: center;
    }
    .bad {
        margin-top: 40px;
    }
    ul {
        padding: 0;
        margin: 0;
    }
    .go-products { 
        text-decoration: none;
    }
    li {
        list-style-type: none;
    }
    .buttom-content_container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    #total-price {
        font-family: 'Roboto';
        margin: 0;
    }
    #delete-all {
        font-family: 'Roboto';
        text-align: center;
        font-size: 12px;
        color: #fff;
        background: rgb(90, 10, 10);
        border: none;
        outline: none;
        height: 24px;
        border-radius: 4px;
        &:hover {
            color: rgb(116, 112, 112);
        }
    }
    .btn-rule {
        width: 100%;
        max-width: 180px;
        height: 60px;
        color: rgb(33, 31, 31);
        font-size: 18px;
        font-weight: 700;
        border-radius: 14px;
        
        margin: 6px;
        outline: none;
        border: 1px solid #333;
        &_very {
            background-color: rgb(33, 31, 31);
            color: rgb(232, 225, 225);
            &:active {
                transition: ease 0.3s;
                background-color: rgb(232, 225, 225);
                color: rgb(33, 31, 31);
            }
        }
        &:active {
            transition: ease 0.3s;
            background-color: rgb(33, 31, 31);
            color: rgb(232, 225, 225);
        }
        @media (max-width: 640px) {
            max-width: 120px;
            height: 58px;
            font-size: 13px;
            margin: 4px;
            border-radius: 12px;
        }
        @media (max-width: 475px) {
            max-width: 105px;
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
    .buttons-container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 12px;
    }
</style>