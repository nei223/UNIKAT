
function GalleryPage() {
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
        <p className="home-overline">NAŠ NAVDIH</p>
        <h2>Galerija ustvarjalnosti.</h2>

        <div className="dashboard-grid">
          <article className="dashboard-card">
            <span>✿</span>
            <h3>Cvetlični aranžmaji</h3>
            <p>Navdih za šopke in cvetlične dekoracije.</p>
          </article>

          <article className="dashboard-card">
            <span>♡</span>
            <h3>Ličenje</h3>
            <p>Ideje za nežne, elegantne in posebne videze.</p>
          </article>

          <article className="dashboard-card">
            <span>✧</span>
            <h3>Poroke</h3>
            <p>Čudovite podrobnosti in ideje za poročni dan.</p>
          </article>
        </div>

        <p style={{ marginTop: "40px", color: "var(--muted)" }}>
          Fotografije bodo dodane v naslednji fazi.
        </p>
      </section>
    </main>
  );
}

export default GalleryPage;
