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
import { Phone, Mail, MapPin, Clock, MessageCircle, Video, FileText, HelpCircle } from 'lucide-react';

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
      color: 'bg-green-500'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Chat',
      description: 'Quick messaging support',
      info: '+91 98765 43210',
      availability: '24/7 Available',
      action: 'Chat Now',
      color: 'bg-green-600'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Detailed written consultation',
      info: 'info@pandittripathi.com',
      availability: 'Response within 2 hours',
      action: 'Send Email',
      color: 'bg-blue-500'
    },
    {
      icon: Video,
      title: 'Video Consultation',
      description: 'Face-to-face guidance',
      info: 'Book video session',
      availability: 'Appointment based',
      action: 'Schedule Call',
      color: 'bg-purple-500'
    }
  ];

  const supportTopics = [
    {
      icon: HelpCircle,
      title: 'General Inquiries',
      description: 'Questions about our services and approach'
    },
    {
      icon: FileText,
      title: 'Booking Assistance',
      description: 'Help with scheduling consultations'
    },
    {
      icon: Phone,
      title: 'Technical Support',
      description: 'Website or app related issues'
    },
    {
      icon: MessageCircle,
      title: 'Follow-up Sessions',
      description: 'Questions about previous consultations'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                We're Here to Help
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Have questions about our services? Need guidance on your spiritual journey? 
                Our dedicated support team is ready to assist you with compassionate care and expertise.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Choose Your Preferred Contact Method
              </h2>
              <p className="text-xl text-gray-600">
                We offer multiple ways to connect with us for your convenience
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                
                return (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                    <CardHeader className="pb-4">
                      <div className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-center text-xl">{method.title}</CardTitle>
                      <CardDescription className="text-center">{method.description}</CardDescription>
                    </CardHeader>
                    
                    <CardContent className="text-center space-y-3">
                      <p className="font-semibold text-gray-900">{method.info}</p>
                      <p className="text-sm text-gray-600">{method.availability}</p>
                      <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
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
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Form */}
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you as soon as possible. 
                  Please provide as much detail as possible so we can assist you better.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <Select>
                      <SelectTrigger>
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
                    <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                      Urgency Level
                    </label>
                    <Select>
                      <SelectTrigger>
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
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Please describe your question or how we can help you..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Support Topics & Info */}
              <div className="space-y-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl">Common Support Topics</CardTitle>
                    <CardDescription>
                      Most frequently asked about areas we can help you with
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {supportTopics.map((topic, index) => {
                        const IconComponent = topic.icon;
                        
                        return (
                          <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <IconComponent className="w-5 h-5 text-orange-600" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 mb-1">{topic.title}</h3>
                              <p className="text-sm text-gray-600">{topic.description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100">
                  <CardHeader>
                    <CardTitle className="text-2xl">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Phone Support</p>
                        <p className="text-gray-600">+91 98765 43210</p>
                        <p className="text-sm text-gray-500">Available 9 AM - 9 PM IST</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Email Support</p>
                        <p className="text-gray-600">info@pandittripathi.com</p>
                        <p className="text-sm text-gray-500">Response within 2 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Office Address</p>
                        <p className="text-gray-600">123 Spiritual Street<br />Sacred City, India - 110001</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Clock className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Business Hours</p>
                        <p className="text-gray-600">Monday - Sunday<br />9:00 AM - 9:00 PM IST</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Support */}
        <section className="py-16 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Need Immediate Assistance?</h2>
            <p className="text-xl text-orange-100 mb-8">
              For urgent spiritual guidance or emergency consultations, 
              we're available to provide immediate support and care.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-orange-600 hover:bg-orange-50 px-8"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Emergency Line
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 px-8"
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