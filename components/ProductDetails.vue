<template>
    <div class="details">
        <div class="main-img">
            <img :src="product.image" alt="product img" class="product-img">
        </div>
        <div class="line"></div>
        <div class="product-content">
            <h2 class="product-title">{{ product.title }}</h2>
            <p class="product-category">{{ product.category }}</p>
            <p class="product-description">{{ product.description }}</p>
            <div class="button-container">
                <button class="btn">
                    <p>
                    Add
                    </p>
                    <img src="../assets/img/basket-add.png" alt="" class="faeture-img">
                </button>
                <button class="btn btn-buy">
                    <p>
                    Buy
                    </p>
                    <img src="../assets/img/buy-icon.png" alt="" class="faeture-img">
                </button>
            </div>
            <div class="price-container">
                <p class="product-price">Price - ${{ product.price }}</p>
                <p class="product-price rating">Rating - {{ product.rating.rate }}/5</p>
            </div>
        </div>
    </div>
</template>

<script setup>
  const { product } = defineProps(['product']);
</script>

<style scoped lang="scss">
    // .price-container-mini {
    //     @media (max-width: 1240px) {
    //         display: flex;
    //     }
    //     display: none;
    // }
    .product-content {
        @media (min-width: 1440px) {
            max-width: 1000px
        }
        min-width: 597px;
        @media (max-width: 1240px) {
            margin-bottom: 24px;
        }
        @media (max-width: 640px) {
            min-width: 468px;
            // display: flex;
            // align-items: center;
            // flex-direction: column;
            margin-bottom: 12px;
        }
        @media (max-width: 480px) {
            min-width: 368px;
            margin-bottom: 0;
        }
        @media (max-width: 375px) {
            min-width: 300px;
        }
        // @media (max-width: 320px) {
        //     min-width: 300px;
        // }
    }
    .main-img {
        @media (max-width: 1240px) {
            border: 5px #111;
            padding: auto;
        }
    }
    .product-img {
        max-width: 369px;
        height: auto; 
        @media (max-width: 1240px) {
            border: 5px #111
        }
        @media (max-width: 375px) {
            max-width: 300px;
        }
    }
    .product-title {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 42px;

        color: #000000;
        margin-bottom: 0;
        @media (max-width: 480px) {
            font-size: 32px;
            line-height: 36px;
        }
        @media (max-width: 1024px) {
            margin-top: 0;
        }
    }
    .product-category {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        margin-top: 0;
        line-height: 1.2;

        color: #232222;
        @media (max-width: 480px) {
            font-size: 12px;
        }
    }
    .price-container {
        display: flex;
        flex-direction: row;
        .rating {
            margin-left: 8px;
        }
        margin-bottom: 16px;
    }
    .product-description {     
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 28px;

        color: #000000;
        @media (max-width: 480px) {
            font-size: 24px;
            line-height: 1.2;
        }
        @media (max-width: 375px) {
            font-size: 18px;
            line-height: 1.2;
        }
    }
    .line {
        width: 1px;
        height: 1004px;
        margin: 17px 40px 80px 40px;

        border: 1px solid #000000;
        transform: rotate(0deg);
        @media (max-width: 1240px) {
            display: none;
        }
    }
    .details {
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 0px 80px;
        @media (max-width: 1240px) {
            flex-direction: column-reverse;
            justify-content: center;
            align-items: center;
            padding-right: 8px;
            padding-left: 8px;
        }
    }
    .btn {
        width: 158px;
        height: 36px;
        background: rgba(7, 101, 5, 0.8);
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 6px;
        @media (max-width: 375px) {
            width: 100%;
            padding-right: 8px;
            padding-left: 8px;
            height: 48px;
        }

        font-family: 'Advent Pro';
        font-style: normal;
        font-weight: 800;
        font-size: 24px;
        line-height: 24px;
        color: #FFFFFF;

        display: flex;
        align-items: center;
        justify-content: space-between;
        &-buy {
            background: #B4A526;
            margin-left: 12px;
            @media (max-width: 375px) {
                margin-left: 0px;
                margin-top: 4px;
            }
        }
    }
    .button-container {
        display: flex;
        flex-direction: row;
        @media (max-width: 375px) {
            flex-wrap: wrap;
        }
    }
    .product-price {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        color: #000000;
        .product-price:first-child {
            @media (max-width: 480px) {
                margin: 4px;
            }
        }
        @media (max-width: 480px) {
            font-size: 18px;
            line-height: 1.2;
        }
    }
</style>