<template>
    <div class="cart">
        <div class="cart-top">
            <h1 class="cart-top-title">{{ product.title }}</h1>
            <img class="cart-top-image" :src="product.image" />
        </div>
        <div class="cart-middle">
            <h2 class="cart-middle-rate">Rating: {{ product.rating.rate }} / 5</h2>
            <h2 class="cart-middle-price">Price: {{ product.price.toFixed(2) }}$</h2>
        </div>
        <div class="cart-bottom">
            <div class="btn-config">
                <NuxtLink :to="`/products/${product.id}`" class="details-link">
                <button class="btn details">
                    <p class="details-p">More</p>
                    <img src="../assets/img/more.png" alt="" class="details-faeture-img img-icon">
                </button>
                </NuxtLink>
                <button class="btn btn-buy">
                    <p>Buy</p>
                    <img src="../assets/img/buy-icon.png" alt="" class="faeture-img img-icon">
                </button>
            </div>
            <button class="btn delete" @click="removeFromCart(product)">
                <p>Delete</p>
            </button>
        </div>
    </div>
</template>

<script setup>
    const { product } = defineProps(['product']);

    function removeFromCart(product) {
      let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      cartItems = cartItems.filter(item => item.id !== product.id);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      console.log('hi, i am gay');
    }

    
</script>

<style lang="scss" scoped>
    .btn {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        outline: none;
        border: 0;
        border-radius: 6px;
        max-height: 24px;
        @media (max-width: 380px) {
            border-radius: 4px;
            max-height: 20px;
        }
        p {
            color: white ;
            &:hover {
                color:rgb(211, 205, 205)
            }
        }
        &-buy {
            background: #B4A526;
            margin-left: 8px;
        }
        &-config {
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
        
    }
    .details-link {
        text-decoration: none
    }
    .details {
        background: rgba(11, 54, 119, 0.8)
    }
    .delete {
        background-color: rgb(155, 12, 12);
        width: 64px;
        &:active {
            background-color: rgb(80, 4, 4);
        }
    }
    .img-icon {
        margin-left: 24px;
        max-height: 16px;
        @media (max-width: 380px) {
            margin-left: 20px;
            max-height: 14px;
        }
    }
    .cart {
        width: 99%;
        height: auto;
        border-radius: 8px;
        border: 1px black solid;
        padding: 4px 6px;
        margin: 8px 0px;
        @media (max-width: 380px) {
            padding: 2px 3px;
            margin: 4px 0px;
        }
        &-top {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        &-top-image {
            width: 50px;
            height: 50px;
        }
        &-top-title {
            font-family: 'Roboto';
            margin: 4px;
            font-size: 20px;
            @media (max-width: 380px) {
                margin: 3px;
                font-size: 18px;
            }
        }
        &-bottom {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin: 6px 4px;
            @media (max-width: 380px) {
                margin: 3px 2px;
            }
        }
        &-middle {
            display: flex;
            margin-top: 8px;
            justify-content: space-between;
            margin-bottom: 16px;
            &-rate {
                margin: 4px;
                font-family: 'Roboto';
                font-size: 16px;
                @media (max-width: 380px) {
                    margin: 3px;
                    font-size: 14px;
                }
            }
            &-price {
                margin: 4px;
                font-family: 'Roboto';
                font-size: 16px;
                @media (max-width: 380px) {
                    margin: 3px;
                    font-size: 14px;
                }
            }
        }
    }
</style>