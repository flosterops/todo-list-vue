import { getLSNotes, updateLSNotes } from "@/utils/storageNotes";
import { INote } from "@/types/note.types";
import { ITodo } from "@/types/todo.types";

export const toggleNoteById = (id: string): INote[] => {
  const notes = getLSNotes();

  const updatedNotes = notes.map((note: INote): INote => {
    const todos = note.todos.map((todo: ITodo): ITodo => {
      if (id === todo.id) {
        return { ...todo, active: !todo.active };
      }

      return todo;
    });

    return { ...note, todos };
  });

  updateLSNotes(updatedNotes);

  return updatedNotes;
};

export const findNoteById = (notes: INote[], id: string): INote | undefined =>
  notes.find((note: INote) => note.id === id);

export const createNote = (): INote => ({
  id: Date.now().toString(),
  title: "New note",
  todos: [],
});

export const addNote = (): INote[] => {
  const newNote = createNote();
  const notes = getLSNotes();
  updateLSNotes([newNote, ...notes]);
  return getLSNotes();
};

export const deleteNote = (id: string): INote[] => {
  const notes = getLSNotes();
  const updatedNotes = notes.filter((note: INote) => note.id !== id);
  updateLSNotes(updatedNotes);

  return getLSNotes();
};
