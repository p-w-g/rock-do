import { defineStore } from "pinia";
import { Note } from "./interfaces";

export const useNotesStore = defineStore("notes", {
  state: () => ({
    _notes: [] as Note[],
    id: 0,
  }),
  getters: {
    notesList: (state) => state._notes,
  },
  actions: {
    newNote(note: Note) {
      this._notes.push({ ...note, id: this.id++ });
    },

    removeNote(sliderId: number) {
      const getIndex = this._notes.findIndex(({ id }) => id === sliderId);
      this._notes.splice(getIndex, 1);
    },
  },
});
