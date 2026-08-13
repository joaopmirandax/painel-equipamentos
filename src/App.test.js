import { render, screen } from "@testing-library/react";
import App from "./App";

test("renderiza o título do painel", () => {
  render(<App />);
  const titulo = screen.getByText(/Visualizador de Equipamentos de Manufatura Inteligente/i);
  expect(titulo).toBeInTheDocument();
});

test("renderiza os cards de equipamentos", () => {
  render(<App />);
  const cardEsteira = screen.getByText(/Esteira Transportadora Inteligente/i);
  expect(cardEsteira).toBeInTheDocument();
});
