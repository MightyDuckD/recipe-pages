<script setup>
import HelloWorld from './HelloWorld.vue'
import TheWelcome from './TheWelcome.vue'
import {Recipe} from '@/lib/recipe'

defineProps({
  recipe: Recipe
})

</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld :title="recipe.title" />
    </div>
  </header>


  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>


</style>
