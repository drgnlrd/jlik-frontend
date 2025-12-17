'use client';

import { motion } from "motion/react";
import { Shield, FileText, Lock, AlertCircle } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export function Terms() {
  const sections = [
    {
      icon: FileText,
      title: "Terms of Service",
      content: [
        {
          subtitle: "Acceptance of Terms",
          text: "By accessing and using EduPath's services, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions. If you do not agree with any part of these terms, you may not use our services."
        },
        {
          subtitle: "Service Description",
          text: "EduPath provides overseas education consultancy and student visa advisory services. We assist students with university selection, application processing, student visa applications, and related educational services. However, final admission and visa approval decisions are at the sole discretion of the universities and immigration authorities."
        },
        {
          subtitle: "Student Responsibilities",
          text: "Students are responsible for providing accurate and complete information including academic records, test scores, and financial documents. Any false or misleading information may result in admission or visa rejection and termination of our services. Students must inform us immediately of any changes to their circumstances."
        },
        {
          subtitle: "Service Fees",
          text: "Service fees are quoted based on the complexity of your case and the services required. Fees must be paid as per the agreed payment schedule. Refund policies are outlined in your service agreement and depend on the stage of application processing."
        },
        {
          subtitle: "Limitation of Liability",
          text: "EduPath provides education consultancy services based on current university admission criteria and visa regulations. We are not liable for admission or visa rejections by universities or immigration authorities, changes in admission policies or visa regulations, or any consequential losses. Our liability is limited to the service fees paid."
        },
        {
          subtitle: "Confidentiality",
          text: "We maintain strict confidentiality of all student information. Information will only be shared with universities, relevant authorities as required for admission and visa processing, or as mandated by law. We do not sell or share student data with third parties for marketing purposes."
        }
      ]
    },
    {
      icon: Lock,
      title: "Privacy Policy",
      content: [
        {
          subtitle: "Information Collection",
          text: "We collect personal information necessary for university applications and student visa processing including name, contact details, passport information, academic records, test scores, and financial documents. This information is collected directly from you or from authorized third parties such as educational institutions."
        },
        {
          subtitle: "Use of Information",
          text: "Your information is used solely for processing university applications, student visa applications, communicating with you about your application status, and improving our services. We may use anonymized data for statistical analysis and service improvement."
        },
        {
          subtitle: "Data Storage and Security",
          text: "All client data is stored securely using industry-standard encryption and security measures. We maintain physical, electronic, and procedural safeguards to protect your information. Data is retained as required by law and our internal policies."
        },
        {
          subtitle: "Third-Party Sharing",
          text: "We share your information only with universities, relevant immigration authorities, test preparation centers, or other entities as necessary for admission and visa processing. We ensure all third parties maintain appropriate data protection standards."
        },
        {
          subtitle: "Your Rights",
          text: "You have the right to access, correct, or request deletion of your personal information. You may also object to processing or request data portability. To exercise these rights, please contact our data protection officer."
        },
        {
          subtitle: "Cookies and Tracking",
          text: "Our website uses cookies to improve user experience and analyze website traffic. You can control cookie preferences through your browser settings. We do not use cookies to collect personally identifiable information without consent."
        }
      ]
    },
    {
      icon: Shield,
      title: "Disclaimer",
      content: [
        {
          subtitle: "No Guarantee of Admission or Visa Approval",
          text: "While we maintain a high success rate, we cannot guarantee university admission or student visa approval. Admission and visa decisions are made solely by universities and immigration authorities based on their assessment criteria and prevailing policies."
        },
        {
          subtitle: "Accuracy of Information",
          text: "We strive to provide accurate and up-to-date information about university admission requirements, application processes, and visa requirements. However, admission criteria and immigration laws change frequently. We recommend verifying current requirements with official university and immigration sources."
        },
        {
          subtitle: "Independent Advice",
          text: "Our education consultancy services do not constitute legal advice. For legal matters related to immigration or student visas, we recommend consulting with a licensed immigration attorney. We are not responsible for interpretations of immigration law."
        },
        {
          subtitle: "Third-Party Links",
          text: "Our website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of these external sites. Access to third-party sites is at your own risk."
        }
      ]
    },
    {
      icon: AlertCircle,
      title: "Important Notices",
      content: [
        {
          subtitle: "Changes to Terms",
          text: "We reserve the right to modify these terms and policies at any time. Changes will be posted on our website with an updated effective date. Continued use of our services after changes constitutes acceptance of the modified terms."
        },
        {
          subtitle: "Governing Law",
          text: "These terms are governed by the laws of the jurisdiction in which EduPath operates. Any disputes will be resolved through arbitration or in the courts of our registered jurisdiction."
        },
        {
          subtitle: "Contact Information",
          text: "For questions about these terms and policies, please contact us at legal@edupath.com or call our customer service line. We aim to respond to all inquiries within 2 business days."
        },
        {
          subtitle: "Severability",
          text: "If any provision of these terms is found to be unenforceable, the remaining provisions will continue in full force and effect. The unenforceable provision will be modified to reflect the parties' intention."
        }
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 to-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl mb-6">Terms & Policies</h1>
            <p className="text-lg text-muted-foreground">
              Please read our terms of service, privacy policy, and disclaimers carefully
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: November 23, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sectionIndex * 0.1 }}
              >
                <Card className="border-border">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <section.icon className="w-8 h-8 text-primary" />
                      <h2 className="text-2xl md:text-3xl">{section.title}</h2>
                    </div>

                    <div className="space-y-6">
                      {section.content.map((item, itemIndex) => (
                        <div key={itemIndex} className="pl-2">
                          <h3 className="mb-3">{item.subtitle}</h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl mb-4">Questions About Our Policies?</h2>
            <p className="text-muted-foreground mb-8">
              If you have any questions or concerns about our terms and policies, 
              please don&apos;t hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:legal@visapath.com" className="text-primary hover:underline">
                legal@visapath.com
              </a>
              <span className="hidden sm:inline text-muted-foreground">•</span>
              <a href="tel:+15551234567" className="text-primary hover:underline">
                +1 (555) 123-4567
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
