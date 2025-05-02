import React from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  BarChart3, 
  Package, 
  Receipt, 
  ArrowRight,
  Phone,
  MessageSquare
} from 'lucide-react';

function App() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="container py-4 flex items-center justify-between">
          <div className="text-2xl font-display text-primary">Grizzen.Solutions</div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="hover:text-primary-orange transition-colors">Features</a>
            <a href="#impact" className="hover:text-primary-orange transition-colors">Impact</a>
            <a href="#presentation" className="hover:text-primary-orange transition-colors">Our Vision</a>
            <a href="#team" className="hover:text-primary-orange transition-colors">Team</a>
            <a href="#contact" className="btn-primary">Get Started</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-section bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl leading-tight mb-6">
                Simple Tools for Smarter African Businesses
              </h1>
              <p className="text-xl mb-8 text-secondary-offwhite">
                Empower your business with modern tools for sales, inventory, and financial management.
              </p>
              <button className="btn-primary flex items-center gap-2">
                Try GrizzenHub Now
                <ArrowRight size={20} />
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1607703703520-bb638e84caf2?auto=format&fit=crop&w=800"
                alt="African business owner using GrizzenHub"
                className="rounded-lg shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="section bg-white">
        <div className="container">
          <h2 className="text-4xl text-center mb-12">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="feature-card">
              <BarChart3 className="w-12 h-12 text-primary-orange mb-4" />
              <h3 className="text-xl font-bold mb-2">Smart Sales Tracking</h3>
              <p>Monitor your business performance in real-time with intuitive analytics and reporting.</p>
            </div>
            <div className="feature-card">
              <Package className="w-12 h-12 text-primary-orange mb-4" />
              <h3 className="text-xl font-bold mb-2">Inventory Management</h3>
              <p>Keep track of your stock levels and get automated reorder notifications.</p>
            </div>
            <div className="feature-card">
              <Receipt className="w-12 h-12 text-primary-orange mb-4" />
              <h3 className="text-xl font-bold mb-2">Professional Invoicing</h3>
              <p>Create and send professional invoices in seconds, track payments easily.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" ref={ref} className="section bg-secondary-gray">
        <div className="container">
          <h2 className="text-4xl text-center mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 text-center">
              <div className="text-4xl font-bold text-primary-orange mb-2">
                {inView ? "50,000+" : "0+"}
              </div>
              <p>Businesses Empowered</p>
            </div>
            <div className="bg-white rounded-lg p-8 text-center">
              <div className="text-4xl font-bold text-primary-orange mb-2">
                {inView ? "$10M+" : "$0+"}
              </div>
              <p>Revenue Processed</p>
            </div>
            <div className="bg-white rounded-lg p-8 text-center">
              <div className="text-4xl font-bold text-primary-orange mb-2">
                {inView ? "15+" : "0+"} 
              </div>
              <p>African Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Presentation Section */}
      <section id="presentation" className="section bg-white">
        <div className="container">
          <h2 className="text-4xl text-center mb-12">Our Vision for African Business</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-3xl font-bold text-primary mb-6">Empowering Africa's Creative Business Women</h3>
              
              <div className="space-y-6">
                <div className="bg-secondary-gray p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3">Our Mission</h4>
                  <p className="text-gray-700">To provide accessible, user-friendly business management tools that empower African entrepreneurs to scale their businesses efficiently and sustainably.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-secondary-gray p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-3">The Challenge</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Limited access to modern business tools</li>
                      <li>Complex financial tracking systems</li>
                      <li>Inefficient inventory management</li>
                      <li>Difficulty in scaling operations</li>
                    </ul>
                  </div>

                  <div className="bg-secondary-gray p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-3">Our Solution</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Intuitive mobile-first platform</li>
                      <li>Automated financial reporting</li>
                      <li>Real-time inventory tracking</li>
                      <li>Integrated payment solutions</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-primary/5 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-3">Impact Goals for 2025</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-primary-orange">100K+</p>
                      <p className="text-sm text-gray-600">Businesses Empowered</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary-orange">$50M+</p>
                      <p className="text-sm text-gray-600">Transaction Volume</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary-orange">25+</p>
                      <p className="text-sm text-gray-600">African Countries</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section bg-white">
        <div className="container">
          <h2 className="text-4xl text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-48 h-48 rounded-full mx-auto mb-6 overflow-hidden">
                <img 
                  src="/team/oluwaseyi.jpg"
                  alt="Oluwaseyi Kehinde Onajobi"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Oluwaseyi Kehinde Onajobi</h3>
              <p className="text-gray-600 mb-2">CEO</p>
              <p className="text-sm text-gray-500">10+ years tech experience</p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 rounded-full mx-auto mb-6 overflow-hidden">
                <img 
                  src="/team/etimini.jpg"
                  alt="Etimini Thomasina Ikehedu"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Etimini Thomasina Ikehedu</h3>
              <p className="text-gray-600 mb-2">COO</p>
              <p className="text-sm text-gray-500">SME finance specialist</p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 rounded-full mx-auto mb-6 overflow-hidden">
                <img 
                  src="/team/mayowa.jpg"
                  alt="Mayowa Aina"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Mayowa Aina</h3>
              <p className="text-gray-600 mb-2">CDO</p>
              <p className="text-sm text-gray-500">Digital innovation expert</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of African businesses already using Grizzen.Solutions to grow and succeed.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="btn-primary flex items-center gap-2">
              <Phone size={20} />
              Download on App Store
            </button>
            <button className="btn-primary flex items-center gap-2">
              <Phone size={20} />
              Get it on Google Play
            </button>
            <button className="btn bg-green-500 text-white flex items-center gap-2">
              <MessageSquare size={20} />
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-gold/10 py-8">
        <div className="container text-center text-sm">
          <p>&copy; 2024 Grizzen.Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;