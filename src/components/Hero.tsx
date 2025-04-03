
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Mail, Phone, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen pt-28 pb-20 flex items-center justify-center">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
              H M AJAY
            </h1>
            <h2 className="text-2xl md:text-3xl text-primary font-semibold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              UG IT ENGINEER
            </h2>
            
            <div className="flex flex-col space-y-3 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-primary" />
                <span>JP Nagar, Bengaluru</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-primary" />
                <a href="mailto:ajaymanjunath25@gmail.com" className="hover:text-primary transition-colors">
                  ajaymanjunath25@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-primary" />
                <a href="tel:+917892396314" className="hover:text-primary transition-colors">
                  +91 789 239 6314
                </a>
              </div>
            </div>
            
            <p className="text-lg text-foreground/80 mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
              I am a strong, skillful, and self-organized IT engineer specializing in Python, C, and Java. I have working knowledge of Cloud Computing and Generative AI. Additionally, I have a solid understanding of Object-Oriented Programming (OOP). Passionate about programming, I continuously seek to improve and streamline processes to enhance efficiency and reliability.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button className="gap-2" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Contact Me
              </Button>
              <Button 
                variant="outline" 
                className="gap-2" 
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/resume_ajay.pdf';
                  link.download = 'HM_Ajay_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <Download size={16} />
                Download Resume
              </Button>
            </div>
          </div>
          
          {/* Removed the circular "A" image that was here */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
