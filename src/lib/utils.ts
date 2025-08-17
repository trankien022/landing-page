import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat("en-US").format(num);
}

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
}

export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

export function getUTMParams(): UTMParams {
  if (typeof window === "undefined") {
    return {};
  }

  const urlParams = new URLSearchParams(window.location.search);
  const utmParams: UTMParams = {};

  // Extract UTM parameters
  const utmKeys = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
  ];

  utmKeys.forEach((key) => {
    const value = urlParams.get(key);
    if (value) {
      utmParams[key as keyof UTMParams] = value;
    }
  });

  return utmParams;
}

export function storeUTMParams(): void {
  if (typeof window === "undefined") {
    return;
  }

  const utmParams = getUTMParams();

  // Store UTM parameters in sessionStorage for later use
  if (Object.keys(utmParams).length > 0) {
    sessionStorage.setItem("utmParams", JSON.stringify(utmParams));
  }
}

export function getStoredUTMParams(): UTMParams {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    const stored = sessionStorage.getItem("utmParams");
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}
