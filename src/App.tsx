import { useState } from 'react'
import Version1 from './components/Version1'
import Version2 from './components/Version2'

function App() {
  const [activeVersion, setActiveVersion] = useState<1 | 2>(1)

  return (
    <div style={{ minHeight: '100vh' }}>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '2px solid #e0e0e0',
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
      }}>
        <span style={{
          fontWeight: 600,
          fontSize: '14px',
          color: '#555',
          letterSpacing: '0.5px'
        }}>
          Version wählen:
        </span>
        <button
          onClick={() => setActiveVersion(1)}
          style={{
            padding: '10px 24px',
            fontSize: '14px',
            fontWeight: 600,
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            background: activeVersion === 1 ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#f5f5f5',
            color: activeVersion === 1 ? 'white' : '#666',
            transition: 'all 0.3s ease',
            boxShadow: activeVersion === 1 ? '0 4px 12px rgba(102, 126, 234, 0.3)' : 'none',
          }}
        >
          Version 1 (Bunt)
        </button>
        <button
          onClick={() => setActiveVersion(2)}
          style={{
            padding: '10px 24px',
            fontSize: '14px',
            fontWeight: 600,
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            background: activeVersion === 2 ? 'linear-gradient(135deg, #2C5F8D 0%, #1e4a6d 100%)' : '#f5f5f5',
            color: activeVersion === 2 ? 'white' : '#666',
            transition: 'all 0.3s ease',
            boxShadow: activeVersion === 2 ? '0 4px 12px rgba(44, 95, 141, 0.3)' : 'none',
          }}
        >
          Version 2 (Blau)
        </button>
      </div>

      <div style={{ paddingTop: '80px' }}>
        {activeVersion === 1 ? <Version1 /> : <Version2 />}
      </div>
    </div>
  )
}

export default App
