<script setup>
import Ingredient from './Ingredient.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import {Recipe} from "@/lib/recipe";

defineProps({
  ingredients: {
    type: Array,
    required: true
  }
})

</script>


<template>

  <Ingredient v-for="i in ingredients" :ingredient="i" :key="i.what">
    <!-- TODO: find better way for loop -->
  </Ingredient>

</template>
