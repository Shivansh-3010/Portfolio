import {
  Briefcase,
  Brain,
  Database,
  GraduationCap,
} from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="pt-52 pb-32"
    >
      <div className="container-custom max-w-6xl">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="experience-subtitle">
            PROFESSIONAL JOURNEY
          </p>

          <h2 className="experience-title">
            Experience
          </h2>

        </div>

        <div className="experience-container">

          {/* AquaVerse */}

          <div className="experience-card">

            <div className="experience-header">

              <div className="experience-icon">
                <Briefcase />
              </div>

              <div>
                <h3>Team Lead – AquaVerse-AI</h3>
                <span>Aug 2025 – May 2026</span>
              </div>

            </div>

            <ul>
              <li>
                Led development of an AI-powered ocean and beach safety platform.
                Managed planning, integration, testing, deployment, and team coordination.
                Built AI chatbot assistance, predictive forecasting, and geospatial features.
              </li>
            </ul>

            <div className="experience-tags">
              <span>Flutter</span>
              <span>AI</span>
              <span>APIs</span>
              <span>Leadership</span>
              <span>Geospatial Data</span>
            </div>

          </div>

          {/* Outlier */}

          <div className="experience-card">

            <div className="experience-header">

              <div className="experience-icon">
                <Brain />
              </div>

              <div>
                <h3>LLM Trainer (Freelance) – Outlier</h3>
                <span>Aug 2024 – Dec 2024</span>
              </div>

            </div>

            <ul>
              <li>
                Contributed to training and evaluation of Large Language Models. Performed prompt engineering and supervised fine-tuning. Reviewed and improved AI-generated code quality, reasoning, and overall performance.
              </li>
            </ul>

            <div className="experience-tags">
              <span>LLMs</span>
              <span>Generative AI</span>
              <span>Python</span>
              <span>Java</span>
              <span>C++</span>
            </div>

          </div>

          {/* EdiGlobe */}

          <div className="experience-card">

            <div className="experience-header">

              <div className="experience-icon">
                <Database />
              </div>

              <div>
                <h3>Data Science Intern – EdiGlobe</h3>
                <span>Dec 2024 – Feb 2025</span>
              </div>

            </div>

            <ul>
              <li>
                Worked on data analysis and machine learning projects.
             
                Applied Python, SQL, and predictive analytics techniques.
             
                Performed EDA, visualization, and business intelligence tasks.
              </li>
            </ul>

            <div className="experience-tags">
              <span>Python</span>
              <span>SQL</span>
              <span>Machine Learning</span>
              <span>Analytics</span>
            </div>

          </div>

          {/* CipherSchools */}

          <div className="experience-card">

            <div className="experience-header">

              <div className="experience-icon">
                <GraduationCap />
              </div>

              <div>
                <h3>Summer Trainee – CipherSchools</h3>
                <span>Jun 2024 – Jul 2024</span>
              </div>

            </div>

            <ul>
              <li>
                Learned Data Science and Machine Learning fundamentals.
             
                Built analytical dashboards using Tableau.
            
                Applied Python, NumPy, Pandas, and analytics concepts.
              </li>
            </ul>

            <div className="experience-tags">
              <span>Python</span>
              <span>Pandas</span>
              <span>NumPy</span>
              <span>Tableau</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}