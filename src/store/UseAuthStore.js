import { create } from "zustand";
import Parse from "parse";

export const useAuthStore = create((set) => ({
  user: Parse.User.current(),
  error: "",

  signUp: async (username, password) => {
    set({ error: "" });
    try {
      const user = new Parse.User();
      user.set("username", username);
      user.set("password", password);
      await user.signUp();
      set({ user });
      return user;
    } catch (err) {
      set({ error: err.message });
      throw err;
    }
  },

  login: async (username, password) => {
    set({ error: "" });
    try {
      const user = await Parse.User.logIn(username, password);
      set({ user });
      return user;
    } catch (err) {
      set({ error: err.message });
      throw err;
    }
  },

  logOut: async () => {
    await Parse.User.logOut();
    set({ user: null });
  },

  clearError: () => set({ error: "" }),
}));
