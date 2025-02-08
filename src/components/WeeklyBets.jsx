import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import coursesData from "../data/courses.json";
import bettingData from "../data/bettingData.json";
import styles from "../styles/WeeklyBets.module.css";

export default function WeeklyBets() {
  const [betsByCategory, setBetsByCategory] = useState({});
  const [selectedBet, setSelectedBet] = useState(null);
  const [courseData, setCourseData] = useState([]);
  const [isTracked, setIsTracked] = useState(false);

  

  // Load bets and categorize them
  useEffect(() => {
    const categorizedBets = bettingData.weeklyBets.reduce((acc, bet) => {
      const category = bet.category || "Other"; // Default category if none provided
      if (!acc[category]) acc[category] = [];
      acc[category].push(bet);
      return acc;
    }, {});

    setBetsByCategory(categorizedBets);
  }, []);

  // Join bet handler
  const joinBet = (betId) => {
    let updatedBetsByCategory = { ...betsByCategory };

    for (const category in updatedBetsByCategory) {
      updatedBetsByCategory[category] = updatedBetsByCategory[category].map(
        (bet) => {
          if (bet.id === betId && !bet.hasJoined) {
            bet.pool += bet.entryAmount;
            bet.winners += 1;
            return { ...bet, hasJoined: true };
          }
          return bet;
        }
      );
    }

    setBetsByCategory(updatedBetsByCategory);
    setSelectedBet(
      Object.values(updatedBetsByCategory)
        .flat()
        .find((bet) => bet.id === betId)
    );
    setIsTracked(false);

    // Extract course data for tracking
    const progressData = coursesData.map((course) => {
      const completedAssignments = course.assignments.filter(
        (assignment) => assignment.status === "completed"
      ).length;
      const remainingAssignments = course.assignments.filter(
        (assignment) => assignment.status !== "completed"
      ).length;

      return {
        course: course.title,
        completed: completedAssignments,
        remaining: remainingAssignments,
      };
    });
    setCourseData(progressData);
  };

  // Track bet handler (toggle chart visibility)
  const trackBet = (betId) => {
    setSelectedBet(
      Object.values(betsByCategory)
        .flat()
        .find((bet) => bet.id === betId)
    );
    setIsTracked((prev) => !prev);
  };

  // Chart data for tracking progress
  const chartData = {
    labels: courseData.map((data) => data.course),
    datasets: [
      {
        label: "Completed Assignments",
        data: courseData.map((data) => data.completed),
        backgroundColor: "green",
      },
      {
        label: "Remaining Assignments",
        data: courseData.map((data) => data.remaining),
        backgroundColor: "red",
      },
    ],
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Bets</h2>

      {Object.keys(betsByCategory).length === 0 ? (
        <p className={styles.loading}>Loading bets...</p>
      ) : (
        Object.entries(betsByCategory).map(([category, categoryBets]) => (
          <div key={category} className={styles.categoryContainer}>
            <h3 className={styles.categoryTitle}>{category} Bets</h3>

            {categoryBets.map((bet) => (
              <div key={bet.id} className={styles.betCard}>
                <h3>{bet.bet}</h3>
                <p className={styles.betDetail}>
                  Entry: <span>${bet.amount}</span>
                </p>
                <p className={styles.betDetail}>
                  Pool: <span>${bet.pool}</span>
                </p>
                <p className={styles.betDetail}>
                  If everyone completes their assignments this week, you will
                  get (min amount): <span>${(50).toFixed(2)}</span>
                </p>
                <p className={styles.betDetail}>
                  If you are the only one who completes their assignments this
                  week, you will get (max amount):{" "}
                  <span>${(500).toFixed(2)}</span>
                </p>

                <div className={styles.buttonContainer}>
                  <button
                    className={styles.joinButton}
                    onClick={() => joinBet(bet.id)}
                    disabled={bet.hasJoined}
                  >
                    {bet.hasJoined ? "Joined" : "Join Bet"}
                  </button>

                  <button
                    className={styles.trackButton}
                    onClick={() => trackBet(bet.id)}
                    disabled={!bet.hasJoined}
                  >
                    Track Bet
                  </button>
                </div>

                {selectedBet &&
                  selectedBet.id === bet.id &&
                  isTracked &&
                  courseData.length > 0 && (
                    <div className={styles.chartContainer}>
                      <Bar data={chartData} options={{ responsive: true }} />
                    </div>
                  )}
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
}
