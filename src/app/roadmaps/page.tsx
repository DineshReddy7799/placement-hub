// src/app/roadmaps/page.tsx
"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";

// --- THE EXPANDED CURRICULUM WITH CAPSTONE PROJECTS ---
const roadmapsData = [
  {
    id: "mern",
    title: "Full Stack MERN",
    modules: [
      {
        id: "m1",
        title: "Frontend Fundamentals",
        tasks: [
          { id: "t1", text: "Master HTML5 Semantic Tags & Accessibility", linkUrl: "https://developer.mozilla.org/en-US/docs/Learn/HTML", linkLabel: "Read MDN Guide" },
          { id: "t2", text: "CSS3 Flexbox, Grid, and Responsive Media Queries", linkUrl: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/", linkLabel: "Flexbox Cheatsheet" },
          { id: "t3", text: "JavaScript ES6+ (Arrow functions, Destructuring, Promises)", linkUrl: "/materials?search=javascript", linkLabel: "Download JS Notes PDF" }
        ]
      },
      {
        id: "m2",
        title: "React.js Mastery",
        tasks: [
          { id: "t4", text: "Component Lifecycle and JSX Syntax", linkUrl: "https://react.dev/learn", linkLabel: "Official React Docs" },
          { id: "t5", text: "React Hooks (useState, useEffect, useRef, useContext)", linkUrl: "/materials?search=react", linkLabel: "Practice Questions" }
        ]
      },
      {
        id: "m3",
        title: "Backend & Database",
        tasks: [
          { id: "t6", text: "Node.js & Express REST API creation", linkUrl: "https://expressjs.com/en/starter/hello-world.html", linkLabel: "Express Quickstart" },
          { id: "t7", text: "MongoDB CRUD Operations & Mongoose Schemas", linkUrl: "/materials?search=mongodb", linkLabel: "Database Architecture Notes" }
        ]
      }
    ],
    capstone: {
      title: "Build a Full-Stack E-Commerce Platform",
      description: "Apply everything you've learned to build a complete application with user authentication, a shopping cart, Stripe payment integration, and a MongoDB database.",
      linkUrl: "/materials?search=mern-capstone",
      linkLabel: "View Project Requirements"
    }
  },
  {
    id: "java",
    title: "Java Spring Boot Backend",
    modules: [
      {
        id: "j1",
        title: "Core Java Foundation",
        tasks: [
          { id: "jt1", text: "Master Object-Oriented Principles (Inheritance, Polymorphism)", linkUrl: "/materials?search=java", linkLabel: "Download Core Java PDF" },
          { id: "jt2", text: "Java Collections Framework (List, Map, Set)", linkUrl: "https://docs.oracle.com/javase/tutorial/collections/index.html", linkLabel: "Oracle Collections Guide" }
        ]
      },
      {
        id: "j2",
        title: "Spring Boot Ecosystem",
        tasks: [
          { id: "jt3", text: "Dependency Injection & Inversion of Control (IoC)", linkUrl: "https://spring.io/guides/gs/spring-boot/", linkLabel: "Spring Quickstart" },
          { id: "jt4", text: "Spring Data JPA & Hibernate ORM", linkUrl: "/materials?search=jpa", linkLabel: "JPA Cheat Sheet" }
        ]
      }
    ],
    capstone: {
      title: "Develop a Core Banking REST API",
      description: "Architect a secure banking API capable of handling transactions, user account creation, JWT authentication, and concurrent transfer locking using Spring Boot and PostgreSQL.",
      linkUrl: "/materials?search=java-capstone",
      linkLabel: "View Architecture Blueprint"
    }
  },
  {
    id: "aptitude",
    title: "Placement Assessment Prep",
    modules: [
      {
        id: "a1",
        title: "Cognitive & Quantitative Rounds",
        tasks: [
          { id: "at1", text: "Master Time & Work, Speed & Distance, Percentages", linkUrl: "/materials?search=quantitative", linkLabel: "Download Formula Sheet" },
          { id: "at2", text: "Logical Reasoning & Pattern Recognition", linkUrl: "/materials?search=reasoning", linkLabel: "Practice Set (100 Qs)" }
        ]
      },
      {
        id: "a2",
        title: "Company Specific Patterns",
        tasks: [
          { id: "at3", text: "TCS NQT Ninja/Digital Previous Year Questions", linkUrl: "/materials?search=tcs", linkLabel: "TCS Archives PDF" },
          { id: "at4", text: "Cognizant GenC Technical Assessment Topics", linkUrl: "/materials?search=cognizant", linkLabel: "Cognizant Syllabus" }
        ]
      }
    ],
    capstone: {
      title: "The Grand Mock Assessment",
      description: "A 120-minute, strictly timed simulation covering Quantitative aptitude, Logical reasoning, Verbal ability, and core pseudo-code technical questions.",
      linkUrl: "/materials?search=mock-test",
      linkLabel: "Start the Exam"
    }
  },
  {
    id: "genai",
    title: "GenAI & Agentic Workflows",
    modules: [
      {
        id: "ai1",
        title: "LLM APIs & Prompt Engineering",
        tasks: [
          { id: "ait1", text: "Integrating Google Gemini API & Multimodal Prompts", linkUrl: "https://ai.google.dev/tutorials/rest_quickstart", linkLabel: "Gemini API Quickstart" },
          { id: "ait2", text: "PDF Metadata Extraction via LLMs", linkUrl: "/materials?search=ai", linkLabel: "Download Extraction Templates" }
        ]
      },
      {
        id: "ai2",
        title: "Autonomous Agents",
        tasks: [
          { id: "ait3", text: "Python Orchestration with LangChain", linkUrl: "https://python.langchain.com/docs/get_started/introduction", linkLabel: "LangChain Documentation" },
          { id: "ait4", text: "Building RAG (Retrieval-Augmented Generation) Systems", linkUrl: "/materials?search=rag", linkLabel: "RAG Architecture Guide" }
        ]
      }
    ],
    capstone: {
      title: "Build an Autonomous Financial Analyst Agent",
      description: "Construct a LangChain agent that can ingest live stock market PDFs, summarize trends, and answer user queries dynamically via a Retrieval-Augmented Generation (RAG) pipeline.",
      linkUrl: "/materials?search=ai-capstone",
      linkLabel: "View Project Scope"
    }
  },
  {
    id: "devsecops",
    title: "DevSecOps & Cloud",
    modules: [
      {
        id: "c1",
        title: "AWS & Server Architecture",
        tasks: [
          { id: "ct1", text: "AWS EC2 Deployment & Instance Cost Optimization", linkUrl: "https://aws.amazon.com/ec2/getting-started/", linkLabel: "AWS EC2 Setup Guide" },
          { id: "ct2", text: "Event-Driven Hooks (e.g., Slack Webhook Integrations)", linkUrl: "https://api.slack.com/messaging/webhooks", linkLabel: "Slack API Docs" }
        ]
      },
      {
        id: "c2",
        title: "Automated Pipelines & Security",
        tasks: [
          { id: "ct3", text: "GitOps Fundamentals & Continuous Delivery", linkUrl: "/materials?search=gitops", linkLabel: "GitOps Workflows PDF" },
          { id: "ct4", text: "Implementing Policy as Code (PaC) & Cloud Security Posture", linkUrl: "/materials?search=devsecops", linkLabel: "Security Pipeline Blueprint" }
        ]
      }
    ],
    capstone: {
      title: "Deploy a Secure Multi-Tier Architecture",
      description: "Write Terraform scripts to provision an AWS VPC, deploy a containerized application using GitHub Actions, and integrate automated code vulnerability scanning.",
      linkUrl: "/materials?search=devops-capstone",
      linkLabel: "View Deployment Specs"
    }
  },
  {
    id: "mobile",
    title: "React Native Mobile Dev",
    modules: [
      {
        id: "mob1",
        title: "Cross-Platform Fundamentals",
        tasks: [
          { id: "mobt1", text: "React Native & Expo SDK Setup", linkUrl: "https://docs.expo.dev/", linkLabel: "Expo Documentation" },
          { id: "mobt2", text: "Backend Integration using Firebase", linkUrl: "https://firebase.google.com/docs/react-native/setup", linkLabel: "Firebase RN Guide" }
        ]
      },
      {
        id: "mob2",
        title: "Geospatial & Advanced Features",
        tasks: [
          { id: "mobt3", text: "Implementing React Native Maps & Custom Markers", linkUrl: "https://github.com/react-native-maps/react-native-maps", linkLabel: "RN Maps Setup" },
          { id: "mobt4", text: "Real-time Background Location Tracking & Marker Animations", linkUrl: "/materials?search=maps", linkLabel: "Location Tracking Snippets" }
        ]
      }
    ],
    capstone: {
      title: "Build a Real-Time Ride-Hailing UI",
      description: "Develop an Uber-style application featuring live map tracking, background location updates, user authentication, and Firebase Firestore integration for driver matching.",
      linkUrl: "/materials?search=mobile-capstone",
      linkLabel: "View App Requirements"
    }
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    modules: [
      {
        id: "da1",
        title: "Data Querying & Manipulation",
        tasks: [
          { id: "dat1", text: "SQL Mastery (Joins, Subqueries, Window Functions)", linkUrl: "https://mode.com/sql-tutorial/", linkLabel: "Mode SQL Tutorial" },
          { id: "dat2", text: "Advanced Excel (Pivot Tables, VLOOKUP/XLOOKUP, Macros)", linkUrl: "/materials?search=excel", linkLabel: "Excel Formulas PDF" }
        ]
      },
      {
        id: "da2",
        title: "Scripting & Visualization",
        tasks: [
          { id: "dat3", text: "Python for Data Analysis (Pandas, NumPy)", linkUrl: "https://pandas.pydata.org/docs/getting_started/index.html", linkLabel: "Pandas Quickstart" },
          { id: "dat4", text: "Building Dashboards with Power BI & Tableau", linkUrl: "/materials?search=powerbi", linkLabel: "Power BI Guide" }
        ]
      }
    ],
    capstone: {
      title: "E-Commerce Sales Forecasting Dashboard",
      description: "Clean a raw 50,000-row CSV dataset using Python Pandas, write complex SQL queries to find regional profit margins, and build an interactive Tableau dashboard for stakeholders.",
      linkUrl: "/materials?search=data-capstone",
      linkLabel: "Download Dataset & Prompt"
    }
  },
  {
    id: "servicenow",
    title: "ServiceNow Developer",
    modules: [
      {
        id: "sn1",
        title: "Platform Administration",
        tasks: [
          { id: "snt1", text: "ServiceNow Certified System Administrator (CSA) Basics", linkUrl: "https://developer.servicenow.com/", linkLabel: "Developer Portal" },
          { id: "snt2", text: "ITSM Fundamentals (Incidents, Problems, Changes)", linkUrl: "/materials?search=servicenow", linkLabel: "ITSM Overview Notes" }
        ]
      },
      {
        id: "sn2",
        title: "Custom App Development",
        tasks: [
          { id: "snt3", text: "Client/Server Side Scripting (GlideRecord, GlideSystem)", linkUrl: "https://developer.servicenow.com/dev.do#!/learn", linkLabel: "Glide API Docs" },
          { id: "snt4", text: "Workflow Automation with Flow Designer & IntegrationHub", linkUrl: "/materials?search=flowdesigner", linkLabel: "Flow Designer Best Practices" }
        ]
      }
    ],
    capstone: {
      title: "Enterprise IT Asset Management System",
      description: "Build a custom ServiceNow application from scratch to track employee laptops. Implement custom tables, write business rules for status updates, and build an automated approval flow.",
      linkUrl: "/materials?search=sn-capstone",
      linkLabel: "View Implementation Guide"
    }
  },
  {
    id: "salesforce",
    title: "Salesforce Ecosystem",
    modules: [
      {
        id: "sf1",
        title: "Salesforce Administration",
        tasks: [
          { id: "sft1", text: "Data Modeling (Standard/Custom Objects, Relationships)", linkUrl: "https://trailhead.salesforce.com/", linkLabel: "Start on Trailhead" },
          { id: "sft2", text: "Security & Access (Profiles, Roles, Permission Sets)", linkUrl: "/materials?search=salesforce", linkLabel: "Admin Prep PDF" }
        ]
      },
      {
        id: "sf2",
        title: "Salesforce Development",
        tasks: [
          { id: "sft3", text: "Apex Fundamentals (Triggers, SOQL, SOSL)", linkUrl: "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_dev_guide.htm", linkLabel: "Apex Developer Guide" },
          { id: "sft4", text: "Building UI with Lightning Web Components (LWC)", linkUrl: "/materials?search=lwc", linkLabel: "LWC Component Library" }
        ]
      }
    ],
    capstone: {
      title: "Real Estate Brokerage CRM",
      description: "Configure a custom Salesforce org. Create complex data models for Properties and Clients, write Apex triggers to prevent double-booking, and build an LWC dashboard for brokers.",
      linkUrl: "/materials?search=sf-capstone",
      linkLabel: "View Org Requirements"
    }
  }
];

export default function RoadmapsPage() {
  const [activeRoadmapId, setActiveRoadmapId] = useState(roadmapsData[0].id);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedProgress = localStorage.getItem("placementhub_roadmap_progress");
    if (savedProgress) {
      setCompletedTasks(JSON.parse(savedProgress));
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("placementhub_roadmap_progress", JSON.stringify(completedTasks));
    }
  }, [completedTasks, isLoaded]);

  const activeRoadmap = roadmapsData.find(r => r.id === activeRoadmapId)!;

  const totalTasks = activeRoadmap.modules.flatMap(m => m.tasks).length;
  const completedInActive = activeRoadmap.modules
    .flatMap(m => m.tasks)
    .filter(t => completedTasks.includes(t.id)).length;
  const progressPercentage = totalTasks === 0 ? 0 : Math.round((completedInActive / totalTasks) * 100);

  const isCapstoneUnlocked = progressPercentage === 100;

  const toggleTask = (taskId: string) => {
    setCompletedTasks(prev => 
      prev.includes(taskId) 
        ? prev.filter(id => id !== taskId) 
        : [...prev, taskId]
    );
  };

  if (!isLoaded) return null;

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        
        <header className={styles.header}>
          <h1 className={styles.title}>Actionable Career Roadmaps</h1>
          <p className={styles.subtitle}>Track your progress and access curated study materials instantly.</p>
        </header>

        <div className={styles.tabContainer}>
          {roadmapsData.map(roadmap => (
            <button
              key={roadmap.id}
              className={`${styles.tab} ${activeRoadmapId === roadmap.id ? styles.activeTab : ""}`}
              onClick={() => setActiveRoadmapId(roadmap.id)}
            >
              {roadmap.title}
            </button>
          ))}
        </div>

        <div className={styles.progressContainer}>
          <div className={styles.progressHeader}>
            <span>{activeRoadmap.title} Progress</span>
            <span>{progressPercentage}% Completed</span>
          </div>
          <div className={styles.progressBarTrack}>
            <div 
              className={styles.progressBarFill} 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        <div>
          {activeRoadmap.modules.map((module, index) => (
            <div key={module.id} className={styles.moduleCard}>
              <h2 className={styles.moduleTitle}>
                <span className={styles.stepNumber}>{index + 1}</span>
                {module.title}
              </h2>
              
              <div className={styles.taskList}>
                {module.tasks.map(task => {
                  const isChecked = completedTasks.includes(task.id);
                  return (
                    <label key={task.id} className={styles.taskItem}>
                      <input 
                        type="checkbox" 
                        checked={isChecked}
                        onChange={() => toggleTask(task.id)}
                      />
                      <div className={styles.taskContent}>
                        <div className={styles.taskHeader}>
                          <span className={`${styles.taskText} ${isChecked ? styles.taskCompleted : ""}`}>
                            {task.text}
                          </span>
                        </div>
                        
                        {task.linkUrl && (
                          <a 
                            href={task.linkUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={styles.resourceLink}
                            onClick={(e) => e.stopPropagation()} 
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                              <polyline points="15 3 21 3 21 9"></polyline>
                              <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                            {task.linkLabel}
                          </a>
                        )}
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* 🏆 THE CAPSTONE SECTION */}
        <div className={styles.capstoneWrapper}>
          <div className={`${styles.capstoneCard} ${!isCapstoneUnlocked ? styles.capstoneLocked : ""}`}>
            
            {!isCapstoneUnlocked && (
              <div className={styles.lockIcon}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
            )}

            <h2 className={styles.capstoneTitle}>
              {isCapstoneUnlocked && "🏆"} Final Capstone: {activeRoadmap.capstone.title}
            </h2>
            
            <p className={styles.capstoneDesc}>
              {activeRoadmap.capstone.description}
            </p>

            {isCapstoneUnlocked ? (
              <a 
                href={activeRoadmap.capstone.linkUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.capstoneBtn}
              >
                {activeRoadmap.capstone.linkLabel}
              </a>
            ) : (
              <div className={styles.lockMessage}>
                Complete {100 - progressPercentage}% more of the roadmap to unlock this challenge
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}