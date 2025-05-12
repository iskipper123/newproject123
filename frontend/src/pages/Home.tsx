import React from 'react'
import { motion } from 'framer-motion'

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="home-page bg-black text-white min-h-screen overflow-hidden font-sans" // Added font-sans
    >
      {/* Header Section */}
      <header className="site-header fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-filter backdrop-blur-lg text-white py-4 shadow-lg">
        {' '}
        {/* Fixed header, blur effect */}
        <div className="container mx-auto flex justify-between items-center px-4 lg:px-8">
          {' '}
          {/* Increased horizontal padding on large screens */}
          <div className="logo text-2xl font-bold text-blue-500">
            Logitect
          </div>{' '}
          {/* Applied accent color */}
          <nav className="hidden lg:block">
            {' '}
            {/* Hide on small screens */}
            <ul className="flex space-x-6">
              {' '}
              {/* Increased spacing */}
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 transition duration-300"
                >
                  Acasă
                </a>
              </li>{' '}
              {/* Added hover effect */}
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 transition duration-300"
                >
                  Servicii
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 transition duration-300"
                >
                  Portofoliu
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 transition duration-300"
                >
                  Prețuri
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 transition duration-300"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-500 transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 hidden lg:block">
            Solicită Ofertă
          </button>{' '}
          {/* Styled button, hide on small screens */}
          {/* Mobile menu button - add implementation later */}
          <div className="lg:hidden">
            {/* Icon for mobile menu */}
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </div>
        </div>
      </header>
      {/* Add padding to body to prevent content from being hidden by fixed header */}
      <div className="pt-16">
        {' '}
        {/* Adjust padding based on header height */}
        {/* Hero Section */}
        <section className="hero-section bg-gradient-to-b from-black to-gray-900 text-white py-20 md:py-32 flex items-center justify-center min-h-screen-minus-header">
          {' '}
          {/* Gradient background, centered content, min height */}
          <div className="container mx-auto text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Soluții Premium de Dezvoltare Web
            </h1>{' '}
            {/* Larger text, tighter leading */}
            <h2 className="text-2xl md:text-4xl mb-6 text-gray-300 font-semibold">
              Creăm Excelență Digitală
            </h2>{' '}
            {/* Slightly lighter text, semibold */}
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-400">
              {' '}
              {/* Wider max-width, lighter gray */}
              Transformăm idei în experiențe captivante prin design elegant și
              dezvoltare de ultimă generație.
            </p>
            <div className="flex justify-center space-x-4 mb-12">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 text-lg shadow-lg">
                Începe acum
              </button>{' '}
              {/* Styled button with shadow */}
              <button className="border border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-black transition duration-300 text-lg shadow-lg">
                Vezi Portofoliu
              </button>{' '}
              {/* Styled secondary button with shadow */}
            </div>
            <div className="client-logos flex justify-center items-center flex-wrap gap-8 opacity-75 mt-20">
              {' '}
              {/* Added gap, wrap, opacity, increased top margin */}
              {/* Replace with actual image tags */}
              <div className="logo-placeholder text-gray-500 text-sm">
                Logo client
              </div>{' '}
              {/* Darker gray */}
              <div className="logo-placeholder text-gray-500 text-sm">
                Logo client
              </div>
              <div className="logo-placeholder text-gray-500 text-sm">
                Logo client
              </div>
              <div className="logo-placeholder text-gray-500 text-sm">
                Logo client
              </div>
            </div>
          </div>
        </section>
        {/* Services Section */}
        <section className="services-section py-20 md:py-32 bg-black text-white">
          {' '}
          {/* Dark background */}
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Servicii Complete
            </h2>
            <p className="text-lg md:text-xl text-center mb-16 max-w-4xl mx-auto text-gray-400">
              {' '}
              {/* Wider max-width, lighter gray */}
              Soluții digitale complete concepute pentru a îmbunătăți prezența
              online și a stimula creșterea afacerii.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="service-item p-6 border border-gray-700 rounded-lg bg-gray-900 hover:border-blue-500 transition duration-300 transform hover:scale-105">
                {' '}
                {/* Styled card with hover effect */}
                <h3 className="text-xl font-semibold mb-4 text-blue-500">
                  Dezvoltare Web
                </h3>{' '}
                {/* Accent color */}
                <p className="mb-4 text-gray-300">
                  Dezvoltare full-stack cu framework-uri moderne și arhitectură
                  scalabilă pentru afaceri de toate dimensiunile.
                </p>
                <ul className="list-disc list-inside mb-6 text-gray-300">
                  <li>Aplicații web personalizate</li>
                  <li>Soluții e-commerce avansate</li>
                  <li>Implementare CMS și sisteme de administrare</li>
                </ul>
                <a href="#" className="text-blue-500 hover:underline">
                  Află mai multe
                </a>{' '}
                {/* Accent color */}
              </div>
              <div className="service-item p-6 border border-gray-700 rounded-lg bg-gray-900 hover:border-blue-500 transition duration-300 transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-4 text-blue-500">
                  Design UI/UX
                </h3>
                <p className="mb-4 text-gray-300">
                  Experiențe de design premium care îmbină estetica с
                  funcționalitatea pentru un engagement sporit al
                  utilizatorilor.
                </p>
                <ul className="list-disc list-inside mb-6 text-gray-300">
                  <li>Design interfață utilizator</li>
                  <li>Prototipuri interactive</li>
                  <li>Identitate vizuală</li>
                </ul>
                <a href="#" className="text-blue-500 hover:underline">
                  Află mai multe
                </a>
              </div>
              <div className="service-item p-6 border border-gray-700 rounded-lg bg-gray-900 hover:border-blue-500 transition duration-300 transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-4 text-blue-500">
                  SEO & Optimizare
                </h3>
                <p className="mb-4 text-gray-300">
                  Strategii complete de SEO pentru creșterea vizibilității și
                  optimizarea indicatorilor de performanță.
                </p>
                <ul className="list-disc list-inside mb-6 text-gray-300">
                  <li>Audit tehnic SEO</li>
                  <li>Optimizare viteză</li>
                  <li>Strategie de conținut</li>
                </ul>
                <a href="#" className="text-blue-500 hover:underline">
                  Află mai multe
                </a>
              </div>
              <div className="service-item p-6 border border-gray-700 rounded-lg bg-gray-900 hover:border-blue-500 transition duration-300 transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-4 text-blue-500">
                  Marketing Digital
                </h3>
                <p className="mb-4 text-gray-300">
                  Soluții de marketing bazate pe date pentru a dezvolta brandul
                  și a atrage clienți valoroși.
                </p>
                <ul className="list-disc list-inside mb-6 text-gray-300">
                  <li>Optimizare conversie</li>
                  <li>Configurare analytics</li>
                  <li>Automatizare marketing</li>
                </ul>
                <a href="#" className="text-blue-500 hover:underline">
                  Află mai multe
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Methodology Section */}
        <section className="methodology-section bg-gray-900 text-white py-20 md:py-32">
          {' '}
          {/* Darker background */}
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Metodologia Noastră
            </h2>
            <h3 className="text-2xl md:text-3xl text-center mb-16 text-gray-300 font-semibold">
              Procesul Nostru de Lucru
            </h3>{' '}
            {/* Semibold */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {' '}
              {/* Changed to 4 columns on large screens */}
              <div className="methodology-step p-6 border border-gray-700 rounded-lg bg-black">
                {' '}
                {/* Styled step card */}
                <div className="step-number text-blue-500 text-5xl font-bold mb-4">
                  01
                </div>{' '}
                {/* Accent color */}
                <h4 className="text-xl font-semibold mb-4">
                  Analiză & Strategie
                </h4>
                <p className="text-gray-300">
                  Analizăm nevoile afacerii tale și definim obiectivele clare
                  pentru prezența ta online. Creăm o strategie personalizată
                  pentru a atinge aceste obiective.
                </p>
              </div>
              <div className="methodology-step p-6 border border-gray-700 rounded-lg bg-black">
                <div className="step-number text-blue-500 text-5xl font-bold mb-4">
                  02
                </div>
                <h4 className="text-xl font-semibold mb-4">
                  Design & Prototipare
                </h4>
                <p className="text-gray-300">
                  Dezvoltăm wireframe-uri și prototipuri interactive care
                  reflectă identitatea brandului tău și oferă o experiență
                  optimă utilizatorilor.
                </p>
              </div>
              <div className="methodology-step p-6 border border-gray-700 rounded-lg bg-black">
                <div className="step-number text-blue-500 text-5xl font-bold mb-4">
                  03
                </div>
                <h4 className="text-xl font-semibold mb-4">
                  Dezvoltare & Implementare
                </h4>
                <p className="text-gray-300">
                  Transformăm designul în cod curat și eficient, implementând
                  toate funcționalitățile necesare și asigurând compatibilitatea
                  с toate dispozitivele.
                </p>
              </div>
              <div className="methodology-step p-6 border border-gray-700 rounded-lg bg-black">
                <div className="step-number text-blue-500 text-5xl font-bold mb-4">
                  04
                </div>
                <h4 className="text-xl font-semibold mb-4">
                  Testare & Lansare
                </h4>
                <p className="text-gray-300">
                  Testăm riguros toate aspectele site-ului pentru a asigura
                  performanță optimă și securitate maximă înainte de lansare.
                </p>
              </div>
            </div>
            <p className="text-center text-lg md:text-xl mt-12 max-w-3xl mx-auto text-gray-400">
              {' '}
              {/* Lighter gray */}
              Comunicarea transparentă este esențială în fiecare etapă,
              asigurându-ne că rămâi informat și implicat pe tot parcursul
              dezvoltării proiectului tău.
            </p>
          </div>
        </section>
        {/* Statistics Section */}
        <section className="statistics-section py-20 md:py-32 bg-black text-white">
          {' '}
          {/* Dark background */}
          <div className="container mx-auto text-center px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Cifre care Vorbesc
            </h2>
            <h3 className="text-2xl md:text-3xl mb-16 text-gray-300 font-semibold">
              Rezultatele Noastre
            </h3>{' '}
            {/* Semibold */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {' '}
              {/* Changed to 4 columns on large screens */}
              <div className="stat-item">
                <div className="text-blue-500 text-5xl md:text-6xl font-bold">
                  97%
                </div>{' '}
                {/* Accent color, larger text */}
                <div className="text-lg md:text-xl font-semibold mt-2">
                  Satisfacție Clienți
                </div>
                <p className="text-gray-300">
                  Clienți mulțumiți care recomandă serviciile noastre
                </p>
              </div>
              <div className="stat-item">
                <div className="text-blue-500 text-5xl md:text-6xl font-bold">
                  15+
                </div>
                <div className="text-lg md:text-xl font-semibold mt-2">
                  Ani Experiență
                </div>
                <p className="text-gray-300">
                  În dezvoltarea soluțiilor digitale de top
                </p>
              </div>
              <div className="stat-item">
                <div className="text-blue-500 text-5xl md:text-6xl font-bold">
                  300+
                </div>
                <div className="text-lg md:text-xl font-semibold mt-2">
                  Proiecte Finalizate
                </div>
                <p className="text-gray-300">
                  Pentru clienți din diverse industrii
                </p>
              </div>
              <div className="stat-item">
                <div className="text-blue-500 text-5xl md:text-6xl font-bold">
                  85%
                </div>
                <div className="text-lg md:text-xl font-semibold mt-2">
                  Clienți Recurenți
                </div>
                <p className="text-gray-300">
                  Se întorc pentru proiecte noi sau extinderi
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Why Choose Us Section */}
        <section className="why-choose-us-section bg-gray-900 text-white py-20 md:py-32">
          {' '}
          {/* Darker background */}
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              De Ce Să Ne Alegi
            </h2>
            <h3 className="text-2xl md:text-3xl text-center mb-16 text-gray-300 font-semibold">
              Îți Ridicăm Prezența Digitală
            </h3>{' '}
            {/* Semibold */}
            <p className="text-lg md:text-xl text-center mb-12 max-w-3xl mx-auto text-gray-400">
              {' '}
              {/* Lighter gray */}
              Cu peste un deceniu de experiență în crearea de experiențe
              digitale premium, combinăm expertiza tehnică cu designul inovator
              pentru a oferi soluții care se remarcă în peisajul competitiv de
              astăzi.
            </p>
            <div className="text-center mb-12">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 text-lg shadow-lg">
                Descoperă abordarea noastră
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="feature-item p-6 border border-gray-700 rounded-lg bg-black hover:border-blue-500 transition duration-300 transform hover:scale-105">
                {' '}
                {/* Styled feature card with hover */}
                <h4 className="text-xl font-semibold mb-4 text-blue-500">
                  Calitate Premium
                </h4>{' '}
                {/* Accent color */}
                <p className="text-gray-300">
                  Fiecare proiect este creat cu atenție meticuloasă la detalii,
                  asigurând calitate și performanță excepțională pe toate
                  dispozitivele.
                </p>
              </div>
              <div className="feature-item p-6 border border-gray-700 rounded-lg bg-black hover:border-blue-500 transition duration-300 transform hover:scale-105">
                <h4 className="text-xl font-semibold mb-4 text-blue-500">
                  Livrare la Timp
                </h4>
                <p className="text-gray-300">
                  Respectarea strictă a termenelor limită с un management
                  transparent al proiectelor menține obiectivele afacerii tale
                  pe drumul cel bun.
                </p>
              </div>
              <div className="feature-item p-6 border border-gray-700 rounded-lg bg-black hover:border-blue-500 transition duration-300 transform hover:scale-105">
                <h4 className="text-xl font-semibold mb-4 text-blue-500">
                  Abordare Personalizată
                </h4>
                <p className="text-gray-300">
                  Fiecare client primește o strategia adaptată nevoilor
                  specifice ale afacerii, obiectivelor și publicului țintă.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Recent Projects Section */}
        <section className="recent-projects-section py-20 md:py-32 bg-black text-white">
          {' '}
          {/* Dark background */}
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Proiecte Recente
            </h2>
            <h3 className="text-2xl md:text-3xl text-center mb-16 text-gray-300 font-semibold">
              Lucrări de Care Suntem Mândri
            </h3>{' '}
            {/* Semibold */}
            <div className="text-center mb-12">
              <button className="border border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-black transition duration-300 text-lg shadow-lg">
                Vezi toate proiectele
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="project-item border border-gray-700 rounded-lg overflow-hidden bg-gray-900 hover:border-blue-500 transition duration-300 transform hover:scale-105">
                {' '}
                {/* Styled project card with hover */}
                {/* Replace with actual image tag */}
                <div className="project-image h-48 bg-gray-700 flex items-center justify-center text-gray-400">
                  Image Placeholder
                </div>{' '}
                {/* Darker placeholder */}
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">
                    Eco Living - eCommerce
                  </h4>
                  <p className="text-blue-500 mb-4">
                    Dezvoltare Web & eCommerce
                  </p>{' '}
                  {/* Accent color */}
                  <p className="mb-4 text-gray-300">
                    Magazin online complet pentru produse eco, cu sistem de
                    plată integrat și optimizare SEO
                  </p>
                  <a href="#" className="text-blue-500 hover:underline">
                    Vezi detalii
                  </a>{' '}
                  {/* Accent color */}
                </div>
              </div>
              <div className="project-item border border-gray-700 rounded-lg overflow-hidden bg-gray-900 hover:border-blue-500 transition duration-300 transform hover:scale-105">
                {/* Replace with actual image tag */}
                <div className="project-image h-48 bg-gray-700 flex items-center justify-center text-gray-400">
                  Image Placeholder
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">
                    Business Consulting Group
                  </h4>
                  <p className="text-blue-500 mb-4">
                    Design UI/UX & Dezvoltare
                  </p>
                  <p className="mb-4 text-gray-300">
                    Website corporativ с design premium și sistem CMS
                    personalizat
                  </p>
                  <a href="#" className="text-blue-500 hover:underline">
                    Vezi detalii
                  </a>
                </div>
              </div>
              <div className="project-item border border-gray-700 rounded-lg overflow-hidden bg-gray-900 hover:border-blue-500 transition duration-300 transform hover:scale-105">
                {/* Replace with actual image tag */}
                <div className="project-image h-48 bg-gray-700 flex items-center justify-center text-gray-400">
                  Image Placeholder
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">
                    Health Connect App
                  </h4>
                  <p className="text-blue-500 mb-4">Aplicație Web & Mobile</p>
                  <p className="mb-4 text-gray-300">
                    Platformă medicală de programări și consultații online с
                    interfață intuitivă
                  </p>
                  <a href="#" className="text-blue-500 hover:underline">
                    Vezi detalii
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section className="testimonials-section bg-gray-900 text-white py-20 md:py-32">
          {' '}
          {/* Darker background */}
          <div className="container mx-auto text-center px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Testimoniale Clienți
            </h2>
            <p className="text-lg md:text-xl mb-16 max-w-2xl mx-auto text-gray-400">
              {' '}
              {/* Lighter gray */}
              Află ce spun clienții noștri despre experiența de a lucra с нами.
            </p>
            <div className="testimonial-card max-w-2xl mx-auto p-8 border border-gray-700 rounded-lg shadow-lg bg-black">
              {' '}
              {/* Styled testimonial card */}
              <p className="text-lg italic mb-6 text-gray-300">
                "Colaborarea cu această echipă ne-a transformat complet prezența
                online. Atenția lor la detalii și abordarea strategică a
                redesign-ului site-ului nostru a dus la o creștere a
                conversiilor cu 45% în doar trei luni."
              </p>
              <div className="author-info">
                <div className="font-semibold text-white">
                  Alexandra Richards
                </div>
                <div className="text-gray-400">CEO, TechVision</div>{' '}
                {/* Lighter gray for title */}
              </div>
            </div>
            {/* Add navigation arrows here if needed */}
          </div>
        </section>
        {/* Call to Action Section */}
        <section className="cta-section py-20 md:py-32 text-center bg-black text-white">
          {' '}
          {/* Dark background */}
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Transformă-ți Viziunea în Realitate Digitală
            </h2>
            <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-400">
              {' '}
              {/* Lighter gray */}
              Hai să colaborăm pentru a crea experiențe digitale care îți
              propulsează afacerea spre succes.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 text-lg shadow-lg">
                Contactează-ne
              </button>
              <button className="border border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-black transition duration-300 text-lg shadow-lg">
                Începe acum
              </button>
            </div>
          </div>
        </section>
        {/* Footer Section */}
        <footer className="site-footer bg-gray-900 text-white py-12 md:py-16">
          {' '}
          {/* Darker background, increased padding */}
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-8">
            <div className="footer-about">
              <div className="logo text-2xl font-bold mb-4 text-blue-500">
                Logitect
              </div>{' '}
              {/* Accent color */}
              <p className="mb-4 text-gray-300">
                Soluții digitale premium și dezvoltare web realizate cu precizie
                și expertiză.
              </p>
              <div className="social-links flex space-x-4">
                {/* Replace with actual social icons/links */}
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-500 transition duration-300"
                >
                  Twitter
                </a>{' '}
                {/* Styled social links */}
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-500 transition duration-300"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-500 transition duration-300"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="footer-links">
              <h5 className="text-xl font-semibold mb-4">Companie</h5>
              <ul>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-500 transition duration-300"
                  >
                    Despre noi
                  </a>
                </li>{' '}
                {/* Styled footer links */}
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-500 transition duration-300"
                  >
                    Servicii
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-500 transition duration-300"
                  >
                    Portofoliu
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-500 transition duration-300"
                  >
                    Prețuri
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-500 transition duration-300"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <h5 className="text-xl font-semibold mb-4">Resurse</h5>
              <ul>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-500 transition duration-300"
                  >
                    Proces
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-500 transition duration-300"
                  >
                    Întrebări frecvente
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-500 transition duration-300"
                  >
                    Termeni
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-500 transition duration-300"
                  >
                    Confidențialitate
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-contact">
              <h5 className="text-xl font-semibold mb-4">Contact</h5>
              <p className="mb-2 text-gray-300">
                123 Bulevardul Digital, Sectorul Tech
              </p>
              <p className="mb-2 text-gray-300">+40 (755) 555-555</p>
              <p className="mb-2 text-gray-300">contact@logitect.ro</p>
            </div>
          </div>
          <div className="container mx-auto text-center mt-8 border-t border-gray-700 pt-8 px-4 lg:px-8">
            {' '}
            {/* Added border and padding */}
            <p className="text-gray-400">
              © 2025 Logitect. Toate drepturile rezervate.
            </p>{' '}
            {/* Lighter gray */}
            <div className="footer-bottom-links mt-2 space-x-4 text-gray-400">
              {' '}
              {/* Lighter gray */}
              <a
                href="#"
                className="hover:text-blue-500 transition duration-300"
              >
                Termeni și Condiții
              </a>
              <a
                href="#"
                className="hover:text-blue-500 transition duration-300"
              >
                Politica de Confidențialitate
              </a>
              <a
                href="#"
                className="hover:text-blue-500 transition duration-300"
              >
                Politica de Cookie-uri
              </a>
            </div>
          </div>
        </footer>
      </div>{' '}
      {/* Close padding div */}
    </motion.div>
  )
}

export default Home
