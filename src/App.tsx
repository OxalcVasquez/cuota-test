import { useState } from 'react';
import { calcularCuota } from './cuota';

export default function App() {
  const [monto, setMonto] = useState('');
  const [tea, setTea] = useState('');
  const [meses, setMeses] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = () => {
    try {
      const cuota = calcularCuota(Number(monto), Number(tea), Number(meses));
      setResultado(`Cuota mensual: S/ ${cuota.toFixed(2)}`);
    } catch (e) {
      setResultado((e as Error).message);
    }
  };

  return (
    <main style={{ maxWidth: 360, margin: '40px auto', fontFamily: 'sans-serif', display: 'grid', gap: 12 }}>
      <h1>CuotaApp</h1>
      <input type="number" placeholder="Monto (S/)" value={monto} onChange={(e) => setMonto(e.target.value)} />
      <input type="number" placeholder="TEA (%)" value={tea} onChange={(e) => setTea(e.target.value)} />
      <input type="number" placeholder="Plazo (meses)" value={meses} onChange={(e) => setMeses(e.target.value)} />
      <button onClick={calcular}>Calcular</button>
      <p>{resultado}</p>
    </main>
  );
}
