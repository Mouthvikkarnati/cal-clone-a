"use client";

import { useEffect, useState } from "react";

export default function BookingsPage() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/bookings")
      .then(r => r.json())
      .then(setBookings);
  }, []);

  async function reschedule(id) {
    const start = prompt("New start ISO (YYYY-MM-DDTHH:MM:SSZ)");
    const end = prompt("New end ISO");
    await fetch(`http://localhost:5000/api/bookings/${id}/reschedule`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ start, end })
    });
    alert("Rescheduled");
  }

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Bookings</h1>
      {bookings.map(b => (
        <div key={b.id} className="bg-white p-4 rounded mb-2 shadow">
          <p>{b.name}</p>
          <button
            onClick={() => reschedule(b.id)}
            className="text-blue-600 text-sm"
          >
            Reschedule
          </button>
        </div>
      ))}
    </div>
  );
}
