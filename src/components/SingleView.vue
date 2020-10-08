<template>
    <div id="single-view" class="px-2 sm:px-0">
        <div class="single-view-navigation container flex justify-between mx-auto my-6">
            <div class="single-view-button-wrapper">
                <router-link to="/"><a class="rounded bg-default text-primary px-2 py-2">Back</a></router-link>
            </div>
            <div class="single-view-button-wrapper">
                <router-link to="/"><a class="rounded bg-default text-primary px-2 py-2">Next</a></router-link>
            </div>
        </div>
        <section class="single-view-section container mx-auto" :games="games">
            <div class="single-view-wrapper">
                <div class="image-wrapper">
                    <img :src="`${game.src}`" alt="game-card" class="min-w-full">
                </div>
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
            <div class="primary-button-wrapper text-primary mt-4">
                <router-link to="/"><a class="rounded text-primary bg-default px-4 py-2">View More</a></router-link>
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