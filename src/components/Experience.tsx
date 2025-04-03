
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Google Developer Students Club",
      period: "2023",
      description: "Learned and worked with various Google Cloud technologies and AI tools.",
      achievements: [
        "Google Compute Engine (GCE): Created virtual machines in Google's data centers.",
        "Google Kubernetes Engine (GKE): Managed Kubernetes services for containerized applications.",
        "Google Cloud Storage: Created object storage for efficient data retrieval.",
        "Generative AI: Gained understanding of AI Image Generation."
      ]
    },
    {
      title: "Hackathons & Open-Source Contributions",
      period: "2024",
      description: "Actively participated in coding challenges and open-source development.",
      achievements: [
        "Participated in Smart India Hackathon (SIH 2024), developing a blockchain-based solution for the Paperless Scholarship Scheme.",
        "Hosted a college-level coding challenge.",
        "Worked on mini-projects that contribute to open-source.",
        "Active in competitive programming on LeetCode and HackerRank."
      ]
    }
  ];

  return (
    <section id="experience" className="section py-20">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
          My practical experience and involvement in various technical activities and communities.
        </p>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden animate-fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full shrink-0">
                    <Briefcase size={24} className="text-primary" />
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                      <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-foreground/70">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    
                    <p className="mb-4 text-foreground/80">{exp.description}</p>
                    
                    <div>
                      <h4 className="text-sm uppercase tracking-wider mb-3 text-foreground/70">Key Achievements</h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-3">
                            <CheckCircle size={16} className="text-primary mt-1 shrink-0" />
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg font-medium italic text-primary">
            "Seeking opportunities to learn and grow."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
