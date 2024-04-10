import { defineStore } from "pinia";
import { Note } from "./interfaces";

export const useNotesStore = defineStore("notes", {
  state: () => ({
    _notes: [
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
  getters: {
    notesList: (state) => state._notes,
  },
  actions: {
    newNote(note: Note) {
      this._notes.push({ ...note, id: this.id++ });
    },
  },
});
