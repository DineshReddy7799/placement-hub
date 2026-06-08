// src/app/dashboard/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

// Structured map matching your Roadmap Task IDs to compute correct module lengths
const totalRoadmapTasks = {
  mern: { title: "Full Stack MERN", total: 7, tasks: ["t1", "t2", "t3", "t4", "t5", "t6", "t7"] },
  java: { title: "Java Spring Boot Backend", total: 4, tasks: ["jt1", "jt2", "jt3", "jt4"] },
  aptitude: { title: "Placement Assessment Prep", total: 4, tasks: ["at1", "at2", "at3", "at4"] },
  genai: { title: "GenAI & Agentic Workflows", total: 4, tasks: ["ait1", "ait2", "ait3", "ait4"] },
  devsecops: { title: "DevSecOps & Cloud", total: 4, tasks: ["ct1", "ct2", "ct3", "ct4"] },
  mobile: { title: "React Native Mobile Dev", total: 4, tasks: ["mobt1", "mobt2", "mobt3", "mobt4"] },
  data: { title: "Data Analyst Track", total: 4, tasks: ["dat1", "dat2", "dat3", "dat4"] },
  servicenow: { title: "ServiceNow Developer", total: 4, tasks: ["snt1", "snt2", "snt3", "snt4"] },
  salesforce: { title: "Salesforce Ecosystem", total: 4, tasks: ["sft1", "sft2", "sft3", "sft4"] }
};

export default function DashboardPage() {
  const [completedTaskIds, setCompletedTaskIds] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedProgress = localStorage.getItem("placementhub_roadmap_progress");
    if (savedProgress) {
      setCompletedTaskIds(JSON.parse(savedProgress));
    }
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return null;

  // Compute calculated metrics based on active storage
  const totalCompletedCount = completedTaskIds.length;
  
  const trackProgress = Object.entries(totalRoadmapTasks).map(([key, config]) => {
    const completedForThisTrack = config.tasks.filter(id => completedTaskIds.includes(id)).length;
    const pct = Math.round((completedForThisTrack / config.total) * 100);
    return { title: config.title, percentage: pct };
  });

  const activeTracksCount = trackProgress.filter(t => t.percentage > 0 && t.percentage < 100).length;
  const completedTracksCount = trackProgress.filter(t => t.percentage === 100).length;

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        
        <header className={styles.header}>
          <h1 className={styles.title}>Welcome Back to Your Dashboard</h1>
          <p className={styles.subtitle}>Monitor your training completion status, active goals, and upcoming placement paths.</p>
        </header>

        {/* 💰 AD SLOT 1: Top Responsive Banner */}
        <div className={styles.adBannerTop}>
          <span className={styles.adLabel}>Advertisement</span>
          <div className={styles.adPlaceholder}>Responsive Leaderboard Ad Unit (728x90)</div>
        </div>

        <div className={styles.layout}>
          
          {/* Main Interface */}
          <main className={styles.mainContent}>
            
            {/* High Level Metrics Row */}
            <section className={styles.statsGrid}>
              <div className={styles.statCard}>
                <span className={styles.statLabel}>Total Tasks Cleared</span>
                <span className={styles.statValue}>{totalCompletedCount}</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statLabel}>In-Progress Roadmaps</span>
                <span className={styles.statValue}>{activeTracksCount}</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statLabel}>Fully Mastered Tracks</span>
                <span className={styles.statValue}>{completedTracksCount}</span>
              </div>
            </section>

            {/* Active Roadmap Progress Breakdown */}
            <section className={styles.panelCard}>
              <h2 className={styles.panelTitle}>Syllabus Path Metrics</h2>
              {trackProgress.filter(t => t.percentage > 0).length === 0 ? (
                <p style={{ color: "#64748b", fontSize: "0.95rem" }}>You haven't initialized any training path yet. Navigate to Roadmaps to initialize trackers!</p>
              ) : (
                trackProgress.filter(t => t.percentage > 0).map((track, i) => (
                  <div key={i} className={styles.roadmapRow}>
                    <div className={styles.roadmapInfo}>
                      <span>{track.title}</span>
                      <span>{track.percentage}%</span>
                    </div>
                    <div className={styles.track}>
                      <div className={styles.fill} style={{ width: `${track.percentage}%` }}></div>
                    </div>
                  </div>
                ))
              )}
            </section>

            {/* Quick Access Portals */}
            <section className={styles.panelCard}>
              <h2 className={styles.panelTitle}>Quick Acceleration Links</h2>
              <div className={styles.actionLinks}>
                <Link href="/roadmaps" className={styles.actionBtn}>Continue Roadmaps</Link>
                <Link href="/dsa" className={styles.actionBtn}>Practice DSA Prep</Link>
                <Link href="/materials" className={styles.actionBtn}>Browse Core PDFs</Link>
                <Link href="/" className={styles.actionBtn}>View Active Drives</Link>
              </div>
            </section>

          </main>

          {/* Sticky Sidebar Ads Container */}
          <aside className={styles.sidebarAd}>
            <span className={styles.adLabel}>Sponsored Content</span>
            <div className={styles.adSquarePlaceholder}>Sticky Display Block (300x250)</div>
          </aside>

        </div>
      </div>
    </div>
  );
}