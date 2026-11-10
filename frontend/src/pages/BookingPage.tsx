import "../App.css";

function BookingPage() {
  return (
    <main className="dashboard-page">
      <header className="dashboard-header">
        <a href="/dashboard" className="home-logo">
          UNIKAT<span>.</span>
        </a>

        <nav className="dashboard-navigation">
          <a href="/dashboard">Domov</a>
          <a href="/booking">Naroči termin</a>
          <a href="/gallery">Galerija</a>
          <a href="/community">Skupnost</a>
        </nav>
      </header>

      <section className="dashboard-content">
        <p className="home-overline">USTVARI NEKAJ POSEBNEGA</p>
        <h2>Izberi svojo storitev</h2>

        <div className="dashboard-grid">
          <article className="dashboard-card">
            <span>✿</span>
            <h3>Cvetlični aranžmaji in šopki</h3>
            <p>Unikatni cvetlični izdelki za posebne trenutke.</p>
            <strong>Kmalu na voljo</strong>
          </article>

          <article className="dashboard-card">
            <span>♡</span>
            <h3>Ličenje</h3>
            <p>Profesionalno ličenje za vsakodnevne in posebne priložnosti.</p>
            <strong>Kmalu na voljo</strong>
          </article>

          <article className="dashboard-card">
            <span>✧</span>
            <h3>Organizacija porok</h3>
            <p>Pomoč pri ustvarjanju vajinega nepozabnega dne.</p>
            <strong>Kmalu na voljo</strong>
          </article>
        </div>
      </section>
    </main>
  );
}

export default BookingPage;