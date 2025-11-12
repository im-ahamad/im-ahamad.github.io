import { useTranslation } from "react-i18next";
import { Brain, Dna, GraduationCap, Microscope } from "lucide-react";

import { Card } from "@/components/ui/card";

const interests = [
  {
    title: "Artificial Intelligence & Machine Learning",
    icon: Brain,
  },
  {
    title: "Bioinformatics and Healthcare Technology",
    icon: Dna,
  },
  {
    title: "Personalized Learning Systems",
    icon: GraduationCap,
  },
  {
    title: "AI-based Protein Structure Prediction",
    icon: Microscope,
  },
];

const AcademicInterests = () => {
  const { t } = useTranslation();

  return (
    <section id="interests" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{t("interests.title")}</span>
          </h2>
          <p className="text-muted-foreground">{t("interests.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <Card
                key={index}
                className="p-6 card-hover text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="p-4 rounded-full gradient-tech text-white">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold">{interest.title}</h3>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AcademicInterests;
