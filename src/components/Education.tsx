
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const educationItems = [
    {
      degree: "B.E. in Information Science & Engineering",
      institution: "R.V. Institute of Technology",
      year: "2023 - 2027 (Ongoing)",
      description: "Currently pursuing a Bachelor's degree in Information Science & Engineering, focusing on computer science fundamentals, software development, and information systems."
    },
    {
      degree: "12th Grade",
      institution: "Vijaya Composite PU College",
      year: "2023",
      score: "95.6%",
      description: "Completed higher secondary education with a focus on Science and Mathematics, achieving academic excellence."
    },
    {
      degree: "10th Grade",
      institution: "Aradhana Academy",
      year: "2021",
      score: "94.4%",
      description: "Completed secondary education with distinction, developing a strong foundation in core subjects."
    }
  ];

  return (
    <section id="education" className="section py-20">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
          My academic journey and educational qualifications that have shaped my technical foundation.
        </p>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:translate-x-px"></div>
          
          {/* Education items */}
          {educationItems.map((item, index) => (
            <div key={index} className="relative mb-12 animate-fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
              <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-primary transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-background"></div>
                </div>
                
                {/* Content */}
                <div className="md:w-1/2 pl-10 md:pl-0 md:pr-10 md:text-right">
                  <Card className="border border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-primary">{item.degree}</h3>
                      <h4 className="font-medium mb-3">{item.institution}</h4>
                      <div className="flex items-center gap-2 mb-3 text-foreground/70 text-sm">
                        <Calendar size={14} />
                        <span>{item.year}</span>
                      </div>
                      {item.score && (
                        <div className="mb-3 font-medium">
                          Score: <span className="text-primary">{item.score}</span>
                        </div>
                      )}
                      <p className="text-foreground/80 text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Empty space for the other side */}
                <div className={`hidden md:block md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
