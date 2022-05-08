import { ITodo } from "@/types/todo.types";

export interface INote {
  id: string;
  title: string;
  todos: ITodo[];
}
