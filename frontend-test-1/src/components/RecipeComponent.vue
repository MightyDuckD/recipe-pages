<script setup>
import HelloWorld from './HelloWorld.vue'
import Step from './Step.vue'
import {exampleRecipe, Recipe} from '@/lib/recipe'
import IngredientList from "@/components/IngredientList.vue";
import {watch} from "vue";


defineProps({
  recipe: Recipe
})

</script>

<template>
  <span v-if="recipe">
    <header>
      <div class="wrapper">
        <HelloWorld :title="recipe.title"/>
      </div>
      <div>
        <IngredientList :ingredients="recipe.ingredients"/>
      </div>
    </header>
    <main>
      <div v-for="step in recipe.steps">
        <Step :step="step"/>
      </div>

    </main>
  </span>
  <span v-if="!recipe">no recipe</span>
</template>

<style scoped>


</style>
