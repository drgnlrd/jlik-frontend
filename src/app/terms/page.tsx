import type { Metadata } from 'next';
import { Terms } from '@/components/pages/Terms';

export const metadata: Metadata = {
  title: 'Terms & Policies - JLIK Overseas Education',
  description: 'Read our terms of service and privacy policy. Learn about our service terms, privacy practices, data protection, and user responsibilities at JLIK Overseas Education.',
  keywords: ['terms of service', 'privacy policy', 'terms and conditions', 'data protection', 'user agreement', 'service terms', 'education consultancy terms'],
  openGraph: {
    title: 'Terms & Policies - JLIK Overseas Education',
    description: 'Read our terms of service and privacy policy. Learn about our service terms, privacy practices, data protection, and user responsibilities.',
  },
};

export default function TermsPage() {
  return <Terms />;
}
