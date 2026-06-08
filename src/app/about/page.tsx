// src/app/about/page.tsx
import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <div className={styles.pageWrapper}>
      <main className={styles.container}>
        <header className={styles.hero}>
          <h1 className={styles.title}>Empowering the Next Generation of Engineers</h1>
          <p className={styles.subtitle}>
            Bridging the gap between talented graduates and the world's leading technology companies.
          </p>
        </header>

        <article className={styles.contentCard}>
          <h2 className={styles.sectionTitle}>Our Mission</h2>
          <p className={styles.paragraph}>
            Navigating the recruitment cycles of major IT services firms like Cognizant, TCS, and Accenture can be overwhelming. We built PlacementHub to provide a single, unified platform where aspiring software engineers can find verified off-campus drives, critical internship opportunities, and the exact resources needed to clear technical and cognitive assessments.
          </p>
          <p className={styles.paragraph}>
            Whether you are preparing for a rigorous aptitude round or brushing up on full-stack development, our curated environment is designed to cut through the noise and deliver high-signal opportunities directly to you.
          </p>

          <div className={styles.grid}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className={styles.featureTitle}>Verified Listings</h3>
              <p className={styles.featureText}>Every job and internship posted is aggregated from reliable sources and verified for current batch eligibility.</p>
            </div>
            
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3 className={styles.featureTitle}>Targeted Materials</h3>
              <p className={styles.featureText}>Access high-quality study guides covering modern frameworks like the MERN stack and Spring Boot, alongside core subjects.</p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}