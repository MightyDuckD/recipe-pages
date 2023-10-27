<script setup>
import HelloWorld from './HelloWorld.vue'
import Step from './Step.vue'
import {exampleRecipe, Recipe} from '@/lib/recipe'
import IngredientList from "@/components/IngredientList.vue";
import {useRoute, useRouter} from 'vue-router';
import RecipeComponent from "@/components/RecipeComponent.vue";
import {ref, watch} from "vue";
const router = useRouter()
const route = useRoute()


const rec = ref()
rec.value = exampleRecipe

console.log(route.params)

if(route.params.recipe === null || route.params.recipe === "") {
  console.log("pushing")
  router.push({
    name: 'recipe',
    params: {
      recipe: btoa(JSON.stringify(rec))
    },
  });
}

watch(() => route.params, () => {
  console.debug(`MyCoolComponent - watch route.name changed to ${route.name}`);
  console.log("trying to parse" + atob(route.params.recipe[0]))
  rec.value = JSON.parse(atob(route.params.recipe[0]))
}, { immediate: true /*run on init as well*/});

</script>

<template>
  <RecipeComponent :recipe="rec"/>
</template>

<style scoped>


</style>
