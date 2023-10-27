<script setup>
import HelloWorld from './HelloWorld.vue'
import Step from './Step.vue'
import {Recipe} from '@/lib/recipe'
import IngredientList from "@/components/IngredientList.vue";

defineProps({
  recipe: Recipe
})

</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld :title="recipe.title" />
    </div>
    <div>
      <IngredientList :ingredients="recipe.ingredients"/>
    </div>
  </header>


  <main >
    <div v-for="step in recipe.steps">
      <Step :step="step"/>
    </div>

  </main>
</template>

<style scoped>


</style>
