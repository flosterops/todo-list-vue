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

  <form
    v-if="note"
    @submit="
      (e) => {
        save();
        e.preventDefault();
      }
    "
    id="edit-note"
  >
    <div class="flex">
      <label for="title">Title:</label>
      <input required type="text" id="title" v-model="title" />
    </div>

    <div v-if="note.todos.length" class="p-6">
      <div class="flex" v-for="todo of note.todos" :key="todo.id">
        <label for="title">Title:</label>
        <input
          type="text"
          required
          :id="todo.id"
          @change="todoChange"
          v-model="todos[todo.id]"
        />
      </div>
    </div>
    <BaseButton on-click="" type="submit" text="Save" />
  </form>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BaseNoteCard from "@/components/BaseNoteCard.vue";
import { INote } from "@/types/note.types";
import { findNoteById, toggleNoteById } from "@/utils/notes";
import { getLSNotes, updateLSNotes } from "@/utils/storageNotes";
import BaseButton from "@/components/BaseButton.vue";
import { ITodo } from "@/types/todo.types";

@Options({
  components: { BaseButton, BaseNoteCard },
  data: () => ({
    notes: getLSNotes(),
    note: null,
    title: "",
    todos: [],
  }),

  mounted() {
    this.note = this.notes.find(
      ({ id }: INote) => id === this.$route.params.id
    );
    this.title = this.note.title;
    this.todos = this.note.todos.reduce(
      (acc: Record<string, string>, todo: ITodo) => ({
        ...acc,
        [todo.id]: todo.message,
      }),
      {}
    );
  },

  methods: {
    toggleTodo: function (e: any) {
      const newNotes = toggleNoteById(e.target.id);
      this.note = findNoteById(newNotes, this.$route.params.id);
    },
    save: function () {
      const newNote = {
        title: this.title,
        todos: this.note.todos.map(
          (todo: ITodo): ITodo => ({
            ...todo,
            message: this.todos[todo.id],
          })
        ),
      };

      const updatedNote = { ...this.note, ...newNote };

      const updatedNotes = this.notes.map((note: INote): INote => {
        if (note.id === this.$route.params.id) {
          return updatedNote;
        }

        return note;
      });

      updateLSNotes(updatedNotes);
      this.notes = getLSNotes();
      this.note = this.notes.find(
        ({ id }: INote) => id === this.$route.params.id
      );
    },
    todoChange: function (e: any) {
      this.todos[e.target.id] = e.target.value;
      console.log(this.todos, this.title);
    },
  },
})
export default class NoteView extends Vue {}
</script>
