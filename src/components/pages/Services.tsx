'use client';

import { motion } from "motion/react";
import {
  GraduationCap,
  FileText,
  UserCheck,
  BookOpen,
  Plane,
  Home,
  Languages,
  Briefcase
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

// const fadeInUp = {
//   initial: { opacity: 0, y: 30 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.5 }
// };

export function Services() {
  const services = [
    {
      icon: UserCheck,
      title: "Career Counseling",
      description: "Personalized career guidance to help you choose the right course and university based on your academic background, interests, and career aspirations.",
      features: [
        "One-on-one counseling sessions",
        "Psychometric assessments",
        "Course and university matching",
        "Career path planning"
      ]
    },
    {
      icon: GraduationCap,
      title: "University Selection",
      description: "Expert assistance in selecting the best-fit universities that align with your academic profile, budget, and future goals.",
      features: [
        "Access to 2000+ universities",
        "Program comparison and analysis",
        "Scholarship opportunities",
        "Admission requirements guidance"
      ]
    },
    {
      icon: FileText,
      title: "Application Support",
      description: "Comprehensive support throughout the application process, ensuring your application stands out to admission committees.",
      features: [
        "Application form assistance",
        "Statement of Purpose (SOP) writing",
        "Letter of Recommendation (LOR) guidance",
        "Resume/CV preparation"
      ]
    },
    {
      icon: BookOpen,
      title: "Test Preparation",
      description: "Guidance and resources for standardized tests required for international admissions such as IELTS, TOEFL, GRE, GMAT, and SAT.",
      features: [
        "Test preparation resources",
        "Practice tests and materials",
        "Score improvement strategies",
        "Test registration assistance"
      ]
    },
    {
      icon: UserCheck,
      title: "Student Visa Assistance",
      description: "Complete visa application support from documentation to interview preparation, ensuring high success rates.",
      features: [
        "Visa documentation checklist",
        "Application form filling",
        "Mock visa interviews",
        "Post-visa guidance"
      ]
    },
    {
      icon: Plane,
      title: "Pre-Departure Support",
      description: "Essential support to prepare you for life abroad, including travel arrangements, accommodation, and cultural orientation.",
      features: [
        "Pre-departure orientation",
        "Travel booking assistance",
        "Airport pickup coordination",
        "Banking and SIM card guidance"
      ]
    },
    {
      icon: Home,
      title: "Accommodation Assistance",
      description: "Help with finding safe and comfortable accommodation options near your university campus.",
      features: [
        "On-campus housing support",
        "Off-campus accommodation search",
        "Roommate matching services",
        "Lease agreement guidance"
      ]
    },
    {
      icon: Briefcase,
      title: "Post-Arrival Services",
      description: "Continued support even after you reach your destination, helping you settle in and succeed academically.",
      features: [
        "University enrollment assistance",
        "Part-time job guidance",
        "Social security registration",
        "Local orientation support"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Languages,
      title: "Language Training",
      description: "IELTS, TOEFL, and other language proficiency test training programs"
    },
    {
      icon: BookOpen,
      title: "Scholarship Guidance",
      description: "Comprehensive support in finding and applying for scholarships and financial aid"
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
            <h1 className="text-4xl md:text-5xl mb-6">Our Services</h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive education visa and study abroad solutions tailored to your academic goals
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <service.icon className="w-12 h-12 mb-4 text-primary" />
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <div className="space-y-2">
                      <h4 className="text-sm">What We Offer:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4">Additional Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Beyond visa processing, we offer comprehensive educational support services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-start gap-4">
                    <service.icon className="w-10 h-10 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Study Abroad Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4">Study Abroad Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A simple, transparent process from initial consultation to successful enrollment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Profile Evaluation", desc: "Assess your academic background and career goals" },
              { step: "02", title: "University Selection", desc: "Choose the best-fit universities and programs" },
              { step: "03", title: "Application & Visa", desc: "Complete application and visa processing" },
              { step: "04", title: "Departure & Success", desc: "Pre-departure support and safe arrival" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl text-primary">{item.step}</span>
                </div>
                <h3 className="mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Contact us today for a free consultation and let us help you achieve your study abroad dreams
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Schedule Free Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
