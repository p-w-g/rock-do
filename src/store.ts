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

    clearAll() {
      this._notes = [];
      this._note = {} as Note;
    },
  },
});

export const useUserStore = defineStore("user", {
  state: () => ({
    _user: {},
    _isLoggedIn: false,
  }),

  getters: {
    isLoggedIn: (state) => state._isLoggedIn,
    loggedInUser: (state) => state._user,
  },

  actions: {
    signin() {
      // todo
    },

    signout() {
      // todo
    },

    toggleIsLoggedIn() {
      this._isLoggedIn = !this._isLoggedIn;
    },

    // at this point I have no idea what Firebase will provide
    // and using unknown spawns another TS issue. hence: TODO fix type
    setUserData(data: any) {
      this._user = data;
    },
  },
});
