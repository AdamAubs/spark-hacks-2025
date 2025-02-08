import { useState, useEffect } from "react";
import bettingData from "../data/bettingData.json";
import BetCategory from "../components/BetCategory";
import styles from "../styles/WeeklyBets.module.css";

export default function WeeklyBets() {
  const [betsByCategory, setBetsByCategory] = useState({});

  // Load bets and categorize them
  useEffect(() => {
    const categorizedBets = bettingData.weeklyBets.reduce((acc, bet) => {
      if (!acc[bet.category]) acc[bet.category] = [];
      acc[bet.category].push(bet);
      return acc;
    }, {});

    setBetsByCategory(categorizedBets);
  }, []);

  // Join bet handler
  const joinBet = (betId) => {
    setBetsByCategory((prev) => {
      let updatedBets = { ...prev };
      for (const category in updatedBets) {
        updatedBets[category] = updatedBets[category].map((bet) =>
          bet.id === betId
            ? { ...bet, hasJoined: true, pool: bet.pool + bet.amount }
            : bet
        );
      }
      return updatedBets;
    });
  };

  return (
    <div className={styles.container}>
      <h2>Weekly Bets</h2>
      {Object.entries(betsByCategory).map(([category, bets]) => (
        <BetCategory
          key={category}
          category={category}
          bets={bets}
          onJoin={joinBet}
        />
      ))}
    </div>
  );
}
