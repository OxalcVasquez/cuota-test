import { calcularCuota } from './cuota';

describe('calcularCuota', () => {
  it('E1: 10000 al 30% en 12 meses', () => expect(calcularCuota(10000, 30, 12)).toBe(957.86));
  it('E2: 5000 al 45% en 6 meses', () => expect(calcularCuota(5000, 45, 6)).toBe(927.42));
  it('E3: 3000 al 35% en 24 meses', () => expect(calcularCuota(3000, 35, 24)).toBe(168.34));
  it('E4: tasa 0%', () => expect(calcularCuota(10000, 0, 12)).toBe(833.33));
  it('E5: monto 0', () => expect(() => calcularCuota(0, 30, 12)).toThrow('Monto inválido'));
  it('E6: tasa negativa', () => expect(() => calcularCuota(10000, -5, 12)).toThrow('Tasa inválida'));
  it('E7: plazo 0', () => expect(() => calcularCuota(10000, 30, 0)).toThrow('Plazo inválido'));
  it('E8: plazo no entero', () => expect(() => calcularCuota(10000, 30, 6.5)).toThrow('Plazo inválido'));
});
