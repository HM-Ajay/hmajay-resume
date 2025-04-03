
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            {/* Removed the Ajay.dev text that was here */}
          </div>
          
          <div className="text-center md:text-right">
            <div className="text-foreground/70 text-sm flex items-center justify-center md:justify-end gap-1">
              <span>Made with</span>
              <Heart size={14} className="text-primary fill-primary" />
              <span>by Ajay &copy; {currentYear}</span>
            </div>
            <div className="text-xs text-foreground/50 mt-1">
              ATS-Friendly Portfolio for IT Engineering Professionals
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
