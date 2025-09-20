import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Brain, Zap, Code, Database, BarChart3, Shield, CheckCircle } from 'lucide-react';

const AITechStack: React.FC = () => {
  const techCategories = [
    {
      title: 'Multi-Cloud Infrastructure',
      icon: Cloud,
      description: 'Reliable, scalable cloud infrastructure across multiple providers',
      technologies: [
        { name: 'Google Cloud Platform', description: 'Enterprise-grade AI and machine learning services' },
        { name: 'Microsoft Azure', description: 'Comprehensive cloud computing platform' },
        { name: 'Amazon AWS', description: 'Market-leading cloud infrastructure services' },
        { name: 'Supabase', description: 'PostgreSQL database with built-in authentication' }
      ]
    },
    {
      title: 'AI Intelligence Layer',
      icon: Brain,
      description: 'Cutting-edge AI models for natural language processing and automation',
      technologies: [
        { name: 'OpenAI', description: 'GPT-4 and advanced language models' },
        { name: 'Anthropic Claude', description: 'Constitutional AI for safe, helpful responses' },
        { name: 'Google Gemini', description: 'Multimodal AI for text, images, and more' },
        { name: 'Perplexity AI', description: 'Real-time information and research capabilities' },
        { name: 'Microsoft Copilot', description: 'Integrated AI across Microsoft ecosystem' }
      ]
    },
    {
      title: 'Automation Engine',
      icon: Zap,
      description: 'Powerful workflow automation and integration platforms',
      technologies: [
        { name: 'n8n Workflow Automation', description: 'Open-source workflow automation platform' },
        { name: 'Microsoft Power Automate', description: 'Enterprise workflow automation' },
        { name: 'Zapier', description: 'Connect and automate thousands of apps' }
      ]
    },
    {
      title: 'Frontend & Deployment',
      icon: Code,
      description: 'Modern web technologies for fast, reliable applications',
      technologies: [
        { name: 'Next.js', description: 'React framework for production-ready applications' },
        { name: 'React', description: 'Leading JavaScript library for user interfaces' },
        { name: 'Vercel', description: 'Global deployment platform for modern web apps' }
      ]
    },
    {
      title: 'Databases & Storage',
      icon: Database,
      description: 'Scalable data storage solutions for all types of information',
      technologies: [
        { name: 'Supabase', description: 'Open-source PostgreSQL with real-time capabilities' },
        { name: 'MongoDB', description: 'Document database for flexible data models' },
        { name: 'Redis', description: 'In-memory data structure store for caching' }
      ]
    },
    {
      title: 'Monitoring & Analytics',
      icon: BarChart3,
      description: 'Comprehensive monitoring and performance analytics',
      technologies: [
        { name: 'DataDog', description: 'Full-stack monitoring and analytics platform' },
        { name: 'New Relic', description: 'Application performance monitoring and optimization' }
      ]
    }
  ];

  const integrationExamples = [
    {
      title: 'Microsoft 365 Integration',
      icon: '🏢',
      features: [
        'Teams automation with AI meeting summaries',
        'SharePoint intelligent document organization',
        'Outlook automation with smart email processing',
        'Power BI integration for business intelligence'
      ]
    },
    {
      title: 'Google Workspace Integration',
      icon: '🌐',
      features: [
        'Gmail automation with intelligent email routing',
        'Google Drive AI-powered file organization',
        'Calendar optimization with smart scheduling',
        'Sheets automation for data processing'
      ]
    }
  ];

  const benefits = [
    'Battle-tested across 100+ implementations',
    'Enterprise-grade security and compliance',
    'Scalable from small business to enterprise',
    'Real-time monitoring and optimization',
    'Multi-cloud redundancy for reliability',
    'Open-source foundations for flexibility'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-forest-green text-white section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our AI Tech Stack</h1>
            <p className="text-xl text-gray-200 mb-8">
              The proven technology foundation that powers reliable, scalable AI solutions for Tulsa businesses. 
              Transparency builds trust - see exactly what technologies we use to deliver results.
            </p>
            <Link to="/contact" className="btn-primary bg-white text-forest-green hover:bg-gray-100 text-lg px-8 py-4">
              Discuss Your Technology Needs
            </Link>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="bg-light-gray section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Why Our Tech Stack Matters</h2>
            <p className="text-xl text-text-secondary mb-8">
              Transparency builds trust. Our carefully curated technology stack has been battle-tested 
              across 100+ implementations, ensuring reliability, security, and scalability for your business.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-forest-green flex-shrink-0" />
                  <span className="text-left">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Categories */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Complete Technology Foundation</h2>
            <p className="text-xl text-text-secondary">
              Every layer of our stack is chosen for enterprise reliability and proven results
            </p>
          </div>

          <div className="space-y-16">
            {techCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="card">
                  <div className="flex items-start space-x-6 mb-8">
                    <div className="bg-forest-green text-white p-4 rounded-lg">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                      <p className="text-text-secondary text-lg">{category.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="bg-light-gray p-4 rounded-lg hover:bg-light-green transition-colors">
                        <h4 className="font-semibold text-forest-green mb-2">{tech.name}</h4>
                        <p className="text-sm text-text-secondary">{tech.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Examples */}
      <section className="bg-light-green section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Seamless Integrations</h2>
            <p className="text-xl text-text-secondary">
              Our stack integrates perfectly with the tools you already use
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {integrationExamples.map((integration, index) => (
              <div key={index} className="card">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-4xl">{integration.icon}</div>
                  <h3 className="text-2xl font-bold">{integration.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {integration.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-forest-green flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="bg-forest-green text-white p-4 rounded-lg w-fit mx-auto mb-6">
                <Shield className="h-12 w-12" />
              </div>
              <h2 className="text-4xl font-bold mb-4">Enterprise Security & Compliance</h2>
              <p className="text-xl text-text-secondary">
                Your data security is our top priority. Every component of our stack meets enterprise security standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-semibold mb-4">Security Features</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-forest-green" />
                    <span>HIPAA-compliant infrastructure</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-forest-green" />
                    <span>End-to-end encryption</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-forest-green" />
                    <span>Multi-factor authentication</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-forest-green" />
                    <span>Regular security audits</span>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold mb-4">Reliability Features</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-forest-green" />
                    <span>99.9% uptime guarantee</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-forest-green" />
                    <span>Multi-cloud redundancy</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-forest-green" />
                    <span>Automated backups</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-forest-green" />
                    <span>24/7 system monitoring</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-forest-green text-white section-padding">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Build on Proven Technology?</h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Let's discuss how our battle-tested technology stack can power your automation solution. 
            Get a custom technology roadmap for your specific needs.
          </p>
          <Link to="/contact" className="btn-primary bg-white text-forest-green hover:bg-gray-100 text-lg px-8 py-4">
            Schedule a Technology Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AITechStack;