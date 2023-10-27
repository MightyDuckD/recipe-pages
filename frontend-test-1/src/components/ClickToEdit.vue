<template>
  <span>
    <input type="text"
           v-if="edit"
           :value="valueLocal"
           @blur.native="valueLocal = $event.target.value; edit = false; $emit('update:value', valueLocal);"
           @keyup.enter.native="valueLocal = $event.target.value; edit = false; $emit('update:value', valueLocal);"
           v-focus=""
    />
    <span v-else="" @click="edit = true;">
      {{valueLocal}}
    </span>
  </span>
</template>

<script>
export default {

  props: ['value'],
  emits: ['update:value'],

  data () {
    return {
      edit: false,
      valueLocal: this.value
    }
  },

  watch: {
    value: function() {
      this.valueLocal = this.value;
    }
  },

  directives: {
    focus: {
      inserted (el) {
        el.focus()
      }
    }
  }

}
</script>