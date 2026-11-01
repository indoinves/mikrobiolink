export default function PagePublicProfile({ params }: { params: { username: string } }) {
  const profiles: Record<string, any> = {
    janecreator: {
      name: 'Jane Creator',
      bio: 'Product designer, content creator, and digital storyteller.',
      buttons: ['Portfolio', 'Shop', 'Newsletter', 'YouTube']
    },
    rafiq: {
      name: 'Rafiq',
      bio: 'Photographer and visual storyteller for brands.',
      buttons: ['Gallery', 'Booking', 'Instagram', 'Portfolio']
    },
    nina: {
      name: 'Nina',
      bio: 'Marketing strategist helping founders grow with clarity.',
      buttons: ['Consulting', 'Book Call', 'LinkedIn', 'Newsletter']
    }
  };

  const profile = profiles[params.username] || profiles.janecreator;

  return (
    <main className="bio-shell container">
      <header className="bio-header">
        <div className="bio-avatar" />
        <div>
          <h1>{profile.name}</h1>
          <p>{profile.bio}</p>
        </div>
        <button className="btn btn-primary">Bagikan Halaman</button>
      </header>

      <section className="bio-content">
        {profile.buttons.map((label: string) => (
          <button key={label} className="bio-link">{label}</button>
        ))}
      </section>
    </main>
  );
}
