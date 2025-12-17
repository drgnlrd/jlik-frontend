import type { Metadata } from 'next';
import { Services } from '@/components/pages/Services';

export const metadata: Metadata = {
  title: 'Our Services - Education Visa & Study Abroad Consultancy | JLIK',
  description: 'Comprehensive education visa and study abroad services including career counseling, university selection, application assistance, visa processing, and post-arrival support. Expert guidance for USA, UK, Canada, Australia & more.',
  keywords: ['education visa services', 'study abroad consultancy', 'university application help', 'visa processing', 'career counseling', 'student visa assistance', 'accommodation services', 'pre-departure guidance'],
  openGraph: {
    title: 'Our Services - Education Visa & Study Abroad Consultancy | JLIK',
    description: 'Comprehensive education visa and study abroad services including career counseling, university selection, application assistance, visa processing, and post-arrival support.',
  },
};

export default function ServicesPage() {
  return <Services />;
}
