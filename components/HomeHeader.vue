<template>
    <div class="home-header">
        <div class="home-about">
            <h1 class="home-title">
                Let go  of the challenge
                See yourself better
            </h1>
            <p class="home-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, non tenetur  quo 
                adipisci nulla exercitationem architecto adipisci nulla exercitationem architecto?
            </p>
            <div class="buttons">
                <NuxtLink to="/products" class="default-create-button"><button class="button-started">Get started <img src="../assets/img/Arrow.png" alt="" class="arrow"></button></NuxtLink>
                <NuxtLink to="/worked" class="default-create-button"><button class="button-worked">How we work<img src="../assets/img/Arrow2.png" alt="" class="arrow"></button></NuxtLink>
            </div>
            <div class="status-container">
                <div class="first-person">
                    <div class="icon"><img src="../assets/img/people-icon.png" class="" alt=""></div>
                    <div class="first-person-text">
                        <div class="person-title">18+</div>
                        <div class="person-desc">dolor sit amet consectetur adipisicing elit. Nobis</div>
                    </div>
                </div>
                <div class="second-person">
                    <div class="icon"><img src="../assets/img/people-icon.png" class="" alt=""></div>
                    <div class="first-person-text">
                        <div class="person-title">23+</div>
                        <div class="person-desc">dolor sit amet consectetur adipisicing elit. Nobis</div>
                    </div>
                </div>
            </div>
            <div class="top-container">
                <h3 class="top1 top-text">Top #9 table</h3>
                <h3 class="top2 top-text">Top #17 phones</h3>
                <h3 class="top3 top-text">Top #13 computers</h3>
            </div>
        </div>
        <div>
            <img src="../assets/img/apple-watch-series.png" class="home-img" alt="">
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .home-title {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 64px;
        line-height: 77px;

        color: #000000;
        @media (max-width: 1240px) {
            margin-top: -10px
        }
        @media (max-width: 768px) {
            font-size: 56px;
            line-height: 64px;
        }
        @media (max-width: 640px) {
            font-size: 41px;
            line-height: 48px;
        }
        @media (max-width: 480px) {
            font-size: 32px;
            line-height: 1.1;
        }
        @media (max-width: 375px) {
            font-size: 28px;
            line-height: 1.1;
        }
    }
    .top-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        max-width: 588px;
        h3:first-child {
            margin-left: 0px;
        }
        h3 {
            margin: 6px;
            @media (max-width: 480px) {
                margin: 2px;
            }
        }
    }
    .top-text {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 24px;

        color: #000000;
        @media (max-width: 640px) {
            font-size: 16px;
            line-height: 19px;
        }
    }
    .default-create-button {
        @media (max-width: 470px) {
            width: 100%;
        }
    }
    .arrow {
        width: 25px;
        height: 25%;
    }
    .person-desc {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 18px;
        color: #666666;
        margin-left: 4px;
    }
    .status-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 36px;
        margin-bottom: 24px;
    }
    .first-person {
        display: flex;
        flex-direction: row;
        max-width: 340px;
        margin-right: 8px;
        @media (max-width: 768px) {
            margin-bottom: 8px;
        }
        
    }
    .second-person {
        display: flex;
        flex-direction: row;
        max-width: 340px;
    }
    .home-desc {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 32px;
        color: #666666;
        @media (max-width: 640px) {
            font-size: 14px;
            line-height: 1.7;
        }
        @media (max-width: 375px) {
            font-size: 12px;
            line-height: 1.6
        }
    }
    .home-about {
        max-width: 1024px;
    }
    .home-img {
        margin-left: 24px;
        @media (max-width: 1240px) {
            display: none;
        }
    }
    .person-title {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 1.2;
        color: #000000;
        @media (max-width: 380px) {
            font-size: 24px;
        }
    }
    .buttons {
        flex-wrap: nowrap;
        display: flex;
        @media (max-width: 470px) {
            flex-wrap: wrap;
            display: flex;
        }
    }
    .button-started {
        width: 252px;
        height: 72px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        color: #FFFFFF;
        background: #4A4949;
        border-radius: 4px;
        outline: none;
        border: none;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: 10px;
        margin-left: 0px;
        cursor: pointer;
        @media (max-width: 640px){
            width: 147px;
            height: 54px;
            font-size: 16px;
            line-height: 24px;
        }
        @media (max-width: 470px) {
            width: 100%;
            align-items: center;
            justify-content: space-between;
            padding: 0 14px;
        }
        
    }
    .home-header {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        @media (max-width: 1240px) {
            flex-direction: column;
        }
    }
    .arrow-white {
        color: black;
    }
    .icon {
        margin-right: 4px;
        img {
            @media (max-width: 380px) {
                width: 62px;
                height: 62px;
            }
        }   
    }
    .button-worked {
        background: #D9D9D9;
        border-radius: 4px;
        width: 284px;
        height: 72px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        color: #000000;
        display: flex;
        align-items: center;
        justify-content: space-around;
        outline: none;
        border: none;
        margin: 10px;
        cursor: pointer;
        @media (max-width: 1240px) {
            margin-left: 0;
        }
        // @media (max-width: 470px) {
        //     min-width: 80%;
        // }
        @media (max-width: 640px){
            width: 171px;
            height: 54px;
            font-size: 16px;
            line-height: 24px;
        }
        @media (max-width: 470px) {
            width: 100%;
            align-items: center;
            justify-content: space-between;
            padding: 0 14px;
            margin: 0;
        }
    }
    .default-create-button {
        text-decoration: none;
    }
</style>