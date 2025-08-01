"use client";

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
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
    // Add your form submission logic here
  };

  const contactMethods = [
    { icon: Phone, title: 'Phone Support', description: 'Speak directly with Abhishek Tripathi', info: '+91 9827175769', availability: '9 AM - 9 PM IST', action: 'Call Now', color: 'bg-[#FF5722]' },
    { icon: MessageCircle, title: 'WhatsApp Chat', description: 'Instant messaging support', info: '+91 9827175769', availability: '24/7 Available for Messages', action: 'Chat on WhatsApp', color: 'bg-[#25D366]' },
    { icon: Mail, title: 'Email Support', description: 'For detailed written consultations', info: 'lucky.tipo@gmail.com', availability: 'Response within 4-6 hours', action: 'Send Email', color: 'bg-[#FF9933]' },
    { icon: Video, title: 'Video Consultation', description: 'Personalized virtual guidance', info: 'Book a session', availability: 'By Appointment Only', action: 'Schedule a Call', color: 'bg-[#321414]' }
  ];

  const supportTopics = [
    { icon: HelpCircle, title: 'General Inquiries', description: 'Questions about our services, approach, or legacy.' },
    { icon: FileText, title: 'Booking Assistance', description: 'Support with scheduling or managing your consultation.' },
    { icon: Clock, title: 'Follow-up Sessions', description: 'Questions or clarifications about a past consultation.' },
    { icon: Sparkles, title: 'Service Information', description: 'Detailed information on specific services.' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#FFF9F2] to-white">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-24 bg-gradient-to-br from-[#FFF5EB] to-[#FFEBD5] overflow-hidden">
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <Sparkles className="absolute top-20 left-1/4 w-8 h-8 text-[#FF5722] animate-pulse" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-[#FFD700] to-[#FF9933] rounded-full border border-[#FF5722]/40 shadow-lg mb-6">
                <Sparkles className="w-6 h-6 text-[#321414]" />
                <span className="ml-2 text-base font-bold tracking-wide text-[#321414]">Guidance & Support</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-[#321414] mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF5722] to-[#FF9933]">
                  How Can We
                </span>
                <span className="block">Help You Today?</span>
              </h1>
              <p className="text-lg md:text-xl text-[#321414]/90 leading-relaxed">
                Whether you need spiritual guidance, have a question, or require assistance, our team is here to support you with compassion and expertise.
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
              <p className="text-lg text-[#321414]/80 max-w-2xl mx-auto">
                Connect with us in the way that feels most comfortable for you.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <Card key={index} className="group text-center p-6 overflow-hidden border border-[#FFD700]/50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-white flex flex-col">
                    <CardHeader className="p-0">
                      <div className={`w-14 h-14 ${method.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm`}>
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <CardTitle className="text-xl font-semibold text-[#321414] group-hover:text-[#FF5722] transition-colors">{method.title}</CardTitle>
                      <CardDescription className="text-[#321414]/80 mt-1">{method.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 mt-4 flex flex-col flex-grow">
                      <div className="flex-grow space-y-2">
                        <p className="font-semibold text-[#321414] text-base">{method.info}</p>
                        <p className="text-sm text-[#321414]/70">{method.availability}</p>
                      </div>
                      <Button className="w-full mt-4 bg-gradient-to-r from-[#FF9933] to-[#FF5722] hover:from-[#FF5722] hover:to-[#E64A19] text-white font-semibold rounded-lg">
                        {method.action}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 md:py-20 bg-[#FFF9F2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12 md:gap-16">
              {/* Form */}
              <div className="lg:col-span-3">
                <h2 className="text-3xl md:text-4xl font-bold text-[#321414] mb-4">
                  Send Us a Message
                </h2>
                <p className="text-[#321414]/80 mb-8 text-lg leading-relaxed">
                  Share your questions or concerns, and we will respond promptly with personalized guidance.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#321414] mb-2">Full Name *</label>
                      <Input id="name" name="name" type="text" required value={formData.name} onChange={handleInputChange} className="w-full border-[#FFD700]/80 focus:border-[#FF5722] focus:ring-[#FF5722]/20" placeholder="Your full name"/>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#321414] mb-2">Email Address *</label>
                      <Input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} className="w-full border-[#FFD700]/80 focus:border-[#FF5722] focus:ring-[#FF5722]/20" placeholder="your@email.com"/>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-[#321414] mb-2">Subject *</label>
                    <Select onValueChange={handleSelectChange('subject')}>
                      <SelectTrigger className="w-full border-[#FFD700]/80 focus:border-[#FF5722] focus:ring-[#FF5722]/20 text-[#321414]/80"><SelectValue placeholder="Select a topic" /></SelectTrigger>
                      <SelectContent>
                        {supportTopics.map(topic => <SelectItem key={topic.title} value={topic.title}>{topic.title}</SelectItem>)}
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#321414] mb-2">Message *</label>
                    <Textarea id="message" name="message" rows={5} required value={formData.message} onChange={handleInputChange} className="w-full border-[#FFD700]/80 focus:border-[#FF5722] focus:ring-[#FF5722]/20" placeholder="Describe your query..."/>
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-[#FF9933] to-[#FF5722] hover:from-[#FF5722] hover:to-[#E64A19] text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Support Topics & Info */}
              <div className="lg:col-span-2 space-y-6">
                <Card className="border border-[#FFD700]/50 shadow-lg rounded-2xl bg-white p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl font-semibold text-[#321414]">Common Support Topics</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-4">
                    {supportTopics.map((topic, index) => {
                      const IconComponent = topic.icon;
                      return (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-[#FFF5EB] rounded-full flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-5 h-5 text-[#FF5722]" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-[#321414]">{topic.title}</h3>
                            <p className="text-sm text-[#321414]/80">{topic.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>
                <Card className="border border-[#FFD700]/50 shadow-lg rounded-2xl bg-white p-6">
                   <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl font-semibold text-[#321414]">Office Details</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-4">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-[#FF5722] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-[#321414]">Our Center</p>
                        <p className="text-[#321414]/80">21/1, Mahakal Marg, Gali No. 1<br/>Infront Of Mahakal Temple, Ujjain (M.P) - 456006</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Clock className="w-6 h-6 text-[#FF5722] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-[#321414]">Business Hours</p>
                        <p className="text-[#321414]/80">Monday - Sunday: 9 AM - 9 PM IST</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
