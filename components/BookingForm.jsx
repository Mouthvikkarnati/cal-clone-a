"use client";

import { useState } from "react";

export default function BookingForm({ eventId, dateStr, time }) {
  const [error, setError] = useState("");

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  async function submit(e) {
    e.preventDefault();
    setError("");

    const form = e.target;
    const email = form.email.value.trim();

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bookings`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventId,
        name: form.name.value.trim(),
        email,
        date: dateStr,
        time
      })
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "Booking failed");
      return;
    }

    alert("Booking confirmed! Check your email.");
  }

  return (
    <form onSubmit={submit} style={{ marginTop: 20 }}>
      <h3>Enter your details</h3>

      <input
        name="name"
        placeholder="Your name"
        required
      />

      <input
        name="email"
        placeholder="Your email"
        required
      />

      {error && (
        <p style={{ color: "red", marginTop: 8 }}>{error}</p>
      )}

      <button type="submit" style={{ marginTop: 10 }}>
        Confirm Booking
      </button>
    </form>
  );
}

