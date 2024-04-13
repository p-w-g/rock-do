import { defineStore } from "pinia";
import { Note } from "./interfaces";

export const useNotesStore = defineStore("notes", {
  state: () => ({
    _notes: [] as Note[],
    id: 0,
    _note: {} as Note,
  }),
  getters: {
    notesList: (state) => state._notes,
    chosenNote: (state) => state._note,
  },
  actions: {
    newNote(note: Note) {
      this._notes.push({ ...note, id: this.id++ });
    },

    removeNote(sliderId: number) {
      const getIndex = this._notes.findIndex(({ id }) => id === sliderId);
      this._notes.splice(getIndex, 1);
    },

    choseNote(sliderId: number) {
      const getIndex = this._notes.findIndex(({ id }) => id === sliderId);
      this._note = this._notes[getIndex];
    },

    updateNote(note: Note) {
      const getIndex = this._notes.findIndex(({ id }) => id === note.id);
      this._notes[getIndex] = note;
    },
  },
});
