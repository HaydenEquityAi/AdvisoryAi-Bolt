import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Send } from 'lucide-react';

interface ChatMessage {
  id: number;
  text: string;
  isBot: boolean;
  options?: string[];
}

interface LeadData {
  process: string;
  timeSpent: string;
  industry: string;
  email: string;
  name?: string;
  businessName?: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [leadData, setLeadData] = useState<Partial<LeadData>>({});
  const [userInput, setUserInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const quickReplies = [
    'Email management',
    'Scheduling/appointments', 
    'Data entry',
    'Invoicing/billing',
    'Customer follow-up',
    'Something else'
  ];

  const timeOptions = [
    '1-5 hours',
    '5-10 hours', 
    '10-20 hours',
    '20+ hours'
  ];

  const industryOptions = [
    'Healthcare',
    'Construction',
    'Restaurant',
    'Real Estate',
    'Professional Services',
    'Other'
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        id: 1,
        text: "Hi! I'm the AdvisoryAI assistant. I help Tulsa business owners identify their biggest automation opportunities. What's the most time-consuming task you wish would just handle itself?",
        isBot: true,
        options: quickReplies
      }]);
    }
  }, [isOpen]);

  const submitChatbotLead = async (leadData: LeadData) => {
    try {
      const response = await fetch('https://n8n.capitalaiadvisors.com/webhook/8d35a768-bb32-4d2a-a7a2-e374a415c98e', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'homepage_chatbot',
          timestamp: new Date().toISOString(),
          process: leadData.process,
          timeSpent: leadData.timeSpent,
          industry: leadData.industry,
          email: leadData.email,
          name: leadData.name || '',
          businessName: leadData.businessName || ''
        })
      });
      return response.ok;
    } catch (error) {
      console.error('Chatbot webhook error:', error);
      return false;
    }
  };

  const handleOptionClick = (option: string) => {
    addUserMessage(option);
    
    if (currentStep === 0) {
      setLeadData({ ...leadData, process: option });
      addBotMessage("How many hours per week does this take?", timeOptions);
      setCurrentStep(1);
    } else if (currentStep === 1) {
      setLeadData({ ...leadData, timeSpent: option });
      addBotMessage("What industry is your business in?", industryOptions);
      setCurrentStep(2);
    } else if (currentStep === 2) {
      setLeadData({ ...leadData, industry: option });
      addBotMessage("What's the best email to send you a custom automation plan?");
      setCurrentStep(3);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isSubmitting) return;

    if (currentStep === 3) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(userInput)) {
        addBotMessage("Please enter a valid email address.");
        return;
      }

      addUserMessage(userInput);
      const finalLeadData = { ...leadData, email: userInput } as LeadData;
      
      setIsSubmitting(true);
      const success = await submitChatbotLead(finalLeadData);
      
      if (success) {
        addBotMessage("Perfect! I'll send you a custom automation plan within the next hour. In the meantime, feel free to explore our case studies or schedule a free consultation!");
      } else {
        addBotMessage("Thanks for your interest! Please visit our contact page to get in touch directly.");
      }
      
      setCurrentStep(4);
      setIsSubmitting(false);
    }
    
    setUserInput('');
  };

  const addUserMessage = (text: string) => {
    setMessages(prev => [...prev, {
      id: prev.length + 1,
      text,
      isBot: false
    }]);
  };

  const addBotMessage = (text: string, options?: string[]) => {
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        text,
        isBot: true,
        options
      }]);
    }, 1000);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-forest-green text-white p-4 rounded-full shadow-lg hover:bg-dark-forest transition-all duration-300 z-50 animate-pulse"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-lg shadow-xl z-50 flex flex-col">
          {/* Header */}
          <div className="bg-forest-green text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                🤖
              </div>
              <div>
                <h3 className="font-semibold">AdvisoryAI Assistant</h3>
                <p className="text-sm opacity-75">Online now</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white hover:bg-opacity-20 p-1 rounded"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg ${
                  message.isBot 
                    ? 'bg-gray-100 text-text-primary' 
                    : 'bg-forest-green text-white'
                }`}>
                  <p className="text-sm">{message.text}</p>
                  {message.options && (
                    <div className="mt-2 space-y-1">
                      {message.options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleOptionClick(option)}
                          className="block w-full text-left p-2 text-xs bg-white border border-gray-200 rounded hover:bg-gray-50 transition-colors"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isSubmitting && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <p className="text-sm">Typing...</p>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          {currentStep === 3 && (
            <form onSubmit={handleSubmit} className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="email"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Enter your email..."
                  className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-forest-green"
                  disabled={isSubmitting}
                />
                <button
                  type="submit"
                  disabled={isSubmitting || !userInput.trim()}
                  className="bg-forest-green text-white p-2 rounded-lg hover:bg-dark-forest transition-colors disabled:opacity-50"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </>
  );
};

export default Chatbot;