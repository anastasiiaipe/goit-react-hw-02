import styles from "./Options.module.css";
const Options = ({ updateFeedback, totalFeedback, handleReset }) => {
  return (
    <div className={styles.boxOptions}>
      <button
        type="button"
        className={styles.btnOptions}
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>
      <button
        type="button"
        className={styles.btnOptions}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        type="button"
        className={styles.btnOptions}
        onClick={() => updateFeedback("bad")}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button
          type="button"
          className={styles.btnOptions}
          onClick={handleReset}
        >
          Reset
        </button>
      )}
    </div>
  );
};
export default Options;
