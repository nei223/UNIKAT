
function CommunityPage() {
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
        <p className="home-overline">NAŠA SKUPNOST</p>
        <h2>Prostor za ideje in navdih.</h2>

        <div className="dashboard-grid">
          <article className="dashboard-card">
            <span>✿</span>
            <h3>Cvetlični kotiček</h3>
            <p>Deljenje idej, nasvetov in ljubezni do cvetja.</p>
            <strong>Kmalu na voljo</strong>
          </article>

          <article className="dashboard-card">
            <span>♡</span>
            <h3>Lepota in ličenje</h3>
            <p>Pogovori o ličenju, lepoti in negi.</p>
            <strong>Kmalu na voljo</strong>
          </article>

          <article className="dashboard-card">
            <span>✧</span>
            <h3>Poročne ideje</h3>
            <p>Navdih, vprašanja in ideje za popolno poroko.</p>
            <strong>Kmalu na voljo</strong>
          </article>
        </div>

        <p style={{ marginTop: "40px", color: "var(--muted)" }}>
          Forum za objave in komentarje bomo dodali v naslednji fazi.
        </p>
      </section>
    </main>
  );
}

export default CommunityPage;
