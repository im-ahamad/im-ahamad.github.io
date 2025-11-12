import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Code2, FlaskConical, BarChart3, Brain, Dna } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projectsData = [
  {
    id: 1,
    icon: Dna,
    title: "DNA Sequence Analyzer",
    tags: ["Streamlit", "Biopython", "Python"],
    overview:
      "Analyzes DNA sequences instantly, showing nucleotide counts, GC content, complement, and reverse complement.",
    problem:
      "Manual DNA analysis or heavy software is slow; this tool makes it fast and accessible via a web interface.",
    implementation: [
      "Interactive interface with Streamlit",
      "Sequence processing with Biopython",
      "Supports plain DNA or FASTA input",
      "Calculates length, GC content, and nucleotide composition",
      "Generates complement and reverse complement sequences",
    ],
    impact:
      "Enables beginners to quickly test and visualize DNA features without installing complex tools.",
    color: "from-green-500 to-emerald-600",
  },
  {
    id: 2,
    icon: FlaskConical,
    title: "Protein Sequence Similarity Checker",
    tags: ["Biopython", "Streamlit", "Algorithms"],
    overview:
      "Compares two protein sequences and calculates alignment scores and similarity.",
    problem:
      "Protein comparison tools are often complex; this provides a simple web-based solution.",
    implementation: [
      "Sequence alignment using Biopython pairwise2",
      "Simple Streamlit interface for input",
      "Displays aligned sequences with similarity scores",
      "Supports global and local alignment algorithms",
    ],
    impact:
      "Helps users visualize protein similarity quickly without heavy bioinformatics tools.",
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: 3,
    icon: BarChart3,
    title: "Gene Expression Data Visualizer",
    tags: ["Python", "Pandas", "Seaborn", "Matplotlib"],
    overview:
      "Visualizes gene expression datasets using heatmaps, PCA, and clustering.",
    problem:
      "Raw gene expression data is hard to interpret; visualizations make patterns clear.",
    implementation: [
      "Built with Python, Pandas, Seaborn, Matplotlib",
      "CSV input with genes as rows",
      "Generates heatmaps and PCA plots",
      "Supports data inspection and summaries",
    ],
    impact:
      "Simplifies exploration of biological datasets and highlights expression patterns quickly.",
    color: "from-purple-500 to-pink-600",
  },
  {
    id: 4,
    icon: Brain,
    title: "Protein Secondary Structure Predictor (AI)",
    tags: ["TensorFlow", "LSTM", "Neural Networks"],
    overview:
      "Predicts protein secondary structures (Helix, Sheet, Coil) from amino acid sequences using AI.",
    problem:
      "Experimental structure determination is slow; AI predicts structures computationally.",
    implementation: [
      "Used sequence-structure datasets",
      "Preprocessed sequences numerically",
      "Built a Bidirectional LSTM in TensorFlow",
      "Predicted structure labels for residues",
      "Evaluated accuracy with a test set",
    ],
    impact:
      "Shows AI’s role in structural biology and end-to-end bioinformatics pipelines.",
    color: "from-orange-500 to-red-600",
  },
  {
    id: 5,
    icon: Code2,
    title: "DNA Mutation Effect Predictor (ML)",
    tags: ["Scikit-Learn", "Random Forest", "ClinVar"],
    overview:
      "Predicts whether DNA mutations are benign or pathogenic using machine learning.",
    problem:
      "Experimental testing of mutations is costly; ML provides faster insights.",
    implementation: [
      "Collected annotated mutations from ClinVar and Kaggle",
      "Encoded mutation features for ML",
      "Trained Random Forest classifier",
      "Cross-validation for accuracy",
      "Displayed feature importance",
    ],
    impact:
      "Connects AI with genomics to predict disease-related variants computationally.",
    color: "from-indigo-500 to-violet-600",
  },
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{t("projects.title")}</span>
          </h2>
          <p className="text-muted-foreground">{t("projects.subtitle")}</p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
              >
                <Card
                  className="p-6 rounded-2xl border border-gray-200/20 dark:border-gray-700/20 shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300
                  bg-white/10 dark:bg-gray-900/30 backdrop-blur-lg"
                >
                  {/* Icon */}
                  <div
                    className={`flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br ${project.color} shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>

                  {/* Title & Tags */}
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-gray-200/20 dark:bg-gray-700/20 text-gray-900 dark:text-white"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Overview */}
                  <p className="text-gray-800 dark:text-gray-200 text-sm mb-3">
                    {project.overview}
                  </p>

                  {/* Problem */}
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                    <span className="font-semibold">💡 Problem: </span>
                    {project.problem}
                  </p>

                  {/* Implementation */}
                  <div className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                    <span className="font-semibold">⚙️ Implementation:</span>
                    <ul className="list-disc ml-5 mt-1 space-y-1">
                      {project.implementation.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact */}
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    <span className="font-semibold">🚀 Impact: </span>
                    {project.impact}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
