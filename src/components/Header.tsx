
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-sm z-50 border-b border-border">
      <div className="container py-4 flex items-center justify-between">
        <a href="#hero" className="text-xl font-heading font-bold">
          Ajay<span className="text-primary">.dev</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('education')} 
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Education
          </button>
          <button 
            onClick={() => scrollToSection('projects')} 
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('experience')} 
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Experience
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-background py-4 border-t border-border animate-fade-in">
          <div className="container flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('about')} 
              className="py-2 text-left text-foreground/80 hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className="py-2 text-left text-foreground/80 hover:text-primary transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('education')} 
              className="py-2 text-left text-foreground/80 hover:text-primary transition-colors"
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="py-2 text-left text-foreground/80 hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('experience')} 
              className="py-2 text-left text-foreground/80 hover:text-primary transition-colors"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="py-2 text-left text-foreground/80 hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
