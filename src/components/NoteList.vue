<template>
  <div class="flex note-list">
    <BaseNoteCard
      v-for="note of notes"
      :id="note.id"
      :key="note.id"
      :title="note.title"
      :todos="note.todos"
      :editable="false"
      :updateNotes="updateNotes"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BaseNoteCard from "@/components/BaseNoteCard.vue";
import { PropType } from "vue";
import { INote } from "@/types/note.types";

@Options({
  components: { BaseNoteCard },
  props: {
    disable: Boolean,
    notes: Array as PropType<INote[]>,
    updateNotes: Function,
  },
})
export default class NoteList extends Vue {}
</script>

<style scoped lang="scss"></style>
