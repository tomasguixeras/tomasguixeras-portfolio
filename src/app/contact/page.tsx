"use client";
import { useRouter } from 'next/navigation'
import { useEffect } from "react";

export default function Contact() {
const URL = 'google.com';
const router = useRouter();
  useEffect(() => {
    router.push(URL);
  }, [router]);

  return null;
}
