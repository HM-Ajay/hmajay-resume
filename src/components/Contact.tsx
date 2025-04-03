
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section bg-secondary/50 py-20">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
          Feel free to reach out if you'd like to discuss opportunities, collaborations, or just have a conversation.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6 animate-fade-in">
            <Card className="border border-border/50 shadow-sm overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <MapPin size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-foreground/70">Location</div>
                      <div>JP Nagar, Bengaluru</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Mail size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-foreground/70">Email</div>
                      <a href="mailto:ajaymanjunath25@gmail.com" className="hover:text-primary transition-colors">
                        ajaymanjunath25@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Phone size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-foreground/70">Phone</div>
                      <a href="tel:+917892396314" className="hover:text-primary transition-colors">
                        +91 789 239 6314
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Connect</h3>
                  <div className="flex gap-4">
                    <a 
                      href="https://linkedin.com/in/hmajay" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-linkedin hover:bg-linkedin/80 text-white p-3 rounded-full transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a 
                      href="https://github.com/ajaymanjunath" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-3 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <Card className="border border-border/50 shadow-sm overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name
                      </label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Your Email
                      </label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input id="subject" placeholder="Enter subject" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Enter your message" rows={5} />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
