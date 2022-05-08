<template>
  <div class="todo-list"></div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {},
})
export default class TodoList extends Vue {}
</script>

<style scoped lang="scss"></style>
