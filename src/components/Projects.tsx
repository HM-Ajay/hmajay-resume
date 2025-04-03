
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "To-Do List Application",
      description: "A dynamic and responsive to-do list application that allows users to add, edit, mark as complete, and delete tasks. The app persists data using local storage, ensuring tasks remain even after a page refresh.",
      technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "LocalStorage API"],
      features: [
        "Task creation with input field",
        "Edit, delete, and mark tasks as completed",
        "Persistent local storage functionality",
        "Task filtering (All, Pending, Completed)",
        "Smooth UI animations for a better experience"
      ],
      demo: "https://example.com/todo-app",
      github: "https://github.com/ajaymanjunath/todo-app"
    },
    {
      title: "Online Voting System",
      description: "An online voting system designed for secure and efficient elections. It enables voters to cast their votes electronically with authentication mechanisms in place.",
      technologies: ["Java", "Spring Boot", "MySQL", "HTML/CSS", "JavaScript"],
      features: [
        "Secure user authentication",
        "Real-time vote tallying",
        "User-friendly interface",
        "Ensures integrity and confidentiality of votes"
      ],
      github: "https://github.com/ajaymanjunath/online-voting-system"
    }
  ];

  return (
    <section id="projects" className="section bg-secondary/50 py-20">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
          Showcasing my practical skills through projects that demonstrate my ability to build functional applications.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col animate-fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
              <CardContent className="p-6 flex-grow">
                <h3 className="text-2xl font-semibold mb-3 text-primary">{project.title}</h3>
                <p className="mb-4 text-foreground/80">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm uppercase tracking-wider mb-2 text-foreground/70">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm uppercase tracking-wider mb-2 text-foreground/70">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-primary mt-1 shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              
              <CardFooter className="border-t border-border/30 p-6 bg-secondary/30 flex gap-3">
                {project.demo && (
                  <Button variant="default" size="sm" className="gap-2">
                    <ExternalLink size={14} />
                    Live Demo
                  </Button>
                )}
                {project.github && (
                  <Button variant="outline" size="sm" className="gap-2">
                    <Github size={14} />
                    GitHub Repo
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
