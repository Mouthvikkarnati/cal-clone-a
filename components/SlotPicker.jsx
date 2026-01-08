import styles from "../styles/booking.module.css";

export default function SlotPicker({ slots, selected, onSelect }) {
  return (
    <div className={styles.slots}>
      {slots.map(s => (
        <button
          key={s.time}
          disabled={!s.available}
          className={`${styles.slot} ${
            s.available ? styles.available : styles.booked
          } ${selected === s.time ? styles.selected : ""}`}
          onClick={() => s.available && onSelect(s.time)}
        >
          {s.time}
        </button>
      ))}
    </div>
  );
}
