<script setup>


import {RecipeStep} from "@/lib/recipe";


defineProps({
  step: RecipeStep
})


</script>

<template>
  <div class="item">
    <div class="details">
      <h3 style="float: left">
        {{step.desc}}
      </h3>
      <div style="float: left">
        <div class="steps" v-for="value in step.substeps">
          <Step :step="value" v-if="typeof value !== 'number'"></Step>
          <div class="steps" v-if="typeof value === 'number'">
            use ing number {{value}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.steps {
  border: #00bd7e 1px;

  background: #00bd7e;
  margin: 10px 10px 10px 30px;
  text-align: center;
  align-content: center;
}
</style>
