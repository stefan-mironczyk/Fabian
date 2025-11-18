import './Version1.css'

function Version1() {
  return (
    <div className="v1-body">
      <div className="v1-whiteboard">
        <div className="v1-sticky-note">
          <h3>🎯 Ziele</h3>
          <ul>
            <li>Modern & professionell</li>
            <li>Klare Struktur</li>
            <li>Mobile-first</li>
            <li>Conversion-fokus</li>
          </ul>
        </div>

        <div className="v1-header">
          <h1>🚀 Website Relaunch - Konzept</h1>
          <p className="v1-date">Meeting Notizen | November 2025</p>
        </div>

        <div className="v1-main-structure">
          <div className="v1-section-box v1-home">
            <div className="v1-section-icon">🏠</div>
            <h2>1. Startseite</h2>
            <ul>
              <li>Hero-Section</li>
              <li>Positionierung</li>
              <li>Schnellzugang</li>
              <li>Vertrauenselemente</li>
            </ul>
          </div>

          <div className="v1-section-box v1-solutions">
            <div className="v1-section-icon">🔧</div>
            <h2>2. Lösungen</h2>
            <ul>
              <li>Entstaubungstechnik</li>
              <li>Oberflächentechnik</li>
              <li>Wärmerückgewinnung</li>
              <li>Kabinenbau</li>
            </ul>
          </div>

          <div className="v1-section-box v1-company">
            <div className="v1-section-icon">🏢</div>
            <h2>3. Unternehmen</h2>
            <ul>
              <li>Über uns / Geschichte</li>
              <li>Referenzen</li>
              <li>Social Proof</li>
              <li>Team</li>
            </ul>
          </div>

          <div className="v1-section-box v1-career">
            <div className="v1-section-icon">👔</div>
            <h2>4. Karriere</h2>
            <ul>
              <li>Stellenangebote</li>
              <li>Easy Apply</li>
              <li>Unternehmenskultur</li>
            </ul>
          </div>

          <div className="v1-section-box v1-service">
            <div className="v1-section-icon">🛠️</div>
            <h2>5. Service</h2>
            <ul>
              <li>Wartung & Reparatur</li>
              <li>Ersatzteile</li>
              <li>Notfall-Kontakt</li>
            </ul>
          </div>

          <div className="v1-section-box v1-contact">
            <div className="v1-section-icon">📞</div>
            <h2>6. Kontakt</h2>
            <ul>
              <li>Formular</li>
              <li>Ansprechpartner</li>
              <li>Anfahrt / Karte</li>
            </ul>
          </div>
        </div>

        <div className="v1-process-section">
          <h2>⭐ Der 5-Step-Prozess (Signature Element)</h2>
          <p style={{ textAlign: 'center', marginBottom: '30px', fontSize: '1.1em', color: '#555' }}>
            <strong>Wird auf ALLEN Produktseiten identisch eingebunden</strong>
          </p>

          <div className="v1-process-steps">
            <div className="v1-step">
              <div className="v1-step-number">1</div>
              <div className="v1-step-icon">📋</div>
              <h3>Analyse & Planung</h3>
              <p>Bedarfsanalyse vor Ort</p>
            </div>

            <div className="v1-step">
              <div className="v1-step-number">2</div>
              <div className="v1-step-icon">✏️</div>
              <h3>Konstruktion</h3>
              <p>CAD-Planung & Auslegung</p>
            </div>

            <div className="v1-step">
              <div className="v1-step-number">3</div>
              <div className="v1-step-icon">🏭</div>
              <h3>Fertigung</h3>
              <p>Im eigenen Werk</p>
            </div>

            <div className="v1-step">
              <div className="v1-step-number">4</div>
              <div className="v1-step-icon">🔧</div>
              <h3>Montage</h3>
              <p>Installation & Einweisung</p>
            </div>

            <div className="v1-step">
              <div className="v1-step-number">5</div>
              <div className="v1-step-icon">🛡️</div>
              <h3>Service</h3>
              <p>Wartung & Support</p>
            </div>
          </div>
        </div>

        <div className="v1-tech-section">
          <h3>📥 Technische Downloads (NICHT in Navigation!)</h3>
          <p style={{ marginBottom: '20px', color: '#555' }}>Als PDF-Downloads auf Produktseiten einbinden</p>
          <div className="v1-tech-badges">
            <div className="v1-badge">📄 Filteranlagen</div>
            <div className="v1-badge">🌀 Ventilatoren</div>
            <div className="v1-badge">🔩 Rohrteile</div>
            <div className="v1-badge">📊 Datenblätter</div>
          </div>
        </div>

        <div className="v1-footer-notes">
          <div className="v1-note-card">
            <h4>✅ Struktur-Vorteile</h4>
            <p>Max. 2 Ebenen tief, klare Hierarchie, mobile-optimiert, SEO-freundlich</p>
          </div>

          <div className="v1-note-card">
            <h4>🎯 Marketing-Fokus</h4>
            <p>Technische Details ausgelagert, visuelle Produktdarstellung, Conversion-CTAs</p>
          </div>

          <div className="v1-note-card">
            <h4>🔄 Konsistenz</h4>
            <p>5-Step-Prozess als Wiedererkennungsmerkmal auf allen Produktseiten</p>
          </div>

          <div className="v1-note-card">
            <h4>📊 Umfang</h4>
            <p>17 Hauptseiten, 6 Nav-Bereiche, 4 PDF-Downloads, 3 Pflichtseiten</p>
          </div>
        </div>

        <div className="v1-footer-banner">
          <h2 style={{ marginBottom: '15px' }}>🎨 Bereit für die Umsetzung!</h2>
          <p style={{ fontSize: '1.1em', opacity: 0.9 }}>Klare Struktur • Professionell • Conversion-optimiert</p>
        </div>
      </div>
    </div>
  )
}

export default Version1
