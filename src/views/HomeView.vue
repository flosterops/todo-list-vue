<template>
  <div class="flex jc-center">
    <h1>Notes</h1>
    <div class="flex flex-d-row jc-end p-6">
      <BaseButton id="add-button" :onClick="addNote" text="Add Note" />
    </div>
    <NoteList :notes="notes" :updateNotes="updateNotes" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TodoList from "@/components/TodoList.vue";
import NoteList from "@/components/NoteList.vue";
import BaseButton from "@/components/BaseButton.vue";
import { addNote } from "@/utils/notes";
import { PropType } from "vue";
import { INote } from "@/types/note.types";
import { getLSNotes } from "@/utils/storageNotes";

@Options({
  components: {
    BaseButton,
    NoteList,
    TodoList,
  },
  data: () => {
    return {
      notes: (JSON.parse(window.localStorage.getItem("notes") || "") ||
        []) as PropType<INote[]>,
    };
  },
  mounted() {
    this.notes = JSON.parse(window.localStorage.getItem("notes") || "") || [];
  },
  methods: {
    updateNotes: function () {
      this.notes = getLSNotes();
    },
    addNote: function () {
      this.notes = addNote();
    },
  },
})
export default class HomeView extends Vue {}
</script>
