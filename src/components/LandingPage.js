import React from 'react';
import { ArrowRight, Shield, Clock, FileText } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Transform Your RIA's AI Compliance
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Automated compliance monitoring for modern wealth management firms
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full inline-flex items-center">
            Schedule a Demo
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </header>

      {/* Stats Section */}
      <section className="bg-white/10 backdrop-blur-lg py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-lg">
              <h3 className="text-4xl font-bold text-blue-400 mb-2">90%</h3>
              <p className="text-blue-100">of firms lack comprehensive AI policies</p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-lg">
              <h3 className="text-4xl font-bold text-blue-400 mb-2">$81M</h3>
              <p className="text-blue-100">in compliance penalties (Feb 2024)</p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-lg">
              <h3 className="text-4xl font-bold text-blue-400 mb-2">61%</h3>
              <p className="text-blue-100">spike in AI adoption last year</p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-lg">
              <h3 className="text-4xl font-bold text-blue-400 mb-2">62%</h3>
              <p className="text-blue-100">of firms rate low on AI knowledge</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Why Leading RIAs Choose RegAlign
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/5 p-8 rounded-lg backdrop-blur-lg">
            <Shield className="text-blue-400 mb-4" size={32} />
            <h3 className="text-xl font-bold text-white mb-4">
              Real-Time Compliance Enforcement
            </h3>
            <p className="text-blue-100">
              Dynamic rules engine monitors AI outputs against current SEC and FINRA regulations
            </p>
          </div>
          <div className="bg-white/5 p-8 rounded-lg backdrop-blur-lg">
            <Clock className="text-blue-400 mb-4" size={32} />
            <h3 className="text-xl font-bold text-white mb-4">
              Future-Proof Protection
            </h3>
            <p className="text-blue-100">
              Automatic updates ensure compliance with the latest regulatory requirements
            </p>
          </div>
          <div className="bg-white/5 p-8 rounded-lg backdrop-blur-lg">
            <FileText className="text-blue-400 mb-4" size={32} />
            <h3 className="text-xl font-bold text-white mb-4">
              Comprehensive Audit Trail
            </h3>
            <p className="text-blue-100">
              Detailed documentation makes regulatory examinations straightforward
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Don't Wait for a Regulatory Examination
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join forward-thinking RIAs who are protecting their firms with RegAlign
          </p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-50 inline-flex items-center">
            Get Started Today
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8">
        <div className="text-center text-blue-200 text-sm">
          © 2024 RegAlign. All rights reserved.
        </div>
      </footer>
    </div>
  );
}