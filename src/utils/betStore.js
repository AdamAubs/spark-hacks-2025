import { create } from "zustand";
import bettingData from "../data/bettingData.json";

// Loads fake bet data
// Provides a placeBet function to add new bets dynamically
const useBetStore = create((set) => ({
  bets: bettingData, // Load initial bets from JSON
  placeBet: (type, newBet) =>
    set((state) => ({
      bets: {
        ...state.bets,
        [type]: [...state.bets[type], newBet], // Add new bet to correct category
      },
    })),
}));

export default useBetStore;
