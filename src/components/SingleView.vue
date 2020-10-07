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
                <img :src="`${game.src}`" alt="game-player">
                <div class="single-view-content flex justify-between">
                    <h2 class="single-view-title">{{ game.title }}</h2>
                    <h3 class="single-view-stats">
                        <span class="likes">{{ game.likes }}</span>k likes
                        /
                        <span class="dislikes">{{ game.dislikes }}</span>k dislikes
                    </h3>
                </div>
                <div class="single-view-details flex justify-between">
                    <p class="single-view-description">Join this one of a kind adventure with us, where you will explore the beautiful world of Warcraft! This is a vast...</p>
                    <span>{{ game.rating  }}</span>
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
    data() {
        return {
            game: null
        }
    },
    props: {
        games: {
            type: Array,
            required: true
        }
    },
    created() {
        this.fetchGameData()
    },
    methods: {
        fetchGameData() {
            const gameId = this.$route.params.id
            this.game = this.games[gameId - 1]
        }
    }
}
</script>