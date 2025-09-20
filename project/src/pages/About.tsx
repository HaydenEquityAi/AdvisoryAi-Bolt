import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Users, Target, Heart, CheckCircle, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Local First',
      description: 'We believe in supporting our Tulsa community by helping local businesses thrive with cutting-edge technology.'
    },
    {
      icon: Target,
      title: 'Results Driven',
      description: 'Every solution we build has measurable outcomes. We track success by your time saved and profits increased.'
    },
    {
      icon: Users,
      title: 'Partnership Approach',
      description: 'We\'re not just vendors - we\'re your neighbors and partners in building a stronger Oklahoma economy.'
    }
  ];

  const teamStats = [
    { number: '100+', label: 'Local Businesses Automated' },
    { number: '500+', label: 'Hours Saved Weekly' },
    { number: '5+', label: 'Years AI Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  const localExamples = [
    'Healthcare practices streamlining patient intake',
    'Construction companies automating project management',
    'Restaurants optimizing order processing',
    'Professional services eliminating paperwork',
    'Real estate agents automating lead follow-up',
    'Local retailers improving inventory management'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-forest-green text-white section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">We're Local AI Experts Who Get It</h1>
            <p className="text-xl text-gray-200 mb-8">
              Based right here in Tulsa, we understand the unique challenges of running a business in Oklahoma. 
              We're not a faceless corporation - we're your neighbors, committed to your success and the growth of our local economy.
            </p>
            <div className="flex items-center justify-center space-x-2 text-lg">
              <MapPin className="h-6 w-6" />
              <span>Proudly serving Tulsa, Oklahoma since 2019</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Why We Started AdvisoryAI</h2>
              <p className="text-xl text-text-secondary">
                Every great business starts with solving a real problem
              </p>
            </div>

            <div className="card">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  After watching countless Tulsa business owners work 60+ hour weeks, drowning in manual tasks 
                  that could be automated, we knew there had to be a better way. Small businesses were missing out 
                  on the AI revolution because enterprise solutions were too expensive and complex.
                </p>
                
                <p className="text-lg text-text-secondary leading-relaxed mb-6">
                  We started AdvisoryAI to bridge that gap. Our mission is simple: help local Tulsa businesses 
                  stop doing manual work so they can focus on what really matters - growing their business, 
                  serving their customers, and enjoying their success.
                </p>

                <p className="text-lg text-text-secondary leading-relaxed">
                  Today, we've helped 100+ local businesses save thousands of hours and increase their profits 
                  through intelligent automation. Every success story motivates us to help the next Oklahoma entrepreneur 
                  reclaim their time and grow their dreams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-light-gray section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Oklahoma Values, Cutting-Edge Solutions</h2>
            <p className="text-xl text-text-secondary">
              We bring Silicon Valley technology with Oklahoma integrity and work ethic
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="card text-center">
                  <div className="bg-forest-green text-white p-4 rounded-lg w-fit mx-auto mb-4">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-text-secondary">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Local Impact */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Impact on Tulsa Businesses</h2>
              <p className="text-xl text-text-secondary mb-8">
                We've seen firsthand how the right technology can transform a struggling business into a thriving one. 
                During challenging times like market volatility, having automated systems isn't just convenient - it's essential for survival and growth.
              </p>

              <div className="space-y-4 mb-8">
                {localExamples.map((example, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-forest-green flex-shrink-0" />
                    <span>{example}</span>
                  </div>
                ))}
              </div>

              <Link to="/client-stories" className="inline-flex items-center text-forest-green font-medium hover:text-dark-forest transition-colors">
                See Our Client Success Stories <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="card">
              <h3 className="text-2xl font-bold mb-6 text-center">Our Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                {teamStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-forest-green mb-1">{stat.number}</div>
                    <div className="text-sm text-text-secondary">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Commitment */}
      <section className="bg-light-green section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Committed to Tulsa's Success</h2>
            <p className="text-xl text-text-secondary mb-8">
              When you work with AdvisoryAI, you're not just getting AI automation - you're partnering with a company 
              that's invested in the long-term success of our local community.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="card text-left">
                <h3 className="text-xl font-semibold mb-3">Local Expertise</h3>
                <p className="text-text-secondary">
                  We understand Tulsa's business environment, regulations, and unique challenges. 
                  Our solutions are tailored for Oklahoma entrepreneurs.
                </p>
              </div>
              
              <div className="card text-left">
                <h3 className="text-xl font-semibold mb-3">Community Investment</h3>
                <p className="text-text-secondary">
                  Every dollar you invest in automation stays local. We reinvest in our team, 
                  our technology, and supporting other Tulsa businesses.
                </p>
              </div>
            </div>

            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Partner With Local AI Experts
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-forest-green text-white section-padding">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Join Our Success Stories?</h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Let's discuss how AI automation can transform your Tulsa business. 
            Get a free consultation and see exactly what's possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-forest-green hover:bg-gray-100 text-lg px-8 py-4">
              Schedule Your Free Consultation
            </Link>
            <div className="flex items-center justify-center space-x-2 text-gray-200">
              <span>📞 (918) 899-1650</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;