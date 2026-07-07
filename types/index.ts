export interface NavItem {
  href: string;
  label: string;
}

export interface CustomerJourney {
  title: string;
  description: string;
  href: string;
  tone: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface TextCard {
  title: string;
  description: string;
}

export interface BrandPartner {
  name: string;
  logo: string;
  productImage?: string;
  segment: string;
  bestFor: string;
  recommendation: string;
}

export interface BrandRecommendationStep {
  title: string;
  description: string;
}

export interface PromoContent {
  eyebrow: string;
  title: string;
  description: string;
  disclaimer?: string;
}

export interface LoyaltyReward {
  item: string;
  points: number;
}

export interface LoyaltyProgram {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  pointRule: string;
  transactionDeadline: string;
  redemptionDeadline: string;
}

export interface ProductCategory {
  title: string;
  description: string;
  accent: string;
}

export interface ProjectItem {
  title: string;
  category: string;
  projectType: string;
  productsUsed: string;
  colorName: string;
  image: string;
  description: string;
  reference?: string;
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface Branch {
  number: number;
  address: string;
}

export interface BranchGroup {
  city: string;
  branches: Branch[];
}

export interface BusinessHour {
  day: string;
  time: string;
}

export interface ContactDetail {
  label: string;
  value: string;
  href: string;
}

export interface SectionCopy {
  eyebrow: string;
  title: string;
  description: string;
}
