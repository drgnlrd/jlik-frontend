import type { Metadata } from 'next';
import { Contact } from '@/components/pages/Contact';

export const metadata: Metadata = {
  title: 'Contact Us - Free Consultation | JLIK Overseas Education',
  description: 'Get in touch with JLIK Overseas Education for a free consultation. We\'re here to help you with your study abroad journey. Call us, email us, or visit our office.',
  keywords: ['contact education consultant', 'free visa consultation', 'study abroad inquiry', 'education visa help', 'student visa consultation', 'overseas education contact'],
  openGraph: {
    title: 'Contact Us - Free Consultation | JLIK Overseas Education',
    description: 'Get in touch with JLIK Overseas Education for a free consultation. We\'re here to help you with your study abroad journey.',
  },
};

export default function ContactPage() {
  return <Contact />;
}
