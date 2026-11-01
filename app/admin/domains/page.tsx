export default function AdminDomainsPage() {
  const domains = [
    { domain: 'links.jane.com', owner: 'jane@demo.com', status: 'Active', dns: 'A record / CNAME' },
    { domain: 'creator.citra.id', owner: 'citra@demo.com', status: 'Pending', dns: 'CNAME + SSL' },
    { domain: 'shop.nando.dev', owner: 'nando@demo.com', status: 'Rejected', dns: 'DNS mismatch' }
  ];

  return (
    <main className="container admin-shell wide-admin">
      <div className="content-panel full-width-panel">
        <header className="content-header">
          <h1>Admin Domains</h1>
        </header>

        <table className="data-table">
          <thead>
            <tr>
              <th>Domain</th>
              <th>Pemilik</th>
              <th>Status</th>
              <th>DNS</th>
            </tr>
          </thead>
          <tbody>
            {domains.map((row) => (
              <tr key={row.domain}>
                <td>{row.domain}</td>
                <td>{row.owner}</td>
                <td>{row.status}</td>
                <td>{row.dns}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
