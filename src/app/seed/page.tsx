// src/app/seed/page.tsx
"use client";

import { useState } from "react";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";

// Your real Google Drive links mapped to our database schema
const REAL_MATERIALS = [
  {
    title: "Data Structures and Algorithms (C, C++, Java, Python)",
    category: "Notes",
    subject: "DSA",
    content: {
      fileUrl: "https://drive.google.com/drive/folders/1Ay5CmkoRJ5eEGcFskULc3CHNQn5iCVs3",
    },
    isActive: true,
  },
  {
    title: "Computer Science Fundamentals",
    category: "Notes",
    subject: "CS Core",
    content: {
      fileUrl: "https://drive.google.com/drive/u/1/folders/18FBvExqEtt9mtNKKP65f_ETdtS7nCG1G",
    },
    isActive: true,
  },
  {
    title: "Aptitude Materials",
    category: "Preparation",
    subject: "Aptitude",
    content: {
      fileUrl: "https://drive.google.com/drive/folders/1XmI6Iq_0MXJ6vq6Nkk-DcBK_y_LWNLCM",
    },
    isActive: true,
  },
  {
    title: "Off-Campus Placement Materials",
    category: "Preparation",
    subject: "General Placement",
    content: {
      fileUrl: "https://drive.google.com/drive/u/0/folders/1iKiq-ZbI3dTN0igO8xRnyaWJF_RCf2Ym",
    },
    isActive: true,
  },
  {
    title: "Company-Specific Placement Questions",
    category: "Previous Papers",
    subject: "Company Specific",
    content: {
      fileUrl: "https://drive.google.com/drive/folders/1V5-NWPj1JhfBBf6wpU4rV7Ebar2ShSi5",
    },
    isActive: true,
  }
];

export default function SeedPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const seedDatabase = async () => {
    setLoading(true);
    setMessage("Step 1/2: Deleting old dummy materials...");
    
    try {
      const matRef = collection(db, "study_materials");
      
      // 1. Fetch and Delete all existing old documents
      const existingDocs = await getDocs(matRef);
      for (const document of existingDocs.docs) {
        await deleteDoc(doc(db, "study_materials", document.id));
      }

      setMessage("Step 2/2: Uploading your real Google Drive folders...");
      
      // 2. Add the new real materials
      for (const item of REAL_MATERIALS) {
        await addDoc(matRef, item);
      }
      
      setMessage("✅ Success! Old data wiped and real folders added to Firestore.");
    } catch (error: any) {
      console.error(error);
      setMessage(`❌ Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "100px auto", textAlign: "center", fontFamily: "sans-serif" }}>
      <h1>Update Study Materials</h1>
      <p style={{ color: "#666", marginBottom: "30px" }}>
        This will wipe the old dummy data and upload your real Drive folders.
      </p>
      <button 
        onClick={seedDatabase} 
        disabled={loading}
        style={{ 
          padding: "12px 24px", 
          fontSize: "16px", 
          backgroundColor: loading ? "#cccccc" : "#0066cc", 
          color: "white", 
          border: "none", 
          borderRadius: "6px", 
          cursor: loading ? "not-allowed" : "pointer" 
        }}
      >
        {loading ? "Updating Database..." : "Inject Real Folders Now"}
      </button>
      {message && <div style={{ marginTop: "20px", padding: "15px", backgroundColor: "#f0f0f0", borderRadius: "6px" }}>{message}</div>}
    </div>
  );
}