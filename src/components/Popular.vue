<template>
    <div id="popular" class="container xl mx-auto my-6 px-2 sm:px-0">
        <div class="my-6 flex justify-center">
            <h2 class="text-3xl text-default">Game Your Way!</h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            <div class="landing-card">
                <router-link to="/"><img src="../../public/placeholder-1.jpg" alt="game-card" class="min-w-full"></router-link>
            </div>
            <div class="landing-card">
                <router-link to="/"><img src="../../public/placeholder-1.jpg" alt="game-card" class="min-w-full"></router-link>
            </div>
            <div class="landing-card">
                <router-link to="/"><img src="../../public/placeholder-1.jpg" alt="game-card" class="min-w-full"></router-link>
            </div>
            <div class="landing-card">
                <router-link to="/"><img src="../../public/placeholder-1.jpg" alt="game-card" class="min-w-full"></router-link>
            </div>
        </div>
        <div class="site-section-heading">
            <h2 class="text-2xl text-default">Most Popular</h2>
        </div>
        <div class="popular-card-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
            <div class="primary-card text-default" v-for="game in games" :key="`${game.id}`">
                <router-link :to="`/game/${game.id}`"><img :src="`${game.src}`" alt="game-card" class="min-w-full"></router-link>
                <div class="primary-card-content">
                    <h3 class="primary-game-title mt-3">{{ game.title }}</h3>
                    <div class="primary-game-stats mb-5 flex justify-between">
                        <span>{{ roundVal(game.count) }}k plays</span>
                        <span class="text-secondary-light">{{ game.rating }}</span>
                    </div>
                    <div class="primary-button-wrapper mb-4">
                        <router-link :to="`/game/${game.id}`"><a class="bg-secondary py-2 px-4 rounded">Play!</a></router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="more-button-wrapper flex justify-center">
            <a href="/" class="px-12 py-2 rounded bg-default text-secondary font-4xl mt-16 mb-10">View More!</a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        games: {
            type: Array,
            required: true
        }
    },
    methods: {
        roundVal(num) {
            return +(Math.round(num + "e+1")  + "e-1");
        }
    }
}
</script>