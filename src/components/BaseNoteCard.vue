<template>
  <div class="flex note-card p-4">
    <div class="flex flex-d-row p-2 jc-between ai-center note-card--title">
      <router-link v-bind:to="`/note/${id}`">
        <h3>
          {{ title }}
        </h3>
      </router-link>
      <BaseButton
        v-if="!editable"
        :onClick="() => deleteNote(id)"
        text="delete"
      />
    </div>
    <div
      class="flex flex-d-row p-2 note-card--todo"
      v-for="todo of todos"
      :key="todo.id"
    >
      <BaseCheckbox
        v-if="editable"
        :onChange="onChange"
        :id="todo.id"
        :label="todo.message"
        :checked="todo.active"
      />
      <h5
        v-if="!editable"
        :class="{ 'note-card--message-finished': todo.active }"
      >
        {{ todo.message }}
      </h5>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { ITodo } from "@/types/todo.types";
import { PropType } from "vue";
import BaseCheckbox from "@/components/BaseCheckbox.vue";
import BaseButton from "@/components/BaseButton.vue";
import { deleteNote } from "@/utils/notes";

@Options({
  components: { BaseButton, BaseCheckbox },
  props: {
    id: { type: String, required: true },
    title: { type: String, required: true },
    todos: { type: Array as PropType<ITodo[]> },
    onChange: { type: Function },
    updateNotes: { type: Function },
    editable: Boolean,
  },
  methods: {
    deleteNote: function (id: string) {
      deleteNote(id);
      this.updateNotes();
    },
  },
})
export default class NoteList extends Vue {}
</script>

<style scoped lang="scss">
@import "../assets/styles/_variables.scss";

.note-card {
  border-radius: 10px;
  -webkit-box-shadow: 0 0 17px -8px $black;
  box-shadow: 0 0 17px -8px $black;
  &:nth-of-type(n) {
    margin-bottom: 20px;
  }
  &:last-of-type {
    margin-bottom: 0;
  }

  &--todo {
    border-bottom: 1px solid $disabled;
    &:last-of-type {
      border-bottom: none;
    }
  }
  &--message {
    &-finished {
      text-decoration: line-through;
      color: $disabled;
    }
  }
}
</style>
