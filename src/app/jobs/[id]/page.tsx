// src/app/jobs/[id]/page.tsx
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import styles from "./page.module.css";
import Link from "next/link";

export const dynamic = "force-dynamic";

interface PageProps {
  params: {
    id: string;
  };
}

async function getJobDetails(id: string) {
  try {
    const docRef = doc(db, "jobs", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as any;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching job:", error);
    return null;
  }
}

export default async function JobDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const job = await getJobDetails(id);

  if (!job) {
    return (
      <div className={styles.pageWrapper}>
        <div className={styles.notFound}>
          <h1>Job Not Found</h1>
          <p>This listing may have expired or been removed.</p>
          <Link href="/" className={styles.backLink}>← Back to Job Board</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.pageWrapper}>
      <main className={styles.container}>
        <Link href="/" className={styles.backLink}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Job Board
        </Link>
        
        <article className={styles.card}>
          <header className={styles.header}>
            <h1 className={styles.title}>{job.title}</h1>
            <h2 className={styles.company}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
              {job.company?.name || "Company Confidential"}
            </h2>
            
            <div className={styles.metaGrid}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Job Type</span>
                <span className={styles.metaValue}>{job.details?.type || "Full-Time"}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Salary / Stipend</span>
                <span className={styles.metaValue}>{job.details?.salaryExpected || "Not Disclosed"}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Location</span>
                <span className={styles.metaValue}>
                  {job.details?.location?.join(", ") || "India"}
                </span>
              </div>
            </div>
          </header>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Job Overview</h3>
            <p className={styles.description}>
              {job.content?.descriptionHtml || 
              "We are looking for a highly motivated individual to join our team. Please apply via the official career portal for full details regarding eligibility and responsibilities."}
            </p>
          </section>

          <section className={styles.section}>
            <div className={styles.tagContainer}>
              {job.tags && job.tags.map((tag: string, index: number) => (
                <span key={index} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </section>

          <div className={styles.actionArea}>
            {job.content?.applyLink ? (
              <a 
                href={job.content.applyLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.applyButton}
              >
                Apply Now (External Site)
              </a>
            ) : (
              <button className={styles.applyButton} disabled style={{ opacity: 0.6, cursor: "not-allowed" }}>
                Application Link Unavailable
              </button>
            )}
          </div>
        </article>
      </main>
    </div>
  );
}