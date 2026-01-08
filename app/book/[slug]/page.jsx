"use client";

import { useEffect, useState } from "react";
import SlotPicker from "../../../components/SlotPicker";
import BookingForm from "../../../components/BookingForm";

export default function BookingPage({ params }) {
  const [event, setEvent] = useState(null);
  const [dateStr, setDateStr] = useState("");
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch event details
  useEffect(() => {
    fetch(`http://localhost:5000/api/public/${params.slug}`)
      .then(res => res.json())
      .then(data => setEvent(data));
  }, [params.slug]);

  // Fetch slots when date changes
  useEffect(() => {
    if (!dateStr || !event) return;

    setLoading(true);
    setSelectedSlot(null);

    fetch(
      `http://localhost:5000/api/public/${params.slug}/slots?date=${dateStr}`
    )
      .then(res => res.json())
      .then(data => {
        setSlots(Array.isArray(data) ? data : []);
        setLoading(false);
      });
  }, [dateStr, event, params.slug]);

  return (
    <div className="container">
      <div className="card center">
        <h1>{"Book a Meeting"}</h1>

        {event?.description && (
          <p style={{ color: "#6b7280", marginBottom: 20 }}>
            {event.description}
          </p>
        )}

        {/* DATE PICKER */}
        <label className="label">
          Select Date
          <input
            type="date"
            value={dateStr}
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => setDateStr(e.target.value)}
          />
        </label>

        {/* SLOTS */}
        {dateStr && (
          <>
            <h3 style={{ marginTop: 30 }}>Available Time Slots</h3>

            {loading ? (
              <p>Loading slots...</p>
            ) : (
              <SlotPicker
                slots={slots}
                selected={selectedSlot}
                onSelect={setSelectedSlot}
              />
            )}
          </>
        )}

        {/* BOOKING FORM */}
        {selectedSlot && event && (
          <BookingForm
            eventId={event.id}
            dateStr={dateStr}
            time={selectedSlot}
          />
        )}
      </div>
    </div>
  );
}
