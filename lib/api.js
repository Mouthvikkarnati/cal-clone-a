const BASE = `${process.env.NEXT_PUBLIC_API_URL}/api`;

export const api = {
  events: () => fetch(`${BASE}/events`).then(r => r.json()),
  availability: () => fetch(`${BASE}/availability`).then(r => r.json()),
  slots: (slug, date) =>
    fetch(`${BASE}/public/${slug}/slots?date=${date}`).then(r => r.json()),
  book: data =>
    fetch(`${BASE}/bookings`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }).then(r => r.json())
};

