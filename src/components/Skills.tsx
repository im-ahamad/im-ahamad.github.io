import { useTranslation } from "react-i18next";
import { Code, Database, Users, Languages } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillsData = [
  {
    category: "Programming Languages",
    icon: Code,
    skills: ["C", "Python", "JavaScript(JS)", "TypeScript(TS)"],
  },
  {
    category: "Libraries & Frameworks",
    icon: Code,
    skills: ["NumPy", "Pandas", "Scikit-Learn", "React.js", "Next.js", "Vite.js",],
  },
  {
    category: "Databases & Tools",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Git", "GitHub"],
  },
  {
    category: "Language Skills",
    icon: Languages,
    skills: [
      "Bangla -> Native",
      "English -> Intermediate",
      "Urdu/Hindi -> Intermediate",
      "Chinese -> Begainer",
    ],
  },
  {
    category: "Soft Skills",
    icon: Users,
    skills: ["Leadership", "Communication", "Adaptability", "Teamwork"],
  },
];

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{t("skills.title")}</span>
          </h2>
          <p className="text-muted-foreground">{t("skills.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="p-6 card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold pt-2">
                    {category.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
