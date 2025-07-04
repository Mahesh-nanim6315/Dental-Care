import FAQ from '../components/FAQ';

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <h1>Welcome to Todays Dental</h1>
        <p>Your smile, our commitment.</p>
        <button>Book Appointment</button>
      </section>

      <section className="intro">
        <h2>About Our Clinic</h2>
        <p>We provide top-notch dental services with the latest technology and care.</p>
      </section>

      <section className="services-overview">
        <h2>Our Services</h2>
        <ul>
          <li>Teeth Cleaning</li>
          <li>Dental Implants</li>
          <li>Braces & Aligners</li>
        </ul>
      </section>
       <FAQ />
    </main>
  );
}

export default Home;
