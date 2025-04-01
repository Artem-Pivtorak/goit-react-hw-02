import styles from "./Feedback.module.css";

export default function Feedback({ feedback, totalFeedback, positiveFeedback }) {
  if (!feedback) return null; // Захист від помилки

  return (
    <div className={styles.feedback}>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total Feedback: {totalFeedback}</p>
      <p>Positive Feedback: {positiveFeedback}%</p>
    </div>
  );
}
