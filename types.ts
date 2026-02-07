
import { ReactNode } from 'react';

export interface Service {
  title: string;
  description: string;
  icon: ReactNode;
  extendedDescription?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
