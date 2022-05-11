<template>
  <button
    class="flex flex-d-row jc-center ai-center btn"
    :class="{ primary: !variant, [variant]: variant }"
    @click="onClick"
    :disabled="disabled"
  >
    {{ text }}
  </button>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    id: String,
    onClick: { type: Function, required: true },
    text: { type: String, required: true },
    disabled: Boolean,
    variant: String,
  },
})
export default class BaseButton extends Vue {}
</script>

<style scoped lang="scss">
@import "../assets/styles/_variables.scss";

.btn {
  width: 180px;
  height: 40px;
  border: 2px solid $green;
  -webkit-box-shadow: 0 0 17px -8px $black;
  box-shadow: 0 0 17px -8px $black;
  border-radius: 10px;
  font-size: 1.17em;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  outline: none;
  &[disabled=""] {
    border: 2px solid $disabled;
    background-color: $disabled;
    cursor: not-allowed;
  }
  &:hover {
    opacity: 0.9;
  }
  &:active {
    -webkit-box-shadow: inset 0 0 17px -4px $black;
    box-shadow: inset 0 0 17px -4px $black;
  }
}

.primary {
  color: $white;
  background-color: $green;
}

.outline {
  color: $green;
  background-color: $white;
}
</style>
