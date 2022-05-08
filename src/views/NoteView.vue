<template>
  <h1>Note</h1>
  <BaseNoteCard
    v-if="note"
    :id="note.id"
    :key="note.id"
    :title="note.title"
    :todos="note.todos"
    :onChange="toggleTodo"
    :editable="true"
  />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BaseNoteCard from "@/components/BaseNoteCard.vue";
import { INote } from "@/types/note.types";
import { findNoteById, toggleNoteById } from "@/utils/notes";
import { getLSNotes } from "@/utils/storageNotes";

@Options({
  components: { BaseNoteCard },
  data: () => ({
    notes: getLSNotes(),
    note: null,
  }),

  mounted() {
    this.note = this.notes.find(
      ({ id }: INote) => id === this.$route.params.id
    );
  },

  methods: {
    toggleTodo: function (e: any) {
      const newNotes = toggleNoteById(e.target.id);
      this.note = findNoteById(newNotes, this.$route.params.id);
    },
  },
})
export default class NoteView extends Vue {}
</script>
