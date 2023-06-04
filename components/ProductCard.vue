<template>
  <div class="card">
    <img :src="`${product.image}`" class="" />
    <div class="information">
        <p class="category">{{ product.category }}</p>
        <p class="title">{{ product.title }}</p>
        <div class="price-catalog">
            <div class="rating">
                <h2 class="rating-title">Rating: {{ product.rating.rate }}/5</h2>
            </div>
            <div class="price">
                <h2 class="price-title">{{ product.price }}$</h2>
            </div>
        </div>
        <div class="btn-catalog">
            <NuxtLink :to="`/products/${product.id}`" class="details-link">
                <button class="details">
                    <p class="details-p">More</p>
                    <img src="../assets/img/more.png" alt="" class="details-faeture-img">
                </button>
            </NuxtLink>
            <button class="add">
                <p>Add</p>
                <img src="../assets/img/basket-add.png" alt="" class="add-faeture-img">
            </button>
        </div>
    </div>
  </div>
</template>

<script setup>
    const { product } = defineProps(['product']);
</script>

<style scoped lang="scss">
    .card {
        background: #FFFFFF;
        border: 1px solid #000000;
        border-radius: 12px;
        width: 296px;
        height: auto;
        padding: 18px 22px;
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 16px;
        @media (max-width: 380px) {
            width: auto;
            padding: 11.5px 14px;
            border-radius: 10px;
            margin: 12px;
        }
        @media (max-width: 320px) {
            padding: 13.5px 16.5px;
            border-radius: 10px;
            margin: 12px;
        }
        img {
            width: 253px;
            height: 296px;
            @media (max-width: 375px) {
                width: 237px;
                height: 278px;
            }
        }
        p {
            margin: 0
        }
        .details {
            width: 118.5px;
            height: 36px;

            background: rgba(11, 54, 119, 0.8);
            border: 1px solid rgba(0, 0, 0, 0.2);
            border-radius: 6px;
            font-family: 'Advent Pro';
            font-style: normal;
            font-weight: 800;
            font-size: 24px;
            line-height: 24px;
            color: #FFFFFF;
            text-align: left;
            margin-top: 13px;

            display: flex;
            align-items: center;
            justify-content: space-between;
            a {
                text-decoration: none
            }   
            &-link {
                text-decoration: none
            } 
            @media (max-width: 375px) {
                margin-top: 0px;
                width: 104px;
                height: 32px;
            }
        }
        .title {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 20px;
            color: #000000;
        }
        .category {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 800;
            font-size: 16px;
            line-height: 18px;
            color: #8E8D8D;
            margin-top: 2px;
        }
        .information {
            width: 100%
        }
        .add {
            background: rgba(7, 101, 5, 0.8);
            border: 1px solid rgba(0, 0, 0, 0.2);
            border-radius: 6px;
            width: 118.5px;
            height: 36px;
            font-family: 'Advent Pro';
            font-style: normal;
            font-weight: 800;
            font-size: 24px;
            line-height: 24px;
            text-align: left;
            color: #FFFFFF;

            display: flex;
            align-items: center;
            justify-content: space-between;
            @media (max-width: 375px) {
                margin-top: 0px;
                width: 104px;
                height: 32px;
                font-size: 21px;
            }
        }
        .btn-catalog {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
        }
        .price-catalog {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        .rating {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 20px;
            color: #000000;
            @media (max-width: 375px) {
                font-size: 16px;
            }
        }
        .price {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 800;
            font-size: 18px;
            line-height: 18px;

            color: #0D791E;
            @media (max-width: 375px) {
                font-size: 16px;
            }
        }
        .add-faeture-img {
            width: 31px;
            height: 24px;
            @media (max-width: 375px) {
                width: 27px;
                height: 21px;
            }
        }
        .details-faeture-img {
            width: 28px;
            height: 26px;
            @media (max-width: 375px) {
                width: 25px;
                height: 19px;
            }
        }
    }
</style>