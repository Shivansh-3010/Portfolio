import {
  Brain,
  Cloud,
  BarChart3,
  GraduationCap,
} from "lucide-react";

export default function Certifications() {
  const certifications = [
    {
      title: "AI & Machine Learning",
      icon: Brain,
      items: [
        {
          name: "Generative AI with Large Language Models",
          file: "/certificates/generative-ai-llms.pdf",
        },
        {
          name: "Supervised Machine Learning",
          file: "/certificates/supervised-machine-learning.pdf",
        },
        {
          name: "Prompt Engineering for ChatGPT",
          file: "/certificates/prompt-engineering-chatgpt.pdf",
        },
      ],
    },

    {
      title: "Cloud Computing & AWS",
      icon: Cloud,
      items: [
        {
          name: "Architecting Solutions on AWS",
          file: "/certificates/aws-architecting-solutions.pdf",
        },
        {
          name: "NPTEL Cloud Computing (Elite)",
          file: "/certificates/nptel-cloud-computing.pdf",
        },
      ],
    },

    {
      title: "Data Analytics & BI",
      icon: BarChart3,
      items: [
        {
          name: "SAP Analytics Cloud",
          file: "/certificates/sap-analytics-cloud.pdf",
        },
        {
          name: "SQL for Data Science",
          file: "/certificates/sql-for-data-science.pdf",
        },
      ],
    },

    {
      title: "Training & Internship",
      icon: GraduationCap,
      items: [
        {
          name: "Data Science Internship - EdiGlobe",
          file: "/certificates/ediglobe-internship.pdf",
        },
        {
          name: "Python, Data Science & ML - CipherSchools",
          file: "/certificates/cipherschools-data-science-ml.pdf",
        },
      ],
    },
  ];

  return (
    <section
      id="certifications"
      className="certifications-section"
    >
      <div className="container-custom">

        <div className="certifications-heading">
          <p className="certifications-subtitle">
            PROFESSIONAL DEVELOPMENT
          </p>

          <h2 className="certifications-title">
            Certifications & Learning
          </h2>
        </div>

        <div className="certifications-grid">

          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="certification-card"
            >
              <div className="cert-header">
                <cert.icon className="cert-icon" />
                <h3>{cert.title}</h3>
              </div>

              <div className="cert-list">

                {cert.items.map((item) => (
                  <div
                    key={item.name}
                    className="cert-item"
                  >
                    <span>{item.name}</span>

                    <a
                      href={item.file}
                      target="_blank"
                      className="cert-btn"
                    >
                      View
                    </a>
                  </div>
                ))}

              </div>
            </div>
          ))}

        </div>

        <div className="cert-stats">

          <div className="cert-stat-card">
            <h3>15+</h3>
            <p>Certifications</p>
          </div>

          <div className="cert-stat-card">
            <h3>6+</h3>
            <p>Domains</p>
          </div>

          <div className="cert-stat-card">
            <h3>2</h3>
            <p>Internships</p>
          </div>

          <div className="cert-stat-card">
            <h3>AWS</h3>
            <p>Cloud Certified</p>
          </div>

        </div>

      </div>
    </section>
  );
}