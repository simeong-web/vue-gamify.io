<template>
    <div id="single-view">
        <div class="single-view-navigation container flex justify-between mx-auto">
            <div class="single-view-button-wrapper">
                <a href="/" class="button-primary return">Back</a>
            </div>
            <div class="single-view-button-wrapper">
                <a href="#" class="button-primary next">Next</a>
            </div>
        </div>
        <section class="single-view-section container mx-auto">
            <div class="single-view-wrapper">
                <img :src="`${ games.src }`" alt="game-player">
                <div class="single-view-content flex justify-between">
                    <h2 class="single-view-title">{{ games.title }}</h2>
                    <h3 class="single-view-stats">
                        <span class="likes">{{ games.likes }}</span>k likes
                        /
                        <span class="dislikes">{{ games.dislikes }}</span>k dislikes
                    </h3>
                </div>
                <div class="single-view-details flex justify-between">
                    <p class="single-view-description">Join this one of a kind adventure with us, where you will explore the beautiful world of Warcraft! This is a vast...</p>
                    <span>{{ games.rating }}</span>
                </div>
            </div>
            <div class="primary-button-wrapper">
                <a class="button-primary single-more">View More</a>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    props: {
        games: []
    }
}
</script>