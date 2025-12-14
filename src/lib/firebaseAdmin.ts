import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

let firestoreInstance: ReturnType<typeof getFirestore> | null = null;

function getRequiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable ${name}`);
  }
  return value;
}

export function getServerFirestore() {
  if (firestoreInstance) return firestoreInstance;

  const projectId = getRequiredEnv("FIREBASE_PROJECT_ID");
  const clientEmail = getRequiredEnv("FIREBASE_CLIENT_EMAIL");
  const rawPrivateKey = getRequiredEnv("FIREBASE_PRIVATE_KEY");
  const privateKey = rawPrivateKey.replace(/\\n/g, "\n");

  if (!getApps().length) {
    initializeApp({
      credential: cert({
        projectId,
        clientEmail,
        privateKey
      })
    });
  }

  firestoreInstance = getFirestore();
  return firestoreInstance;
}
