"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState({ upcoming: [], past: [] });

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bookings`)
      .then(res => res.json())
      .then(setData);
  }, []);

  async function cancelBooking(id) {
    if (!confirm("Cancel this booking?")) return;

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bookings/${id}`, {
      method: "DELETE"
    });

    setData(prev => ({
      ...prev,
      upcoming: prev.upcoming.filter(b => b.id !== id)
    }));
  }

  return (
    <div className="container">
      <h1 className="center">Admin Dashboard</h1>

      <section className="card">
        <h2>Upcoming Meetings</h2>

        {data.upcoming.length === 0 ? (
          <p className="center">No upcoming meetings</p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Date</th>
                <th>Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.upcoming.map(b => (
                <tr key={b.id}>
                  <td>{b.name}</td>
                  <td>{b.email}</td>
                  <td>{b.date.split("T")[0]}</td>
                  <td>{b.time}</td>
                  <td>
                    <button
                      className="danger"
                      onClick={() => cancelBooking(b.id)}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      <section className="card">
        <h2>Past Meetings</h2>

        {data.past.length === 0 ? (
          <p className="center">No past meetings</p>
        ) : (
          <table className="table muted">
            <thead>
              <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {data.past.map(b => (
                <tr key={b.id}>
                  <td>{b.name}</td>
                  <td>{b.date.split("T")[0]}</td>
                  <td>{b.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
}

