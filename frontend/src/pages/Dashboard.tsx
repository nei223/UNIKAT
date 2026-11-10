
type DashboardProps = {
  currentUser: any;
  onLogout: () => void;
};

function Dashboard({ currentUser, onLogout }: DashboardProps) {
  return (
    <main className="dashboard-page">
      <header className="dashboard-header">
        <a href="/" className="home-logo">
          UNIKAT<span>.</span>
        </a>

        <nav className="dashboard-navigation">
          <a href="/dashboard">Domov</a>
          <a href="/booking">Naroči termin</a>
          <a href="/gallery">Galerija</a>
          <a href="/community">Skupnost</a>
        </nav>

        <div className="dashboard-account">
          <span>{currentUser.firstName}</span>
          <button onClick={onLogout}>Odjava</button>
        </div>
      </header>

      <section className="dashboard-welcome">
        <p className="home-overline">TVOJ UNIKATNI SVET</p>

        <h1>
          Dobrodošla nazaj,
          <br />
          <span>{currentUser.firstName}.</span>
        </h1>

        <p>
          Veseli nas, da si del naše zgodbe.
          Razišči naše storitve, galerijo in skupnost.
        </p>
      </section>

      <section className="dashboard-content">
        <p className="home-overline">RAZIŠČI UNIKAT</p>
        <h2>Kaj te danes zanima?</h2>

        <div className="dashboard-grid">
          <a href="/booking" className="dashboard-card">
            <span>✿</span>
            <h3>Naroči termin</h3>
            <p>
              Izberi cvetlični aranžma, ličenje
              ali organizacijo poroke.
            </p>
            <strong>Razišči →</strong>
          </a>

          <a href="/gallery" className="dashboard-card">
            <span>✧</span>
            <h3>Galerija</h3>
            <p>
              Oglej si naše izdelke, poroke,
              ličenja in ustvarjalne ideje.
            </p>
            <strong>Oglej si →</strong>
          </a>

          <a href="/community" className="dashboard-card">
            <span>♡</span>
            <h3>Skupnost</h3>
            <p>
              Spoznaj ideje, navdih in
              pogovore naše skupnosti.
            </p>
            <strong>Vstopi →</strong>
          </a>
        </div>
      </section>

      <footer className="home-footer">
        <a href="/" className="home-logo">
          UNIKAT<span>.</span>
        </a>
        <p>Ustvarjeno z ljubeznijo.</p>
      </footer>
    </main>
  );
}

export default Dashboard;
