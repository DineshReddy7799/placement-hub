// src/app/materials/page.tsx
"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

// 🚀 MASSIVE, RELIABLE, UP-TO-DATE KNOWLEDGE CATALOG
const materialCatalog = [
  // --- APTITUDE & REASONING ---
  { id: "apt1", title: "Quantitative Aptitude Masterclass", category: "Practice", subject: "Aptitude", fileUrl: "https://www.indiabix.com/aptitude/questions-and-answers/" },
  { id: "apt2", title: "Logical & Reasoning Patterns", category: "Practice", subject: "Aptitude", fileUrl: "https://www.indiabix.com/logical-reasoning/questions-and-answers/" },
  { id: "apt3", title: "Verbal Ability & Grammar", category: "Practice", subject: "Aptitude", fileUrl: "https://www.indiabix.com/verbal-ability/questions-and-answers/" },
  { id: "apt4", title: "Data Interpretation Sets", category: "Practice", subject: "Aptitude", fileUrl: "https://www.indiabix.com/data-interpretation/questions-and-answers/" },

  // --- TCS (Ninja, Digital, CodeVita) ---
  { id: "tcs1", title: "TCS NQT Syllabus & Assessment Patterns", category: "Paper", subject: "TCS", fileUrl: "https://www.geeksforgeeks.org/tcs-nqt-recruitment-process/" },
  { id: "tcs2", title: "TCS Advanced Coding Questions", category: "Practice", subject: "TCS", fileUrl: "https://www.interviewbit.com/tcs-interview-questions/" },
  { id: "tcs3", title: "TCS CodeVita Target Questions", category: "Paper", subject: "TCS", fileUrl: "https://www.geeksforgeeks.org/tcs-codevita-interview-experience/" },

  // --- COGNIZANT (GenC & GenC Elevate) ---
  { id: "cog1", title: "Cognizant GenC Recruitment Process", category: "Paper", subject: "Cognizant", fileUrl: "https://www.geeksforgeeks.org/cognizant-recruitment-process/" },
  { id: "cog2", title: "Cognizant Technical Interview Archives", category: "Notes", subject: "Cognizant", fileUrl: "https://www.interviewbit.com/cognizant-interview-questions/" },

  // --- ACCENTURE ---
  { id: "acc1", title: "Accenture Cognitive Assessment Prep", category: "Practice", subject: "Accenture", fileUrl: "https://www.geeksforgeeks.org/accenture-recruitment-process/" },
  { id: "acc2", title: "Accenture Coding Questions 2025/2026", category: "Paper", subject: "Accenture", fileUrl: "https://www.interviewbit.com/accenture-interview-questions/" },

  // --- INFOSYS & CAPGEMINI ---
  { id: "inf1", title: "Infosys SP & DSE Exam Patterns", category: "Paper", subject: "Other MNCs", fileUrl: "https://www.geeksforgeeks.org/infosys-recruitment-process/" },
  { id: "cap1", title: "Capgemini Pseudocode & Game-Based Prep", category: "Practice", subject: "Other MNCs", fileUrl: "https://www.geeksforgeeks.org/capgemini-recruitment-process/" },

  // --- CORE CS SUBJECTS ---
  { id: "core1", title: "Database Management Systems (DBMS)", category: "Notes", subject: "Core", fileUrl: "https://www.geeksforgeeks.org/dbms/" },
  { id: "core2", title: "Operating Systems Fast-Track", category: "Notes", subject: "Core", fileUrl: "https://www.geeksforgeeks.org/operating-systems/" },
  { id: "core3", title: "Computer Networks Essentials", category: "Notes", subject: "Core", fileUrl: "https://www.geeksforgeeks.org/computer-network-tutorials/" },
  { id: "core4", title: "Object-Oriented Programming (OOPs)", category: "Notes", subject: "Core", fileUrl: "https://www.geeksforgeeks.org/object-oriented-programming-in-cpp/" },

  // --- MODERN FRAMEWORKS & INFRASTRUCTURE ---
  { id: "tech1", title: "MERN Stack Full Open Course", category: "Video", subject: "MERN", fileUrl: "https://fullstackopen.com/en/" },
  { id: "tech2", title: "React Native Mobile Dev Guide", category: "Notes", subject: "MERN", fileUrl: "https://reactnative.dev/docs/getting-started" },
  { id: "tech3", title: "Spring Boot Microservices Architecture", category: "Notes", subject: "Spring Boot", fileUrl: "https://spring.io/microservices" },
  { id: "tech4", title: "AWS Cloud Architecting & EC2 Deployment", category: "Video", subject: "Cloud Infrastructure", fileUrl: "https://aws.amazon.com/getting-started/" },
  { id: "tech5", title: "Docker & DevSecOps Workflows", category: "Notes", subject: "Cloud Infrastructure", fileUrl: "https://docs.docker.com/get-started/" }
];

export default function MaterialsPage() {
  const [filteredMaterials, setFilteredMaterials] = useState(materialCatalog);

  // Filter States
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  // Handle live checkbox filtering locally
  useEffect(() => {
    let result = materialCatalog;

    if (selectedSubjects.length > 0) {
      result = result.filter(mat => selectedSubjects.includes(mat.subject));
    }

    if (selectedTypes.length > 0) {
      result = result.filter(mat => selectedTypes.includes(mat.category));
    }

    setFilteredMaterials(result);
  }, [selectedSubjects, selectedTypes]);

  const toggleSubject = (subject: string) => {
    setSelectedSubjects(prev => 
      prev.includes(subject) ? prev.filter(s => s !== subject) : [...prev, subject]
    );
  };

  const toggleType = (type: string) => {
    setSelectedTypes(prev => 
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        
        <header className={styles.header}>
          <h1 className={styles.title}>Study Materials</h1>
          
          {/* Trust Statement */}
          <p className={styles.trustStatement}>
            <strong>Everything you need for your placement journey is right here. You don't need to look anywhere else.</strong>
          </p>
          
          {/* 💰 AD SLOT 1: Top Leaderboard Banner */}
          <div className={styles.adBannerTop}>
            <span className={styles.adLabel}>Advertisement</span>
            <div className={styles.adPlaceholder}>Responsive Leaderboard Banner</div>
          </div>
        </header>

        <div className={styles.mainLayout}>
          
          {/* Left Sidebar Filters */}
          <aside className={styles.sidebar}>
            <div className={styles.filterHeader}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}>
                <line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line>
                <line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line>
                <line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line>
                <line x1="17" y1="16" x2="23" y2="16"></line>
              </svg>
              Filters
            </div>

            <div className={styles.filterSection}>
              <h3 className={styles.filterTitle}>Target Company / Subject</h3>
              {["Aptitude", "TCS", "Cognizant", "Accenture", "Other MNCs", "Core", "MERN", "Spring Boot", "Cloud Infrastructure"].map(sub => (
                <label key={sub} className={styles.checkboxLabel}>
                  <input type="checkbox" onChange={() => toggleSubject(sub)} /> {sub}
                </label>
              ))}
            </div>

            <div className={styles.filterSection}>
              <h3 className={styles.filterTitle}>Material Type</h3>
              {["Notes", "Practice", "Paper", "Video"].map(type => (
                <label key={type} className={styles.checkboxLabel}>
                  <input type="checkbox" onChange={() => toggleType(type)} /> {type}
                </label>
              ))}
            </div>

            {/* 💰 AD SLOT 2: Sidebar Square Ad Unit */}
            <div className={styles.adSidebar}>
              <span className={styles.adLabel}>Advertisement</span>
              <div className={styles.adSquarePlaceholder}>300x250 Square Ad</div>
            </div>
          </aside>

          {/* Right Grid Layout */}
          <div className={styles.grid}>
            {filteredMaterials.length === 0 ? (
              <div className={styles.statusMessage}>No materials match the selected filters.</div>
            ) : (
              filteredMaterials.map((mat, index) => (
                <div key={mat.id} style={{ display: 'contents' }}>
                  <article className={styles.card}>
                    <div className={styles.cardHeader}>
                      <div className={styles.docIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                          <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                      </div>
                      <span className={styles.pdfBadge}>Verified</span>
                    </div>
                    
                    <h2 className={styles.docTitle}>{mat.title}</h2>
                    <span className={styles.subject}>{mat.subject} • {mat.category}</span>
                    
                    <div className={styles.actionButtons}>
                      <a href={mat.fileUrl} target="_blank" rel="noopener noreferrer" className={styles.btnDownload}>
                        Access Resource
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '6px'}}>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    </div>
                  </article>

                  {/* 💰 AD SLOT 3: Inline Card Ad */}
                  {index === 1 && (
                    <div className={styles.adCard}>
                      <span className={styles.adLabel}>Sponsored Content</span>
                      <div className={styles.adCardPlaceholder}>
                        <h3>Premium Placement Package</h3>
                        <p>Get instant access to 50+ real company mock assessments and live interview streams.</p>
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </div>
  );
}