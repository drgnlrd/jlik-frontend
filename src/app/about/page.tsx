import type { Metadata } from 'next';
import { About } from '@/components/pages/About';

export const metadata: Metadata = {
  title: 'About Us - JLIK Overseas Education | Our Story & Mission',
  description: 'Learn about JLIK Overseas Education, a trusted overseas education visa consultancy since 2012. With 8000+ successful students and 95% visa success rate, we\'re committed to making your study abroad dreams a reality.',
  keywords: ['about JLIK education', 'education consultancy', 'visa consultancy services', 'study abroad consultant', 'overseas education expert', 'student visa specialist'],
  openGraph: {
    title: 'About Us - JLIK Overseas Education | Our Story & Mission',
    description: 'Learn about JLIK Overseas Education, a trusted overseas education visa consultancy since 2012. With 8000+ successful students and 95% visa success rate.',
  },
};

export default function AboutPage() {
  return <About />;
}
