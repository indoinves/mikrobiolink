export default function PublicBioPage() {
  return (
    <main className="bio-shell container">
      <header className="bio-header">
        <div className="bio-avatar" />
        <div>
          <h1>Jane Creator</h1>
          <p>Creator • Product • Community</p>
        </div>
        <button className="btn btn-primary">Bagikan Halaman</button>
      </header>

      <section className="bio-content">
        <button className="bio-link">Portfolio</button>
        <button className="bio-link">Shop</button>
        <button className="bio-link">Newsletter</button>
        <button className="bio-link">Youtube</button>
      </section>
    </main>
  );
}
