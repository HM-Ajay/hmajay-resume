
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "C", "JavaScript", "HTML/CSS"]
    },
    {
      title: "Technologies",
      skills: ["Cloud Computing", "Object-Oriented Programming", "Arduino IDE", "Git/GitHub"]
    },
    {
      title: "Artificial Intelligence",
      skills: ["Generative AI", "AI Image Generation"]
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Time Management", "Fast Problem Understanding", "Task Prioritization"]
    }
  ];

  return (
    <section id="skills" className="section bg-secondary/50 py-20">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
          My technical expertise and skillset that I've developed through education, projects, and hands-on experience.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
              <div className="bg-primary text-primary-foreground p-4">
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-primary mt-0.5" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Languages</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-background rounded-lg p-6 border border-border/50 shadow-sm flex flex-col items-center animate-fade-in">
              <div className="font-semibold mb-2">English</div>
              <div className="text-foreground/70">Fluent</div>
            </div>
            <div className="bg-background rounded-lg p-6 border border-border/50 shadow-sm flex flex-col items-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="font-semibold mb-2">Kannada</div>
              <div className="text-foreground/70">Fluent</div>
            </div>
            <div className="bg-background rounded-lg p-6 border border-border/50 shadow-sm flex flex-col items-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="font-semibold mb-2">Hindi</div>
              <div className="text-foreground/70">Intermediate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
