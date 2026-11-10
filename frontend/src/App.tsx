import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./HomePage";
import Dashboard from "./pages/Dashboard";
import BookingPage from "./pages/BookingPage";
import GalleryPage from "./pages/GalleryPage";
import CommunityPage from "./pages/CommunityPage";
function App() {
  const currentPath = window.location.pathname;

  const isLoginPage = currentPath === "/login";
  const isRegisterPage = currentPath === "/register";
  const isHomePage = currentPath === "/";
  const isDashboardPage = currentPath === "/dashboard";
  const isBookingPage = currentPath === "/booking";
  const isGalleryPage = currentPath === "/gallery";
  const isCommunityPage = currentPath === "/community";
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);
  useEffect(() => {
  const checkLogin = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/auth/me",
        {
          credentials: "include",
        }
      );

      if (!response.ok) {
        setCurrentUser(null);
        return;
      }

      const data = await response.json();
      setCurrentUser(data.user);

      if (
        window.location.pathname === "/login" ||
        window.location.pathname === "/register" ||
        window.location.pathname === "/"
      ) {
        window.location.href = "/dashboard";
      }
    } catch {
      setCurrentUser(null);
    }
  };
  checkLogin();
}, []);
  const handleRegister = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:3000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Registracija ni uspela.");
        return;
      }

      setMessage("Registracija je bila uspešna!");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
    } catch {
      setMessage("Povezava s strežnikom ni uspela.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:3000/api/auth/login",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Prijava ni uspela.");
        return;
      }

      setMessage("Uspešno si prijavljena!");
      setCurrentUser(data.user);
      setEmail("");
      setPassword("");
    } catch {
      setMessage("Povezava s strežnikom ni uspela.");
    } finally {
      setLoading(false);
    }
  };
    const handleLogout = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/auth/logout",
        {
          method: "POST",
          credentials: "include",
        }
      );

      if (!response.ok) {
        setMessage("Odjava ni uspela.");
        return;
      }

      setCurrentUser(null);
      window.location.href = "/";
      setMessage("Uspešno si se odjavila!");
    } catch {
      setMessage("Povezava s strežnikom ni uspela.");
    }
  };
  
if (currentUser && isDashboardPage) {
  return (
    <Dashboard
      currentUser={currentUser}
      onLogout={handleLogout}
    />
  );
}

if (currentUser && isBookingPage) {
  return <BookingPage />;
}

if (currentUser && isGalleryPage) {
  return <GalleryPage />;
}

if (currentUser && isCommunityPage) {
  return <CommunityPage />;
}

if (isHomePage) {
  return (
    <HomePage
      currentUser={currentUser}
      onLogout={handleLogout}
    />
  );
}


return (
    <main className="page-container">
      <section className="brand-panel">
        <div className="brand-content">
          <div className="brand-symbol">✿</div>

          <p className="brand-overline">USTVARJENO Z LJUBEZNIJO</p>

          <h1>
            UNIKAT<span>.</span>
          </h1>

          <div className="brand-divider" />

          <h2>
            Lepota je v
            <br />
            majhnih stvareh.
          </h2>

          <p className="brand-description">
            Prostor, kjer se srečajo cvetje, lepota
            in ustvarjalnost. Dobrodošla v našem
            svetu unikatnih trenutkov.
          </p>

          <div className="brand-decoration">✿</div>
        </div>

        <p className="brand-footer">
          UNIKAT · CVETJE IN LEPOTA
        </p>
      </section>

      <section className="form-panel">
        <div className="register-card">
          {currentUser && (
              <div className="user-welcome">
                <p>
                  Dobrodošli, <strong>{currentUser.firstName}</strong>!
                  <p>{currentUser.email}</p>
                  <p>Vloga: {currentUser.role}</p>
                </p>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="logout-button"
                >
                  Odjava
                </button>
              </div>
            )}
          {!currentUser && (isLoginPage ? (
            <>
              <p className="form-overline">
                DOBRODOŠLA NAZAJ
              </p>

              <h2>Prijava</h2>

              <p className="form-description">
                Veseli nas, da se vračaš. Prijavi se
                v svoj UNIKAT račun.
              </p>

              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label htmlFor="email">
                    E-poštni naslov
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="ime@email.com"
                    value={email}
                    onChange={(event) =>
                      setEmail(event.target.value)
                    }
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Geslo</label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Tvoje geslo"
                    value={password}
                    onChange={(event) =>
                      setPassword(event.target.value)
                    }
                    required
                  />
                </div>

                <button type="submit" disabled={loading}>
                  {loading ? "Prijavljanje ..." : "Prijavi se"}
                  <span>→</span>
                </button>

                <div className="login-link">
                  <span>Še nimaš računa?</span>
                  <a href="/register">Registriraj se</a>
                </div>

                {message && (
                  <p className="form-message" role="status">
                    {message}
                  </p>
                )}
              </form>
            </>
          ) : (
            <>
              <p className="form-overline">
                DOBRODOŠLA V UNIKATU
              </p>

              <h2>Ustvari svoj račun</h2>

              <p className="form-description">
                Veseli nas, da si tukaj. Ustvari račun
                in vstopi v naš svet.
              </p>

              <form onSubmit={handleRegister}>
                <div className="name-fields">
                  <div className="form-group">
                    <label htmlFor="firstName">Ime</label>
                    <input
                      id="firstName"
                      type="text"
                      placeholder="Tvoje ime"
                      value={firstName}
                      onChange={(event) =>
                        setFirstName(event.target.value)
                      }
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastName">Priimek</label>
                    <input
                      id="lastName"
                      type="text"
                      placeholder="Tvoj priimek"
                      value={lastName}
                      onChange={(event) =>
                        setLastName(event.target.value)
                      }
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    E-poštni naslov
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="ime@email.com"
                    value={email}
                    onChange={(event) =>
                      setEmail(event.target.value)
                    }
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Geslo</label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Najmanj 8 znakov"
                    value={password}
                    onChange={(event) =>
                      setPassword(event.target.value)
                    }
                    minLength={8}
                    required
                  />
                  <span className="input-hint">
                    Geslo mora vsebovati vsaj 8 znakov.
                  </span>
                </div>

                <button type="submit" disabled={loading}>
                  {loading ? "Ustvarjanje računa ..." : "Ustvari račun"}
                  <span>→</span>
                </button>

                <div className="login-link">
                  <span>Že imaš račun?</span>
                  <a href="/login">Prijavi se</a>
                </div>

                {message && (
                  <p className="form-message" role="status">
                    {message}
                  </p>
                )}
              </form>

              <p className="form-note">
                Z veseljem te pričakujemo v svetu UNIKAT.
              </p>
            </>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
