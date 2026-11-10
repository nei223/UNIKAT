
import "./App.css";

type HomePageProps = {
  currentUser: any;
  onLogout: () => void;
};

function HomePage({ currentUser, onLogout }: HomePageProps) {
  return (
    <main className="home-page">
      <header className="home-header">
        <a href="/" className="home-logo">
          UNIKAT<span>.</span>
        </a>

        <nav className="home-navigation">
          <a href="#domov">Domov</a>
          <a href="#o-nas">O nas</a>
          <a href="#ponudba">Naša ponudba</a>
          <a href="#kontakt">Kontakt</a>
        </nav>

        <div className="home-header-actions">
          {currentUser ? (
            <>
              <span className="home-user">
                Pozdravljena, {currentUser.firstName}!
              </span>
              <button onClick={onLogout} className="home-login-button">
                Odjava
              </button>
            </>
          ) : (
            <>
              <a href="/login" className="home-login-link">
                Prijava
              </a>
              <a href="/register" className="home-register-button">
                Ustvari račun
              </a>
            </>
          )}
        </div>
      </header>

      <section className="home-hero" id="domov">
        <div className="home-hero-content">
          <p className="home-overline">
            USTVARJENO Z LJUBEZNIJO
          </p>

          <h1>
            Lepota je v
            <br />
            <span>majhnih stvareh.</span>
          </h1>

          <p className="home-hero-description">
            Dobrodošla v svetu UNIKAT, kjer se srečajo
            cvetje, lepota in ustvarjalnost. Odkrij
            čarobnost unikatnih trenutkov.
          </p>

          <a href="#ponudba" className="home-main-button">
            Odkrij naš svet <span>→</span>
          </a>

          <p className="home-hero-note">
            Ustvarjamo trenutke, ki ostanejo v spominu.
          </p>
        </div>

        <div className="home-hero-visual">
          <div className="home-flower-circle">
            <span>✿</span>
          </div>
          <div className="home-flower-small">✾</div>
          <div className="home-visual-caption">
            <span>UNIKAT</span>
            <span>POSEBNI TRENUTKI</span>
          </div>
        </div>
      </section>

      <section className="home-about" id="o-nas">
        <p className="home-overline">NAŠA ZGODBA</p>

        <h2>
          Vsaka podrobnost
          <br />
          šteje.
        </h2>

        <p>
          Verjamemo, da lepoto ustvarjajo majhne stvari.
          Nežni detajli, skrbno izbrani elementi in
          ustvarjalnost, ki vsakemu trenutku podari
          nekaj posebnega.
        </p>
      </section>

      <section className="home-offer" id="ponudba">
        <p className="home-overline">ODKRIJ UNIKAT</p>

        <h2>Naš svet lepote in ustvarjalnosti</h2>

        <div className="home-offer-grid">
          <article className="home-offer-card">
            <div className="offer-icon">✿</div>
            <h3>Cvetje</h3>
            <p>
              Cvetlična lepota za posebne trenutke
              in vsakdanja razvajanja.
            </p>
          </article>

          <article className="home-offer-card">
            <div className="offer-icon">♡</div>
            <h3>Lepota</h3>
            <p>
              Nežni trenutki zase, dobro počutje
              in skrb za lepoto.
            </p>
          </article>

          <article className="home-offer-card">
            <div className="offer-icon">✧</div>
            <h3>Ustvarjalnost</h3>
            <p>
              Ideje, posebni detajli in unikatni
              načini izražanja.
            </p>
          </article>
        </div>
      </section>

      <section className="home-cta">
        <p className="home-overline">POSTANI DEL NAŠE ZGODBE</p>

        <h2>
          Ustvari svoj
          <br />
          UNIKAT trenutek.
        </h2>

        <p>
          Pridruži se nam in odkrij svet, v katerem
          je vsak trenutek lahko nekaj posebnega.
        </p>

        {!currentUser && (
          <a href="/register" className="home-main-button">
            Ustvari svoj račun <span>→</span>
          </a>
        )}
      </section>

      <footer className="home-footer" id="kontakt">
        <a href="/" className="home-logo">
          UNIKAT<span>.</span>
        </a>

        <p>Ustvarjeno z ljubeznijo.</p>

        <p>© {new Date().getFullYear()} UNIKAT. Vse pravice pridržane.</p>
      </footer>
    </main>
  );
}

export default HomePage;
