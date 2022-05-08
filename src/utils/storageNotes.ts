import { INote } from "@/types/note.types";

export const getLSNotes = (): INote[] =>
  JSON.parse(window.localStorage.getItem("notes") || "") || [];

export const updateLSNotes = (notes: INote[]) =>
  window.localStorage.setItem("notes", JSON.stringify(notes));
