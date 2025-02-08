import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2"; // Import Bar chart from react-chartjs-2
import Chart from "chart.js/auto";
import coursesData from "../data/courses.json"; // Assuming your courses data is in this file
import bettingData from "../data/bettingData.json"; // Ensure this path is correct
import styles from "../styles/WeeklyBets.module.css"; // Import the CSS module

export default function WeeklyBets() {
  const [bets, setBets] = useState([]);
  const [selectedBet, setSelectedBet] = useState(null); // Store selected bet for tracking
  const [courseData, setCourseData] = useState([]);
  const [isTracked, setIsTracked] = useState(false); // Track if the bet is being tracked

  // Load bets data from the JSON file when the component mounts
  useEffect(() => {
    setBets(bettingData.weeklyBets); // Set the state with data from the JSON
  }, []);

  // Join bet handler (could be expanded to include logic for joining a bet)
  const joinBet = (betId) => {
    // Find the bet to track
    const betToTrack = bets.find((bet) => bet.id === betId);

    // Check if the bet is already joined, prevent action if so
    if (!betToTrack || betToTrack.hasJoined) {
      return;
    }

    // Update the bet's `hasJoined` status and set the selected bet
    const updatedBets = bets.map((bet) => {
      if (bet.id === betId) {
        // Update pool by adding entry amount
        bet.pool += bet.entryAmount;

        // Optional: Increase winners count if necessary, for example:
        bet.winners += 1; // You could also adjust this dynamically

        return { ...bet, hasJoined: true }; // Mark this bet as joined
      }
      return bet;
    });

    setBets(updatedBets); // Update the bets state
    setSelectedBet(betToTrack); // Set the selected bet
    setIsTracked(false); // Reset tracking when joining a new bet

    // Extract the course data and set it for the chart
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

  // Prepare data for the progress chart
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

  // Track bet handler (toggle chart visibility)
  const trackBet = (betId) => {
    setSelectedBet(bets.find((bet) => bet.id === betId)); // Set the selected bet to track
    setIsTracked((prev) => !prev); // Toggle track status
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Bets</h2>
      {bets.length === 0 ? (
        <p className={styles.loading}>Loading bets...</p> // Display loading text until data is loaded
      ) : (
        bets.map((bet) => (
          <div key={bet.id} className={styles.betCard}>
            <h3>{bet.bet}</h3>
            <p className={styles.betDetail}>
              Entry: <span>${bet.amount}</span>
            </p>
            <p className={styles.betDetail}>
              Pool: <span>${bet.pool}</span>
            </p>
            <p className={styles.betDetail}>
              If everyone completes their assignments this week, you will get
              (min amount): <span>${(50).toFixed(2)}</span>
            </p>
            <p className={styles.betDetail}>
              If you are the only one who completes their assignments this week,
              you will get (max amount): <span>${(500).toFixed(2)}</span>
            </p>
            <div className={styles.buttonContainer}>
              {/* Join Bet Button */}
              <button
                className={styles.joinButton}
                onClick={() => joinBet(bet.id)}
                disabled={bet.hasJoined} // Disable the button if already joined
              >
                {bet.hasJoined ? "Joined" : "Join Bet"}
              </button>

              {/* Track Bet Button */}
              <button
                className={styles.trackButton}
                onClick={() => trackBet(bet.id)}
                disabled={!bet.hasJoined} // Disable if not joined or already being tracked
              >
                Track Bet
              </button>
            </div>

            {/* Conditional rendering of the progress chart */}
            {selectedBet &&
              selectedBet.id === bet.id &&
              isTracked &&
              courseData.length > 0 && (
                <div className={styles.chartContainer}>
                  <Bar data={chartData} options={{ responsive: true }} />
                </div>
              )}
          </div>
        ))
      )}
    </div>
  );
}
