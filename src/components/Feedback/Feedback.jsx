import styles from "./Feedback.module.css";

export default function Feedback({ feedback, totalFeedback, positiveFeedback }) {
  return (
    <div className={styles.feedback}>
      <h2>Statistics</h2>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive Feedback: {positiveFeedback}%</p>
    </div>
  );
}
