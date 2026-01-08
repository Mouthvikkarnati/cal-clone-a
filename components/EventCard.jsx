export default function EventCard({ event }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="font-medium">{event.title}</h2>
      <p className="text-sm text-gray-500">{event.duration} mins</p>
      <a
        href={`/book/${event.slug}`}
        className="text-blue-600 text-sm mt-2 inline-block"
      >
        Booking link →
      </a>
    </div>
  );
}
