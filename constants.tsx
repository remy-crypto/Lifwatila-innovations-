
import React from 'react';
import { 
  Code, 
  Globe, 
  Smartphone, 
  Shield, 
  Cloud, 
  Lightbulb,
  Megaphone
} from 'lucide-react';
import { Service } from './types';

export const SERVICES: Service[] = [
  {
    title: "CUSTOM SOFTWARE DEVELOPMENT",
    description: "Tailored software solutions designed to solve specific business challenges and streamline operations.",
    icon: <Code className="w-8 h-8 text-white/80" strokeWidth={1.5} />,
    extendedDescription: "We build fully customized software tailored to your exact business requirements. This includes internal systems, automation tools, enterprise platforms, and customer-facing applications designed for scalability, security, and long-term growth."
  },
  {
    title: "IT CONSULTING",
    description: "Professional IT advisory services to guide planning, implementation, and optimization of digital systems.",
    icon: <Lightbulb className="w-8 h-8 text-white/80" strokeWidth={1.5} />,
    extendedDescription: "Our IT consulting services help organizations make informed technology decisions. We assess existing systems, recommend improvements, and guide digital transformation strategies aligned with business goals."
  },
  {
    title: "WEB DESIGN & DEVELOPMENT",
    description: "Modern, responsive, and scalable websites and web applications built with best practices.",
    icon: <Globe className="w-8 h-8 text-white/80" strokeWidth={1.5} />,
    extendedDescription: "We design and develop responsive, high-performance websites and web applications. Our solutions prioritize user experience, speed, accessibility, and modern development standards."
  },
  {
    title: "CYBERSECURITY SERVICES",
    description: "Security audits, vulnerability assessments, and secure system architecture to protect data and systems.",
    icon: <Shield className="w-8 h-8 text-white/80" strokeWidth={1.5} />,
    extendedDescription: "We help protect digital assets through security audits, vulnerability assessments, and secure system architecture. Our approach minimizes risk, prevents breaches, and ensures data integrity."
  },
  {
    title: "MOBILE APP DEVELOPMENT",
    description: "High-performance Android and iOS applications built for scalability and usability.",
    icon: <Smartphone className="w-8 h-8 text-white/80" strokeWidth={1.5} />,
    extendedDescription: "We create robust mobile applications for Android and iOS platforms. Our apps are optimized for performance, usability, and scalability using modern development frameworks."
  },
  {
    title: "CLOUD SOLUTIONS",
    description: "Cloud architecture, deployment, and management for reliable and cost-efficient infrastructure.",
    icon: <Cloud className="w-8 h-8 text-white/80" strokeWidth={1.5} />,
    extendedDescription: "Our cloud solutions enable businesses to scale efficiently and securely. We provide cloud deployment, infrastructure management, and optimization for cost and reliability."
  }
];

export const MARKETING_DATA = {
  title: "IT & SOFTWARE PRODUCT MARKETING",
  description: "We market IT and software products for customers, including students of IT, helping projects gain visibility, users, and growth.",
  icon: <Megaphone className="w-10 h-10 text-white/80" strokeWidth={1.5} />
};
