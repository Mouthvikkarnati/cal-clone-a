"use client";

import styles from "../../styles/events.module.css";

export default function Events() {
  return (
    <div className={styles.container}>
      <h2>Create Event Type</h2>

      <input placeholder="Event Title" />
      <input placeholder="Duration (minutes)" />
      <input placeholder="Unavailable Slots (e.g. 12–1 PM)" />

      <button>Create Event</button>
    </div>
  );
}
