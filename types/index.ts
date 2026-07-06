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

export interface ProductCategory {
  title: string;
  description: string;
  accent: string;
}

export interface ProjectItem {
  title: string;
  category: string;
  image: string;
  description: string;
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
