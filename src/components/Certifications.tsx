import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";

const certifications = [
  {
    title: "Complete Machine Learning & Data Science Bootcamp 2022",
    platform: "Udemy",
    instructors: "Andrei Neagoie & Daniel Bourke",
    duration: "44 hours",
    date: "March 24, 2022",
    url: "https://ude.my/UC-e088f93e-d62e-4aa5-a148-090eb4158da0",
    reference: "0004",
  },
  {
    title: "Programming for Everybody (Getting Started with Python)",
    platform: "Coursera",
    instructors: "University of Michigan",
    duration: "Self-paced",
    date: "2022",
    url: "#",
    reference: "",
  },
];

const Certifications = () => {
  const { t } = useTranslation();

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{t('certifications.title')}</span>
          </h2>
          <p className="text-muted-foreground">{t('certifications.subtitle')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="p-6 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Award className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                  <p className="text-sm text-primary font-medium mb-1">{cert.platform}</p>
                  <p className="text-sm text-muted-foreground mb-1">{cert.instructors}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span>{cert.duration}</span>
                    <span>•</span>
                    <span>{cert.date}</span>
                  </div>
                  {cert.reference && (
                    <p className="text-xs text-muted-foreground mb-3">Reference: {cert.reference}</p>
                  )}
                  {cert.url !== "#" && (
                    <Button asChild variant="outline" size="sm" className="gap-2">
                      <a href={cert.url} target="_blank" rel="noopener noreferrer">
                        View Certificate
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
