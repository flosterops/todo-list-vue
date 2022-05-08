<template>
  <div class="flex flex-d-row ai-center checkbox--container">
    <div
      class="flex jc-center ai-center input--container"
      :class="{ checked: checked, disabled: disabled }"
    >
      <span class="checkmark" :class="{ checked: checked }"></span>
      <input
        :disabled="disabled"
        @change="onChange"
        :id="id"
        type="checkbox"
        class="checkbox"
      />
    </div>
    <label
      :for="id"
      v-if="!!label"
      :class="{ disabled: disabled }"
      class="checkbox--label"
      >{{ label }}</label
    >
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    id: { type: String, required: true },
    onChange: { type: Function, required: true },
    checked: { type: Boolean, required: true },
    disabled: Boolean,
    label: String,
  },
})
export default class BaseCheckbox extends Vue {}
</script>

<style scoped lang="scss">
@import "src/assets/styles/_variables.scss";
input[type="checkbox"] {
  margin: 0;
  padding: 0;
  outline: none;
  opacity: 0;
  width: 20px;
  height: 20px;
  z-index: 2;

  &[disabled=""] {
    cursor: not-allowed;
  }
}
.checkmark {
  width: 13px;
  height: 13px;
  position: absolute;
  z-index: 1;
  border-radius: 2px;

  &.checked {
    background-color: $green;
  }
}

.checkbox {
  &--container {
    width: auto;
  }

  &--label {
    margin-left: 10px;
    cursor: pointer;
    font-size: 0.83em;
    font-weight: bold;
    &.disabled {
      cursor: not-allowed;
      color: $disabled;
    }
  }
}

.input {
  &--container {
    width: auto;
    border: 1px solid $default;
    border-radius: 3px;
    &.checked {
      border: 1px solid $green;
    }
    &.disabled {
      opacity: 0.5;
    }
  }
}
</style>
