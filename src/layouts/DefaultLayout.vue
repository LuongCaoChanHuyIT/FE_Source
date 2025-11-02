<template>
  <div>
    <header class="bg-white shadow p-4 flex justify-between">
      <h1 class="font-bold text-lg">MyShop</h1>
      <nav>
        <router-link to="/" class="px-3 text-blue-600">Home</router-link>
        <router-link to="/about" class="px-3 text-blue-600">About</router-link>
      </nav>
    </header>

    <main class="p-6">
      <router-view></router-view>
    </main>
  </div>
</template>
