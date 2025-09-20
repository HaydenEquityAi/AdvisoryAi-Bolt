import React, { useState } from 'react';
import { Phone, Mail, MapPin, Calendar, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    phone: '',
    challenge: '',
    details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const challenges = [
    'Email management and sorting',
    'Scheduling and appointments',
    'Data entry and processing',
    'Invoicing and billing',
    'Customer follow-up and communication',
    'Inventory management',
    'Report generation',
    'Lead qualification',
    'Document processing',
    'Other (please specify in details)'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://n8n.capitalaiadvisors.com/webhook/4d30567f-a097-47b8-bab1-1fb18f82d8a4', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          source: 'contact_form',
          timestamp: new Date().toISOString(),
          name: formData.name,
          email: formData.email,
          businessName: formData.businessName,
          phone: formData.phone,
          challenge: formData.challenge,
          details: formData.details
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert('There was an error submitting your form. Please try again or call us directly.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your form. Please try again or call us directly.');
    }

    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="section-padding">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <CheckCircle className="h-16 w-16 text-forest-green mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
            <p className="text-xl text-text-secondary mb-8">
              We've received your automation assessment request. Our team will review your information 
              and get back to you within 24 hours with a custom automation plan.
            </p>
            <p className="text-lg text-text-secondary mb-8">
              In the meantime, feel free to schedule a call directly with our team or explore our client success stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://calendly.com/hayden-advisoryai/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4"
              >
                Schedule Your Free Session
              </a>
              <a href="/client-stories" className="btn-secondary text-lg px-8 py-4">
                See Client Stories
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-forest-green text-white section-padding">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-6">Book Your Free 30-Minute Automation Assessment</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Stop wasting time on manual work. Get a custom automation plan that shows you exactly 
            how to save hours every week and increase your profits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>(918) 899-1650</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <span>hayden@advisoryai.co</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span>Tulsa, Oklahoma</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get Your Custom Automation Plan</h2>
              <p className="text-text-secondary mb-8">
                Fill out the form below and we'll send you a detailed automation assessment 
                showing exactly how much time and money you could save.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="businessName" className="block text-sm font-medium text-text-primary mb-2">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      required
                      value={formData.businessName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="challenge" className="block text-sm font-medium text-text-primary mb-2">
                    What challenges or areas would you like automated? *
                  </label>
                  <select
                    id="challenge"
                    name="challenge"
                    required
                    value={formData.challenge}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green focus:border-transparent"
                  >
                    <option value="">Select a challenge</option>
                    {challenges.map((challenge, index) => (
                      <option key={index} value={challenge}>{challenge}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="details" className="block text-sm font-medium text-text-primary mb-2">
                    Tell us more about your automation needs
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={4}
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="Describe your current processes, pain points, and what you'd like to achieve..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green focus:border-transparent"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Get My Free Automation Assessment'}
                </button>
              </form>
            </div>

            {/* Calendly Integration */}
            <div>
              <div className="bg-light-green p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Prefer to Talk Now?</h3>
                <p className="text-text-secondary mb-6">
                  Schedule a free 30-minute call with our automation experts. We'll discuss your 
                  business challenges and show you exactly how AI automation can help.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-forest-green" />
                    <span>Free 30-minute consultation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-forest-green" />
                    <span>Custom automation roadmap</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-forest-green" />
                    <span>ROI projections for your business</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-forest-green" />
                    <span>No sales pressure, just value</span>
                  </div>
                </div>

                <a
                  href="https://calendly.com/hayden-advisoryai/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center text-lg py-4 inline-flex items-center justify-center space-x-2"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Schedule Your Free Session</span>
                </a>

                <div className="mt-6 p-4 bg-white rounded-lg border-l-4 border-forest-green">
                  <h4 className="font-semibold text-forest-green mb-2">Local Tulsa Support</h4>
                  <p className="text-sm text-text-secondary">
                    We're based right here in Tulsa and understand the unique challenges of Oklahoma businesses. 
                    Call us directly at (918) 899-1650 for immediate assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;