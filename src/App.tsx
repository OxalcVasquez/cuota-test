import { useState } from 'react';
import { calcularCuota } from './cuota';

export default function App() {
  const [monto, setMonto] = useState('');
  const [tea, setTea] = useState('');
  const [meses, setMeses] = useState('');
  const [cuota, setCuota] = useState<number | null>(null);
  const [error, setError] = useState('');

  const calcular = () => {
    try {
      setCuota(calcularCuota(Number(monto), Number(tea), Number(meses)));
      setError('');
    } catch (e) {
      setCuota(null);
      setError((e as Error).message);
    }
  };

  const campos = [
    { label: 'Monto (S/)', value: monto, set: setMonto },
    { label: 'TEA (%)', value: tea, set: setTea },
    { label: 'Plazo (meses)', value: meses, set: setMeses },
  ];

  return (
    <main className="app">
      <div>
        <h1 className="title">CuotaApp</h1>
        <p className="subtitle">Método francés · TEA</p>
      </div>
      {campos.map(({ label, value, set }) => (
        <label key={label} className="field">
          <span className="label">{label}</span>
          <input className="input" type="number" value={value} onChange={(e) => set(e.target.value)} />
        </label>
      ))}
      <button className="button" onClick={calcular}>Calcular</button>
      {error && <p className="error">{error}</p>}
      {cuota !== null && (
        <div className="card">
          <span className="label">Cuota mensual</span>
          <span className="amount">S/ {cuota.toFixed(2)}</span>
        </div>
      )}
    </main>
  );
}
