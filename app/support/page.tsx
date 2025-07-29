'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SupportBox from '@/components/home/SupportBox';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Clock, MessageCircle, Video, FileText, HelpCircle, Sparkles } from 'lucide-react';

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    urgency: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our team',
      info: '+91 98765 43210',
      availability: '9 AM - 9 PM IST',
      action: 'Call Now',
      color: 'bg-[#FF5722]'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Chat',
      description: 'Instant messaging support',
      info: '+91 98765 43210',
      availability: '24/7 Available',
      action: 'Chat Now',
      color: 'bg-[#FFD700]'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Detailed written consultation',
      info: 'support@pandittripathi.com',
      availability: 'Response within 2 hours',
      action: 'Send Email',
      color: 'bg-[#FF9933]'
    },
    {
      icon: Video,
      title: 'Video Consultation',
      description: 'Personalized virtual guidance',
      info: 'Book a session',
      availability: 'Appointment based',
      action: 'Schedule Call',
      color: 'bg-[#321414]'
    }
  ];

  const supportTopics = [
    {
      icon: HelpCircle,
      title: 'General Inquiries',
      description: 'Questions about our services and Vedic approach'
    },
    {
      icon: FileText,
      title: 'Booking Assistance',
      description: 'Support with scheduling consultations'
    },
    {
      icon: Phone,
      title: 'Technical Support',
      description: 'Help with website or app issues'
    },
    {
      icon: MessageCircle,
      title: 'Follow-up Sessions',
      description: 'Queries about past consultations'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFF5E6]">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#FFF5E6] to-[#FFEFD5] py-20 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#FF9933_1px,transparent_1px)] bg-[length:12px_12px] opacity-10"></div>
          <div className="absolute top-10 left-10 text-[#FF9933] text-5xl md:text-7xl animate-pulse">✧</div>
          <div className="absolute bottom-10 right-10 text-[#FF9933] text-5xl md:text-7xl animate-pulse">✦</div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#321414] mb-6">
                Connect with Us
              </h1>
              <p className="text-lg md:text-xl text-[#321414]/90 leading-relaxed">
                Whether you have questions about our Vedic services or need spiritual guidance, 
                our dedicated team is here to assist with compassion and expertise.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#321414] mb-4">
                Choose Your Support Channel
              </h2>
              <p className="text-lg md:text-xl text-[#321414]/80">
                Connect with us in the way that suits you best
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                
                return (
                  <Card 
                    key={index} 
                    className="group relative overflow-hidden border border-[#FF9933]/20 hover:border-[#FF5722]/40 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-white/95 hover:bg-white"
                  >
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#FFD700] to-[#FF5722] group-hover:h-2 transition-all duration-300"></div>
                    <CardHeader className="pb-4 pt-6">
                      <div className={`w-14 h-14 ${method.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm`}>
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <CardTitle className="text-center text-xl md:text-2xl font-semibold text-[#321414] group-hover:text-[#FF5722] transition-colors">
                        {method.title}
                      </CardTitle>
                      <CardDescription className="text-center text-[#321414]/80">{method.description}</CardDescription>
                    </CardHeader>
                    
                    <CardContent className="text-center space-y-3">
                      <p className="font-semibold text-[#321414] text-lg">{method.info}</p>
                      <p className="text-sm text-[#321414]/70">{method.availability}</p>
                      <Button className="w-full bg-gradient-to-r from-[#FF9933] to-[#FF5722] hover:from-[#FF5722] hover:to-[#FF9933] text-white font-semibold rounded-lg">
                        {method.action}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 md:py-20 bg-[#FFF5E6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
              {/* Form */}
              <div className="order-1">
                <h2 className="text-3xl md:text-4xl font-bold text-[#321414] mb-6">
                  Send Us a Message
                </h2>
                <p className="text-[#321414]/80 mb-8 text-lg leading-relaxed">
                  Share your queries or concerns, and our team will respond promptly with tailored guidance.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#321414] mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full border-[#FF9933]/40 focus:border-[#FF5722] focus:ring-[#FF5722]/20"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#321414] mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full border-[#FF9933]/40 focus:border-[#FF5722] focus:ring-[#FF5722]/20"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#321414] mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full border-[#FF9933]/40 focus:border-[#FF5722] focus:ring-[#FF5722]/20"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-[#321414] mb-2">
                      Subject *
                    </label>
                    <Select onValueChange={handleSelectChange('subject')}>
                      <SelectTrigger className="w-full border-[#FF9933]/40 focus:border-[#FF5722] focus:ring-[#FF5722]/20">
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="booking">Booking Assistance</SelectItem>
                        <SelectItem value="services">Service Information</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="followup">Follow-up Session</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="urgency" className="block text-sm font-medium text-[#321414] mb-2">
                      Urgency Level
                    </label>
                    <Select onValueChange={handleSelectChange('urgency')}>
                      <SelectTrigger className="w-full border-[#FF9933]/40 focus:border-[#FF5722] focus:ring-[#FF5722]/20">
                        <SelectValue placeholder="Select urgency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low - General question</SelectItem>
                        <SelectItem value="medium">Medium - Need response within 24 hours</SelectItem>
                        <SelectItem value="high">High - Urgent assistance needed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#321414] mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full border-[#FF9933]/40 focus:border-[#FF5722] focus:ring-[#FF5722]/20"
                      placeholder="Describe your query or how we can assist you..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-[#FF9933] to-[#FF5722] hover:from-[#FF5722] hover:to-[#FF9933] text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Support Topics & Info */}
              <div className="order-2 space-y-6">
                <Card className="border-[#FF9933]/20 shadow-lg rounded-2xl bg-white/95">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl md:text-3xl font-semibold text-[#321414]">
                      Common Support Topics
                    </CardTitle>
                    <CardDescription className="text-[#321414]/80">
                      Explore our most frequently asked questions
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {supportTopics.map((topic, index) => {
                      const IconComponent = topic.icon;
                      
                      return (
                        <div key={index} className="flex items-start space-x-4 p-4 bg-[#FFF5E6] rounded-lg transition-all duration-300 hover:bg-[#FFEFD5] hover:shadow-sm">
                          <div className="w-10 h-10 bg-[#FF9933]/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-5 h-5 text-[#FF5722]" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-[#321414] mb-1">{topic.title}</h3>
                            <p className="text-sm text-[#321414]/80">{topic.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>

                <Card className="border-[#FF9933]/20 shadow-lg rounded-2xl bg-gradient-to-br from-[#FFF5E6] to-[#FFEFD5]">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl md:text-3xl font-semibold text-[#321414]">
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-[#FF5722] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-[#321414]">Phone Support</p>
                        <p className="text-[#321414]/80">+91 98765 43210</p>
                        <p className="text-sm text-[#321414]/70">Available 9 AM - 9 PM IST</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-[#FF5722] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-[#321414]">Email Support</p>
                        <p className="text-[#321414]/80">support@pandittripathi.com</p>
                        <p className="text-sm text-[#321414]/70">Response within 2 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-[#FF5722] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-[#321414]">Office Address</p>
                        <p className="text-[#321414]/80">123 Jyotish Marg<br />Ujjain, India - 456010</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Clock className="w-6 h-6 text-[#FF5722] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-[#321414]">Business Hours</p>
                        <p className="text-[#321414]/80">Monday - Sunday<br />9:00 AM - 9:00 PM IST</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Support */}
        <section className="py-16 bg-gradient-to-br from-[#FF5722] to-[#FF9933] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#FFD700_1px,transparent_1px)] bg-[length:12px_12px] opacity-10"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Urgent Support?</h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              For immediate spiritual guidance or urgent queries, 
              reach out to our team for prompt and compassionate assistance.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-[#FF5722] hover:bg-[#FFEFD5] px-8 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Emergency Line
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 px-8 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Now
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <SupportBox />
    </div>
  );
}