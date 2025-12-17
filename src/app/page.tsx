import type { Metadata } from 'next';
import { Home } from '@/components/pages/Home';

export const metadata: Metadata = {
  title: 'JLIK Overseas Education - Expert Education Visa Consultancy',
  description: 'Expert education visa consultancy to help you pursue world-class education at top universities across the globe. 95% visa success rate, 8000+ happy students.',
  keywords: ['overseas education', 'study abroad', 'education visa', 'student visa', 'university admission', 'visa consultancy', 'international education', 'USA study visa', 'UK student visa', 'Canada study permit', 'Australia student visa'],
  openGraph: {
    title: 'JLIK Overseas Education - Expert Education Visa Consultancy',
    description: 'Expert education visa consultancy to help you pursue world-class education at top universities across the globe. 95% visa success rate, 8000+ happy students.',
  },
};

export default function HomePage() {
  return <Home />;
}
