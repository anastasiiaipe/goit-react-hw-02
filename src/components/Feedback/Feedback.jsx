import styles from "./Feedback.module.css";
const Feedback = ({ feedback, total, positivePercentage }) => {
  return (
    <div className={styles.boxFeedback}>
      <p className={styles.textFeedback}>Good: {feedback.good}</p>
      <p className={styles.textFeedback}>Neutral: {feedback.neutral}</p>
      <p className={styles.textFeedback}>Bad: {feedback.bad}</p>
      <p className={styles.textFeedback}>Total: {total}</p>
      <p className={styles.textFeedback}>Positive: {positivePercentage}%</p>
    </div>
  );
};
export default Feedback;
