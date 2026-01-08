import Link from "next/link";

export default function HomePage() {
  return (
    <div className="container">
      {/* HERO */}
      <section className="hero">
        <h1>Smart Scheduling Platform</h1>
        <p>
          A Cal.com-inspired scheduling system that allows users to book meetings
          seamlessly based on real-time availability.
        </p>

        {/* CTA BUTTONS */}
        <div className="cta">
          <Link href="/dashboard">
            <button className="primary">Admin Dashboard</button>
          </Link>

          <Link href="/book/30-min-meeting">
            <button className="secondary">Book a Meeting</button>
          </Link>
        </div>
      </section>

      {/* ABOUT */}
      <section className="card">
        <h2>What This Platform Does</h2>
        <p>
          This platform eliminates back-and-forth scheduling by allowing users
          to book meetings based on predefined availability.
        </p>

        <ul>
          <li>Real-time availability</li>
          <li>Automatic conflict prevention</li>
          <li>Email confirmations and cancellations</li>
          <li>Admin dashboard for booking management</li>
        </ul>
      </section>

      <section className="card">
        <h2>How It Works</h2>
        <ol>
          <li>Select a date</li>
          <li>Choose an available time slot</li>
          <li>Enter your details</li>
          <li>Receive confirmation by email</li>
        </ol>
      </section>
    </div>
  );
}
