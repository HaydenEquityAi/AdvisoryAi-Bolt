import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, TrendingUp, Eye, Zap, Target, Brain, CheckCircle, DollarSign } from 'lucide-react';

const BusinessIntelligence: React.FC = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Predictive Business Modeling',
      description: '6-month revenue forecasting and trend analysis using advanced AI algorithms and historical data patterns.'
    },
    {
      icon: Eye,
      title: 'Real-Time Performance Dashboards',
      description: 'Live business metrics with intelligent alerts that notify you of significant changes or opportunities.'
    },
    {
      icon: DollarSign,
      title: 'Customer Lifetime Value Optimization',
      description: 'AI models that predict and maximize the total value of customer relationships over time.'
    },
    {
      icon: Zap,
      title: 'Automated Reporting Systems',
      description: 'Self-generating insights and reports that highlight key trends and actionable recommendations.'
    },
    {
      icon: Brain,
      title: 'AI-Powered Recommendations',
      description: 'Intelligent pricing strategies, inventory optimization, and business decision support.'
    },
    {
      icon: Target,
      title: 'Competitive Analysis Automation',
      description: 'Continuous monitoring of competitors with automated alerts and strategic response recommendations.'
    }
  ];

  const dashboardFeatures = [
    'Real-time sales and revenue tracking',
    'Customer behavior and engagement analytics',
    'Inventory levels and supply chain insights',
    'Marketing campaign performance metrics',
    'Financial KPIs and cash flow monitoring',
    'Predictive alerts for business opportunities'
  ];

  const metrics = [
    { icon: TrendingUp, value: '94%', label: 'Prediction Accuracy' },
    { icon: Eye, value: 'Real-time', label: 'Data Updates' },
    { icon: Zap, value: '75%', label: 'Faster Decision Making' }
  ];

  const useCases = [
    {
      industry: 'Retail',
      challenge: 'Inventory Management',
      solution: 'AI predicts optimal stock levels, seasonal trends, and reorder points to minimize waste and stockouts.'
    },
    {
      industry: 'Healthcare',
      challenge: 'Patient Flow Optimization',
      solution: 'Predictive models forecast appointment demand and optimize scheduling to reduce wait times.'
    },
    {
      industry: 'Professional Services',
      challenge: 'Resource Allocation',
      solution: 'AI analyzes project profitability and resource utilization to optimize team assignments and pricing.'
    },
    {
      industry: 'Construction',
      challenge: 'Project Profitability',
      solution: 'Real-time cost tracking and predictive modeling to identify profitable opportunities and cost overruns.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-forest-green text-white section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Business Intelligence & Analytics</h1>
            <p className="text-xl text-gray-200 mb-8">
              Transform raw data into actionable insights that drive profitable decisions. Our AI-powered analytics 
              platform gives you the clarity and foresight to stay ahead of the competition.
            </p>
            <Link to="/contact" className="btn-primary bg-white text-forest-green hover:bg-gray-100 text-lg px-8 py-4">
              Get Intelligent Business Insights
            </Link>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="bg-light-gray section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Intelligent Analytics Results</h2>
            <p className="text-xl text-text-secondary">The power of AI-driven business intelligence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                    <IconComponent className="h-8 w-8 text-forest-green mx-auto mb-4" />
                    <div className="text-4xl font-bold text-forest-green mb-2">{metric.value}</div>
                  </div>
                  <div className="text-lg font-medium text-text-secondary">{metric.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Complete Business Intelligence Solutions</h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              From predictive modeling to real-time dashboards, we provide comprehensive analytics 
              that transform how you understand and run your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="card group">
                  <div className="bg-light-green p-3 rounded-lg w-fit mb-4 group-hover:bg-forest-green group-hover:text-white transition-colors">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-text-secondary">{service.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Learn More About This Solution
            </Link>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="bg-light-green section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Real-Time Business Dashboards</h2>
              <p className="text-xl text-text-secondary mb-8">
                See your entire business at a glance with intelligent dashboards that highlight 
                what matters most and alert you to opportunities and risks.
              </p>
              
              <div className="space-y-4">
                {dashboardFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-forest-green flex-shrink-0" />
                    <span className="text-text-primary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <h3 className="text-2xl font-bold mb-6 text-center">Sample Dashboard Metrics</h3>
              <div className="space-y-4">
                <div className="bg-light-gray p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Monthly Revenue</span>
                    <span className="text-forest-green font-bold">↑ 23%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-forest-green h-2 rounded-full" style={{width: '78%'}}></div>
                  </div>
                </div>
                
                <div className="bg-light-gray p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Customer Acquisition</span>
                    <span className="text-forest-green font-bold">↑ 45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-forest-green h-2 rounded-full" style={{width: '65%'}}></div>
                  </div>
                </div>
                
                <div className="bg-light-gray p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Operational Efficiency</span>
                    <span className="text-forest-green font-bold">↑ 31%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-forest-green h-2 rounded-full" style={{width: '82%'}}></div>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <p className="text-sm text-text-secondary">Updated in real-time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Industry-Specific Solutions</h2>
            <p className="text-xl text-text-secondary">
              Tailored analytics solutions for different types of Tulsa businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="card">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-forest-green text-white px-3 py-1 rounded-full text-sm font-medium">
                    {useCase.industry}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{useCase.challenge}</h3>
                <p className="text-text-secondary">{useCase.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Predictive Analytics Showcase */}
      <section className="bg-light-gray section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Predictive Analytics in Action</h2>
              <p className="text-xl text-text-secondary">
                See how AI forecasting helps businesses make proactive decisions
              </p>
            </div>

            <div className="card">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">6-Month Revenue Forecast</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Current Month</span>
                      <span className="font-bold text-forest-green">$125,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Next Month (Predicted)</span>
                      <span className="font-bold text-forest-green">$138,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>3 Months Out</span>
                      <span className="font-bold text-forest-green">$165,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>6 Months Out</span>
                      <span className="font-bold text-forest-green">$195,000</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-6">AI-Generated Insights</h3>
                  <div className="space-y-3">
                    <div className="bg-light-green p-3 rounded-lg">
                      <p className="text-sm"><strong>Opportunity:</strong> Q2 shows 23% growth potential in professional services segment</p>
                    </div>
                    <div className="bg-light-green p-3 rounded-lg">
                      <p className="text-sm"><strong>Risk:</strong> Supply chain costs trending upward - consider price adjustments</p>
                    </div>
                    <div className="bg-light-green p-3 rounded-lg">
                      <p className="text-sm"><strong>Recommendation:</strong> Increase marketing spend in healthcare vertical by 15%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Business Intelligence Success Story</h2>
              <p className="text-xl text-text-secondary">
                How a Tulsa construction company increased profitability 40% with predictive analytics
              </p>
            </div>

            <div className="card">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">The Challenge</h3>
                  <p className="text-text-secondary mb-6">
                    A mid-size construction company was struggling with project profitability. 
                    They couldn't identify which types of projects were most profitable or predict cash flow accurately.
                  </p>
                  
                  <h3 className="text-2xl font-semibold mb-4">Our Solution</h3>
                  <p className="text-text-secondary">
                    We implemented real-time project tracking, predictive cost modeling, and AI-powered 
                    profitability analysis with automated alerts for budget overruns.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Results</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-light-green rounded-lg">
                      <span>Profit Margin Increase</span>
                      <span className="font-bold text-forest-green">+40%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-light-green rounded-lg">
                      <span>Cost Overrun Reduction</span>
                      <span className="font-bold text-forest-green">-65%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-light-green rounded-lg">
                      <span>Decision-Making Speed</span>
                      <span className="font-bold text-forest-green">+200%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-light-green rounded-lg">
                      <span>Cash Flow Accuracy</span>
                      <span className="font-bold text-forest-green">96%</span>
                    </div>
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
          <h2 className="text-4xl font-bold mb-4">Ready to Make Data-Driven Decisions?</h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Stop guessing about your business performance. Get AI-powered insights that show you 
            exactly where to focus your efforts for maximum profitability.
          </p>
          <Link to="/contact" className="btn-primary bg-white text-forest-green hover:bg-gray-100 text-lg px-8 py-4">
            Get Intelligent Business Insights
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BusinessIntelligence;