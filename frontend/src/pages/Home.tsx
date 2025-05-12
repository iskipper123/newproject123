import React from 'react'
import { motion } from 'framer-motion'

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="home-page" // Added a class for potential styling
    >
      {/* Header Section */}
      <header className="site-header">
        <div className="container mx-auto flex justify-between items-center py-4">
          <div className="logo">Logitect</div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#">Acasă</a>
              </li>
              <li>
                <a href="#">Servicii</a>
              </li>
              <li>
                <a href="#">Portofoliu</a>
              </li>
              <li>
                <a href="#">Prețuri</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <button className="btn-primary">Solicită Ofertă</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">
            Soluții Premium de Dezvoltare Web
          </h1>
          <h2 className="text-3xl mb-6">Creăm Excelență Digitală</h2>
          <p className="text-lg mb-8">
            Transformăm idei în experiențe captivante prin design elegant și
            dezvoltare de ultimă generație.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="btn-primary">Începe acum</button>
            <button className="btn-secondary">Vezi Portofoliu</button>
          </div>
          <div className="client-logos mt-12 flex justify-center space-x-8">
            {/* Replace with actual image tags */}
            <div className="logo-placeholder">Logo client</div>
            <div className="logo-placeholder">Logo client</div>
            <div className="logo-placeholder">Logo client</div>
            <div className="logo-placeholder">Logo client</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Servicii Complete
          </h2>
          <p className="text-xl text-center mb-16">
            Soluții digitale complete concepute pentru a îmbunătăți prezența
            online și a stimula creșterea afacerii.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="service-item p-6 border rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Dezvoltare Web</h3>
              <p className="mb-4">
                Dezvoltare full-stack cu framework-uri moderne și arhitectură
                scalabilă для afaceri de toate dimensiunile.
              </p>
              <ul className="list-disc list-inside mb-6">
                <li>Aplicații web personalizate</li>
                <li>Soluții e-commerce avansate</li>
                <li>Implementare CMS și sisteme de administrare</li>
              </ul>
              <a href="#" className="text-blue-600 hover:underline">
                Află mai multe
              </a>
            </div>
            <div className="service-item p-6 border rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Design UI/UX</h3>
              <p className="mb-4">
                Experiențe de design premium care îmbină estetica cu
                funcționalitatea pentru un engagement sporit al utilizatorilor.
              </p>
              <ul className="list-disc list-inside mb-6">
                <li>Design interfață utilizator</li>
                <li>Prototipuri interactive</li>
                <li>Identitate vizuală</li>
              </ul>
              <a href="#" className="text-blue-600 hover:underline">
                Află mai multe
              </a>
            </div>
            <div className="service-item p-6 border rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">SEO & Optimizare</h3>
              <p className="mb-4">
                Strategii complete de SEO pentru creșterea vizibilității și
                optimizarea indicatorilor de performanță.
              </p>
              <ul className="list-disc list-inside mb-6">
                <li>Audit tehnic SEO</li>
                <li>Optimizare viteză</li>
                <li>Strategie de conținut</li>
              </ul>
              <a href="#" className="text-blue-600 hover:underline">
                Află mai multe
              </a>
            </div>
            <div className="service-item p-6 border rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Marketing Digital</h3>
              <p className="mb-4">
                Soluții de marketing bazate pe date pentru a dezvolta brandul și
                a atrage clienți valoroși.
              </p>
              <ul className="list-disc list-inside mb-6">
                <li>Optimizare conversie</li>
                <li>Configurare analytics</li>
                <li>Automatizare marketing</li>
              </ul>
              <a href="#" className="text-blue-600 hover:underline">
                Află mai multe
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="methodology-section bg-gray-100 py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Metodologia Noastră
          </h2>
          <h3 className="text-3xl text-center mb-16">
            Procesul Nostru de Lucru
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="methodology-step">
              <div className="step-number text-blue-600 text-5xl font-bold mb-4">
                01
              </div>
              <h4 className="text-2xl font-semibold mb-4">
                Analiză & Strategie
              </h4>
              <p>
                Analizăm nevoile afacerii tale și definim obiectivele clare
                pentru prezența ta online. Creăm o strategie personalizată
                pentru a atinge aceste obiective.
              </p>
            </div>
            <div className="methodology-step">
              <div className="step-number text-blue-600 text-5xl font-bold mb-4">
                02
              </div>
              <h4 className="text-2xl font-semibold mb-4">
                Design & Prototipare
              </h4>
              <p>
                Dezvoltăm wireframe-uri și prototipuri interactive care reflectă
                identitatea brandului tău и oferă o experiență optimă
                utilizatorilor.
              </p>
            </div>
            <div className="methodology-step">
              <div className="step-number text-blue-600 text-5xl font-bold mb-4">
                03
              </div>
              <h4 className="text-2xl font-semibold mb-4">
                Dezvoltare & Implementare
              </h4>
              <p>
                Transformăm designul în cod curat și eficient, implementând
                toate funcționalitățile necesare și asigurând compatibilitatea
                cu toate dispozitivele.
              </p>
            </div>
            <div className="methodology-step">
              <div className="step-number text-blue-600 text-5xl font-bold mb-4">
                04
              </div>
              <h4 className="text-2xl font-semibold mb-4">Testare & Lansare</h4>
              <p>
                Testăm riguros toate aspectele site-ului pentru a asigura
                performanță optimă și securitate maximă înainte de lansare.
              </p>
            </div>
          </div>
          <p className="text-center text-xl mt-12">
            Comunicarea transparentă este esențială în fiecare etapă,
            asigurându-ne că rămâi informat și implicat pe tot parcursul
            dezvoltării proiectului tău.
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="statistics-section py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Cifre care Vorbesc</h2>
          <h3 className="text-3xl mb-16">Rezultatele Noastre</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="stat-item">
              <div className="text-blue-600 text-6xl font-bold">97%</div>
              <div className="text-xl font-semibold">Satisfacție Clienți</div>
              <p>Clienți mulțumiți care recomandă serviciile noastre</p>
            </div>
            <div className="stat-item">
              <div className="text-blue-600 text-6xl font-bold">15+</div>
              <div className="text-xl font-semibold">Ani Experiență</div>
              <p>În dezvoltarea soluțiilor digitale de top</p>
            </div>
            <div className="stat-item">
              <div className="text-blue-600 text-6xl font-bold">300+</div>
              <div className="text-xl font-semibold">Proiecte Finalizate</div>
              <p>Pentru clienți din diverse industrii</p>
            </div>
            <div className="stat-item">
              <div className="text-blue-600 text-6xl font-bold">85%</div>
              <div className="text-xl font-semibold">Clienți Recurenți</div>
              <p>Se întorc pentru proiecte noi sau extinderi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us-section bg-gray-100 py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            De Ce Să Ne Alegi
          </h2>
          <h3 className="text-3xl text-center mb-16">
            Îți Ridicăm Prezența Digitală
          </h3>
          <p className="text-xl text-center mb-12">
            Cu peste un deceniu de experiență în crearea de experiențe digitale
            premium, combinăm expertiza tehnică cu designul inovator pentru a
            oferi soluții care se remarcă în peisajul competitiv de astăzi.
          </p>
          <div className="text-center mb-12">
            <button className="btn-primary">Descoperă abordarea noastră</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-item p-6 border rounded-lg">
              <h4 className="text-2xl font-semibold mb-4">Calitate Premium</h4>
              <p>
                Fiecare proiect este creat cu atenție meticuloasă la detalii,
                asigurând calitate și performanță excepțională pe toate
                dispozitivele.
              </p>
            </div>
            <div className="feature-item p-6 border rounded-lg">
              <h4 className="text-2xl font-semibold mb-4">Livrare la Timp</h4>
              <p>
                Respectarea strictă a termenelor limită cu un management
                transparent al proiectelor menține obiectivele afacerii tale pe
                drumul cel bun.
              </p>
            </div>
            <div className="feature-item p-6 border rounded-lg">
              <h4 className="text-2xl font-semibold mb-4">
                Abordare Personalizată
              </h4>
              <p>
                Fiecare client primește o strategie adaptată nevoilor specifice
                ale afacerii, obiectivelor și publicului țintă.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="recent-projects-section py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Proiecte Recente
          </h2>
          <h3 className="text-3xl text-center mb-16">
            Lucrări de Care Suntem Mândri
          </h3>
          <div className="text-center mb-12">
            <button className="btn-secondary">Vezi toate proiectele</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="project-item border rounded-lg overflow-hidden">
              {/* Replace with actual image tag */}
              <div className="project-image h-48 bg-gray-300 flex items-center justify-center">
                Image Placeholder
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-semibold mb-2">
                  Eco Living - eCommerce
                </h4>
                <p className="text-blue-600 mb-4">Dezvoltare Web & eCommerce</p>
                <p className="mb-4">
                  Magazin online complet pentru produse eco, cu sistem de plată
                  integrat și optimizare SEO
                </p>
                <a href="#" className="text-blue-600 hover:underline">
                  Vezi detalii
                </a>
              </div>
            </div>
            <div className="project-item border rounded-lg overflow-hidden">
              {/* Replace with actual image tag */}
              <div className="project-image h-48 bg-gray-300 flex items-center justify-center">
                Image Placeholder
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-semibold mb-2">
                  Business Consulting Group
                </h4>
                <p className="text-blue-600 mb-4">Design UI/UX & Dezvoltare</p>
                <p className="mb-4">
                  Website corporativ cu design premium și sistem CMS
                  personalizat
                </p>
                <a href="#" className="text-blue-600 hover:underline">
                  Vezi detalii
                </a>
              </div>
            </div>
            <div className="project-item border rounded-lg overflow-hidden">
              {/* Replace with actual image tag */}
              <div className="project-image h-48 bg-gray-300 flex items-center justify-center">
                Image Placeholder
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-semibold mb-2">
                  Health Connect App
                </h4>
                <p className="text-blue-600 mb-4">Aplicație Web & Mobile</p>
                <p className="mb-4">
                  Platformă medicală de programări și consultații online cu
                  interfață intuitivă
                </p>
                <a href="#" className="text-blue-600 hover:underline">
                  Vezi detalii
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Testimoniale Clienți</h2>
          <p className="text-xl mb-16">
            Află ce spun clienții noștri despre experiența de a lucra с нами.
          </p>
          <div className="testimonial-card max-w-2xl mx-auto p-8 border rounded-lg shadow-lg">
            <p className="text-lg italic mb-6">
              "Colaborarea cu această echipă ne-a transformat complet prezența
              online. Atenția lor la detalii și abordarea strategică a
              redesign-ului site-ului nostru a dus la o creștere a conversiilor
              cu 45% în doar trei luni."
            </p>
            <div className="author-info">
              <div className="font-semibold">Alexandra Richards</div>
              <div className="text-gray-600">CEO, TechVision</div>
            </div>
          </div>
          {/* Add navigation arrows here if needed */}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section py-20 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8">
            Transformă-ți Viziunea în Realitate Digitală
          </h2>
          <p className="text-xl mb-12">
            Hai să colaborăm pentru a crea experiențe digitale care îți
            propulsează afacerea spre succes.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="btn-primary">Contactează-ne</button>
            <button className="btn-secondary">Începe acum</button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="site-footer bg-gray-800 text-white py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="footer-about">
            <div className="logo text-2xl font-bold mb-4">Logitect</div>
            <p className="mb-4">
              Soluții digitale premium și dezvoltare web realizate cu precizie
              și expertiză.
            </p>
            <div className="social-links flex space-x-4">
              {/* Replace with actual social icons/links */}
              <a href="#" className="text-white hover:text-blue-400">
                Twitter
              </a>
              <a href="#" className="text-white hover:text-blue-400">
                LinkedIn
              </a>
              <a href="#" className="text-white hover:text-blue-400">
                GitHub
              </a>
            </div>
          </div>
          <div className="footer-links">
            <h5 className="text-xl font-semibold mb-4">Companie</h5>
            <ul>
              <li>
                <a href="#" className="text-white hover:text-blue-400">
                  Despre noi
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-blue-400">
                  Servicii
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-blue-400">
                  Portofoliu
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-blue-400">
                  Prețuri
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-blue-400">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h5 className="text-xl font-semibold mb-4">Resurse</h5>
            <ul>
              <li>
                <a href="#" className="text-white hover:text-blue-400">
                  Proces
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-blue-400">
                  Întrebări frecvente
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-blue-400">
                  Termeni
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-blue-400">
                  Confidențialitate
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <h5 className="text-xl font-semibold mb-4">Contact</h5>
            <p className="mb-2">123 Bulevardul Digital, Sectorul Tech</p>
            <p className="mb-2">+40 (755) 555-555</p>
            <p className="mb-2">contact@logitect.ro</p>
          </div>
        </div>
        <div className="container mx-auto text-center mt-8 border-t border-gray-700 pt-8">
          <p>© 2025 Logitect. Toate drepturile rezervate.</p>
          <div className="footer-bottom-links mt-2 space-x-4">
            <a href="#" className="text-white hover:text-blue-400">
              Termeni și Condiții
            </a>
            <a href="#" className="text-white hover:text-blue-400">
              Politica de Confidențialitate
            </a>
            <a href="#" className="text-white hover:text-blue-400">
              Politica de Cookie-uri
            </a>
          </div>
        </div>
      </footer>
    </motion.div>
  )
}

export default Home
