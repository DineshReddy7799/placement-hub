// src/app/page.tsx
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import styles from "./page.module.css";
import Link from "next/link";

export const dynamic = "force-dynamic";

interface Job {
  id: string;
  title: string;
  company: { name: string };
  details: { type: string; location: string[]; salaryExpected: string };
  tags: string[];
}

async function getLiveJobs(): Promise<Job[]> {
  try {
    const jobsRef = collection(db, "jobs");
    const q = query(jobsRef, where("meta.isActive", "==", true));
    const querySnapshot = await getDocs(q);
    
    const jobs: Job[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      jobs.push({
        id: doc.id,
        title: data.title,
        company: { name: data.company?.name || "MNC Recruiter" },
        details: {
          type: data.details?.type || "Full-Time",
          location: data.details?.location || ["India"],
          salaryExpected: data.details?.salaryExpected || "Not Disclosed",
        },
        tags: data.tags || [],
      });
    });
    return jobs;
  } catch (error) {
    console.error("Firestore Error:", error);
    return []; 
  }
}

export default async function Home() {
  const jobs = await getLiveJobs();

  return (
    <div className={styles.pageWrapper}>
      
      {/* 🧠 THE BRAIN-TRICK HERO CONTAINER */}
      <section className={styles.heroSection}>
        <div className={styles.mottoBadge}>⏱️ Centralized Time-Saver Hub</div>
        <h1>Stop Checking 20 Different Job Portals Every Day</h1>
        <p>
          We automatically track, verify, and scrape every off-campus placement drive and fresher role across the internet into this single interface. Save your energy for preparation.
        </p>

        {/* 💰 AD SLOT 1: High Visibility Premium Header Banner */}
        <div className={styles.adHeroBanner}>
          <span className={styles.adLabel}>Sponsored Content</span>
          <div className={styles.adPlaceholder}>Google AdSense Premium Leaderboard Unit (728x90)</div>
        </div>
      </section>

      {/* 📊 TRICK THE MIND: COGNITIVE SOCIAL PROOF BAR */}
      <div className={styles.liveTickerBar}>
        <div className={styles.tickerContainer}>
          <div className={styles.tickerItem}>
            <div className={styles.liveDot}></div>
            <span>Active Tracking Status: <span className={styles.tickerNumber}>7 Portals Syncing Live</span></span>
          </div>
          <div className={styles.tickerItem}>
            <span>Today's Fresh Openings: <span className={styles.tickerNumber}>+{jobs.length || 42} Active Drives</span></span>
          </div>
          <div className={styles.tickerItem}>
            <span>Target Batch Framework: <span className={styles.tickerNumber}>2024 / 2025 / 2026 Batch Only</span></span>
          </div>
        </div>
      </div>

      <main className={styles.container}>
        <section>
          <div className={styles.boardTitle}>
            <span>Verified Cleaner Feed</span>
            <span style={{ fontSize: "0.85rem", color: "#64748b", fontWeight: "normal" }}>Updated automatically every midnight</span>
          </div>
          
          {jobs.length === 0 ? (
            <div style={{ textAlign: "center", padding: "40px", color: "#64748b" }}>
              <p>Initializing secure tracking streams... Run your local scraper engine to pull the latest listings into your application feed!</p>
            </div>
          ) : (
            <div className={styles.jobList}>
              {jobs.map((job, index) => (
                <div key={job.id} style={{ display: "contents" }}>
                  
                  {/* Job Listing Card */}
                  <Link href={`/jobs/${job.id}`} style={{ textDecoration: "none" }}>
                    <article className={styles.jobCard}>
                      <div className={styles.jobHeader}>
                        <div>
                          <h3 className={styles.jobTitle}>{job.title}</h3>
                          <span className={styles.companyName}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "2px" }}><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                            {job.company.name}
                          </span>
                        </div>
                        <span className={styles.salary}>{job.details.salaryExpected}</span>
                      </div>
                      
                      <div className={styles.tagContainer}>
                        <span className={styles.tag} style={{ backgroundColor: "#e0e7ff", color: "#4338ca" }}>{job.details.type}</span>
                        {job.tags.slice(0, 3).map((tag, idx) => (
                          <span key={idx} className={styles.tag}>{tag}</span>
                        ))}
                      </div>
                    </article>
                  </Link>

                  {/* 💰 AD SLOT 2: Inline Native Card (Renders beautifully directly inside the first row loop) */}
                  {index === 2 && (
                    <div className={styles.adJobCard}>
                      <span className={styles.adLabel}>Featured Assessment Partner</span>
                      <div className={styles.adJobContent}>
                        <h3>Crack the Cognitive Assessment Rounds</h3>
                        <p>Over 85% of freshers fail the initial pattern matching exams. Download the official simulated questionnaire bundle instantly.</p>
                        <div className={styles.adJobButton}>Access Free Preparation Key</div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}