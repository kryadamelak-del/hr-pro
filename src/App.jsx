// Kompletny szablon strony React + Vite + Tailwind CSS
// Możesz użyć tego kodu w StackBlitz lub jako lokalny projekt React

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <header className="bg-white shadow-md py-6 px-4 md:px-12">
        <h1 className="text-3xl font-bold">HR Pro Solutions</h1>
        <p className="text-sm text-gray-600">Kompleksowe usługi kadrowo-płacowe dla biznesu B2B</p>
      </header>

      <main className="px-4 md:px-12 py-10">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Kim jesteśmy?</h2>
          <p>
            Jesteśmy zespołem ekspertów HR z doświadczeniem w obsłudze firm każdej wielkości.
            Naszą misją jest zdjęcie z Twoich barków obowiązków kadrowo-płacowych i zapewnienie Ci pełnej zgodności z przepisami.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Nasze usługi</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Outsourcing kadr i płac (pełna obsługa)</li>
            <li>Prowadzenie dokumentacji pracowniczej</li>
            <li>Zgłoszenia i rozliczenia z ZUS</li>
            <li>Wsparcie PPK, urlopy, L4, PIT-11</li>
            <li>Audyt dokumentacji HR</li>
            <li>Szkolenia i doradztwo z zakresu prawa pracy</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Dla kogo?</h2>
          <p>
            Obsługujemy klientów B2B: jednoosobowe działalności, startupy, firmy z sektora MŚP oraz większe organizacje bez własnego działu HR.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Opinie klientów</h2>
          <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-700">
            "Wreszcie mam święty spokój z kadrami. Polecam każdemu przedsiębiorcy!" – Anna, właścicielka agencji marketingowej
          </blockquote>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Skontaktuj się z nami</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Imię i nazwisko"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Adres e-mail"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <textarea
              placeholder="W czym możemy pomóc?"
              className="w-full p-2 border border-gray-300 rounded h-32"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Wyślij wiadomość
            </button>
          </form>
        </section>
      </main>

      <footer className="bg-white text-center text-sm text-gray-500 py-6">
        &copy; 2025 HR Pro Solutions – Wszystkie prawa zastrzeżone.
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
