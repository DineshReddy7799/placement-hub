// src/app/contact/page.tsx
"use client";

import styles from "./page.module.css";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can wire this up to an API route, Firebase function, or service like Formspree later
    alert("Thanks for reaching out! We will get back to you shortly.");
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        
        {/* Left Column: Context & Info */}
        <div>
          <header className={styles.header}>
            <h1 className={styles.title}>Get in Touch</h1>
            <p className={styles.subtitle}>
              Have a question about a job listing, want to request specific study materials, or interested in advertising on our platform? Drop us a line.
            </p>
          </header>

          <div className={styles.infoCard}>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className={styles.infoText}>
                <strong>Email Us</strong>
                hello@placementhub.com
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className={styles.infoText}>
                <strong>Location</strong>
                Operating entirely remote, curating opportunities for students Pan India.
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: The Form */}
        <div className={styles.formCard}>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Full Name</label>
              <input 
                type="text" 
                className={styles.input} 
                placeholder="John Doe" 
                required 
              />
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Email Address</label>
              <input 
                type="email" 
                className={styles.input} 
                placeholder="john@example.com" 
                required 
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Subject</label>
              <input 
                type="text" 
                className={styles.input} 
                placeholder="How can we help you?" 
                required 
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Message</label>
              <textarea 
                className={styles.textarea} 
                placeholder="Write your message here..." 
                required 
              ></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}