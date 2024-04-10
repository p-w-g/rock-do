import { defineStore } from "pinia";
import { Note } from "./interfaces";

export const useNotesStore = defineStore("notes", {
  state: () => ({
    notes: [
      {
        user: "first user",
        description: "first task",
        id: -1,
        anonymous: false,
        isPrivate: false,
      },
    ] as Note[],
    id: 0,
  }),
  actions: {
    newNote(note: Note) {
      this.notes.push({ ...note, id: this.id++ });
    },
  },
});
