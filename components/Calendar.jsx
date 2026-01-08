"use client";

export default function Calendar({ selectedDate, onSelect }) {
  return (
    <div>

      <input
        type="date"
        value={selectedDate ? selectedDate.toISOString().split("T")[0] : ""}
        onChange={(e) => {
          const d = new Date(e.target.value);
          console.log("HTML date selected:", d);
          onSelect(d);
        }}
      />
    </div>
  );
}
