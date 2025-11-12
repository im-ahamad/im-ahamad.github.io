import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { useTranslation } from "react-i18next";

const educationData = [
  {
    degree: "BE of Artificial Intelligence",
    institution: "Yunnan University",
    session: "2024 - 2028",
    board: "",
  },
  {
    degree: "HSC/Alim (Science)",
    institution: "Tamirul Millat Kamil Madrasha",
    session: "2021 - 2022",
    board: "Bangladesh Madrasah Education Board",
  },
  {
    degree: "SSC/Dakhil (Science)",
    institution: "Konabakhail Fazil Madrasha",
    session: "2019 - 2020",
    board: "Bangladesh Madrasah Education Board",
  },
];

const Education = () => {
  const { t } = useTranslation();

  return (
    <section id="education" className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{t('education.title')}</span>
          </h2>
          <p className="text-muted-foreground text-lg">{t('education.subtitle')}</p>
        </div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-accent to-primary opacity-20 hidden md:block" />
          
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div 
                key={index}
                className="relative animate-slide-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block z-10" />
                
                <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  {/* Content card */}
                  <div className={index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:col-start-2 md:pl-12'}>
                    <Card className="p-8 card-hover bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-2">
                      <div className="flex items-center gap-3 mb-4 justify-start md:justify-end" style={index % 2 === 0 ? {} : { justifyContent: 'flex-start' }}>
                        <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                          <GraduationCap className="h-6 w-6" />
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span className="font-medium">{edu.session}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-3 gradient-text">
                        {edu.degree}
                      </h3>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-primary font-semibold" style={index % 2 === 0 ? { justifyContent: 'flex-end' } : {}}>
                          <Award className="h-5 w-5" />
                          <span>{edu.institution}</span>
                        </div>
                        
                        {edu.board && (
                          <p className="text-sm text-muted-foreground">
                            {edu.board}
                          </p>
                        )}
                      </div>
                    </Card>
                  </div>
                  
                  {/* Empty space for alternating layout */}
                  <div className={`hidden md:block ${index % 2 === 0 ? 'md:col-start-2' : ''}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
