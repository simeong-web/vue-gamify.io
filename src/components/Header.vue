<template>
    <header class="mx-auto my-2 container xl flex justify-between">
        <div class="flex">
            <div class="max-w-xs bg-default-dark"></div>
            <div class="site-header-title flex ml-2 items-center">
                <router-link to="/"><h1 class="text-3xl">Gamefy</h1></router-link>
                <router-link to="/"><h2 class="text-3xl text-secondary">.IO</h2></router-link>
            </div>
        </div>
        <label for="menu-toggle" class="cursor-pointer lg:hidden block">X</label>
        <input type="checkbox" class="hidden" id="menu-toggle">
        <div class="hidden lg:flex lg:items-center" id="menu">
            <nav class="lg:flex items-center">
                <ul class="flex">
                    <li><a href="#" class="text-xl block">All Games</a></li>
                    <li><a href="#" class="text-xl block ml-8">New Comers</a></li>
                    <li><a href="#" class="text-xl block ml-8">Sign in</a></li>
                </ul>
            </nav>
        </div>
        <div class="site-searchbar-wrapper flex items-center">
            <form method="GET">
                <input type="text" class="bg-default px-4 py-2 rounded text-black focus:outline-none" placeholder="Search...">
            </form>
        </div>
    </header>
</template>