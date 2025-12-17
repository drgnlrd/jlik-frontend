"use client";

import { Easing, motion, useScroll, useTransform } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  FileText,
  Globe2,
  Shield,
  Users,
  Award,
  BookOpen,
  TrendingUp,
  DollarSign,
  MapPin,
  // Calendar,
  Phone,
  Mail,
  Star,
  // Clock,
  Target,
  // Briefcase,
  Sparkles,
  // Zap,
  Heart,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Badge } from "../ui/badge";
import { useRef, useState } from "react";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const fadeInScale = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// const floatingAnimation = {
//   y: [-10, 10, -10],
//   transition: {
//     duration: 6,
//     repeat: Infinity,
//     ease: "easeInOut",
//   },
// };

const ease: Easing = "easeInOut";

const pulseGlow = {
  boxShadow: [
    "0 0 20px rgba(186, 57, 75, 0.3)",
    "0 0 40px rgba(186, 57, 75, 0.6)",
    "0 0 20px rgba(186, 57, 75, 0.3)",
  ],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: ease,
  },
};

// 3D Tilt Card Component
function TiltCard({
  children,
  className = "",
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
}

export function Home() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const features = [
    {
      icon: Shield,
      title: "Expert Guidance",
      description:
        "Specialized consultants with years of experience in education visa processing",
      gradient: "from-blue-500/10 to-blue-600/10",
    },
    {
      icon: Globe2,
      title: "Global Universities",
      description:
        "Access to top universities across USA, UK, Canada, Australia, and more",
      gradient: "from-purple-500/10 to-purple-600/10",
    },
    {
      icon: Users,
      title: "End-to-End Support",
      description:
        "From university selection to visa approval and post-arrival assistance",
      gradient: "from-pink-500/10 to-pink-600/10",
    },
  ];

  const stats = [
    { number: "8000+", label: "Students Placed", icon: Users },
    { number: "50+", label: "Countries", icon: Globe2 },
    { number: "95%", label: "Visa Success Rate", icon: Award },
    { number: "2000+", label: "Partner Universities", icon: GraduationCap },
  ];

  const countries = [
    {
      name: "United States",
      flag: "🇺🇸",
      programs: "2000+ Universities",
      visaType: "F-1 Student Visa",
      image:
        "https://images.unsplash.com/photo-1671203338889-41b22e825075?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml0ZWQlMjBzdGF0ZXMlMjB1bml2ZXJzaXR5JTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY0NDA1NDAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "United Kingdom",
      flag: "🇬🇧",
      programs: "150+ Universities",
      visaType: "Student Route Visa",
      image:
        "https://images.unsplash.com/photo-1707065634977-ad779c889242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxveGZvcmQlMjB1bml2ZXJzaXR5JTIwY2FtcHVzfGVufDF8fHx8MTc2NDQwNTQwMHww&ixlib=rb-4.1.0&q=80&w=1080",
      color: "from-red-500 to-red-600",
    },
    {
      name: "Canada",
      flag: "🇨🇦",
      programs: "200+ Universities",
      visaType: "Study Permit",
      image:
        "https://images.unsplash.com/photo-1668882698355-923d532fa985?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3JvbnRvJTIwY2FuYWRhJTIwc2t5bGluZXxlbnwxfHx8fDE3NjQzMTEwMDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "from-red-600 to-orange-600",
    },
    {
      name: "Australia",
      flag: "🇦🇺",
      programs: "100+ Universities",
      visaType: "Student Visa (500)",
      image:
        "https://images.unsplash.com/photo-1627817972085-fb1697d97134?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeWRuZXklMjBhdXN0cmFsaWElMjBvcGVyYSUyMGhvdXNlfGVufDF8fHx8MTc2NDMwMDg5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      color: "from-green-500 to-teal-600",
    },
    {
      name: "Germany",
      flag: "🇩🇪",
      programs: "300+ Universities",
      visaType: "Student Visa",
      image:
        "https://images.unsplash.com/photo-1618260397416-12801af7ff7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZXJsaW4lMjBnZXJtYW55JTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2NDQwNTQwMXww&ixlib=rb-4.1.0&q=80&w=1080",
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "Ireland",
      flag: "🇮🇪",
      programs: "50+ Universities",
      visaType: "Study Visa",
      image:
        "https://images.unsplash.com/photo-1621884658672-1863c0100bb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJsaW4lMjBpcmVsYW5kJTIwY2l0eXNjYXBlfGVufDF8fHx8MTc2NDQwNTQwMnww&ixlib=rb-4.1.0&q=80&w=1080",
      color: "from-emerald-500 to-green-600",
    },
  ];

  const topUniversities = [
    {
      name: "Harvard University",
      country: "USA",
      ranking: "#1 Globally",
      image:
        "https://images.unsplash.com/photo-1542843895-1b55d9f8ece8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXJ2YXJkJTIwdW5pdmVyc2l0eSUyMGNhbXB1c3xlbnwxfHx8fDE3NjQzOTk1MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "University of Oxford",
      country: "UK",
      ranking: "#2 Globally",
      image:
        "https://images.unsplash.com/photo-1707065634977-ad779c889242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxveGZvcmQlMjB1bml2ZXJzaXR5JTIwY2FtcHVzfGVufDF8fHx8MTc2NDQwNTQwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Stanford University",
      country: "USA",
      ranking: "#3 Globally",
      image:
        "https://images.unsplash.com/photo-1676354555185-df7a1eb39608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFuZm9yZCUyMHVuaXZlcnNpdHklMjBjYW1wdXN8ZW58MXx8fHwxNzY0NDA1NDAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "University of Toronto",
      country: "Canada",
      ranking: "#1 in Canada",
      image:
        "https://images.unsplash.com/photo-1668882698355-923d532fa985?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3JvbnRvJTIwY2FuYWRhJTIwc2t5bGluZXxlbnwxfHx8fDE3NjQzMTEwMDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "University of Melbourne",
      country: "Australia",
      ranking: "#1 in Australia",
      image:
        "https://images.unsplash.com/photo-1576588728682-273e5c9d5553?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbWVsYm91cm5lJTIwY2FtcHVzfGVufDF8fHx8MTc2NDQwNTQwNHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Technical University Munich",
      country: "Germany",
      ranking: "#1 in Germany",
      image:
        "https://images.unsplash.com/photo-1671383750582-d6ff7b4adcac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdW5pY2glMjB1bml2ZXJzaXR5JTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY0NDA1NDA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const applicationSteps = [
    {
      step: "01",
      title: "Free Consultation",
      description:
        "Discuss your academic goals and career aspirations with our expert counselors",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
    },
    {
      step: "02",
      title: "University Selection",
      description:
        "Get personalized university recommendations based on your profile and preferences",
      icon: GraduationCap,
      color: "from-purple-500 to-pink-500",
    },
    {
      step: "03",
      title: "Application Preparation",
      description:
        "Complete assistance with applications, SOP, LORs, and document preparation",
      icon: FileText,
      color: "from-orange-500 to-red-500",
    },
    {
      step: "04",
      title: "Admission & Visa",
      description:
        "Support with admission offers, visa filing, interview preparation, and approval",
      icon: Award,
      color: "from-green-500 to-emerald-500",
    },
  ];

  const benefits = [
    {
      icon: Target,
      title: "Career Opportunities",
      description:
        "Access to global job markets and better career prospects with international education",
      image:
        "https://images.unsplash.com/photo-1744956581253-abfd023141b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBzdWNjZXNzJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2NDQwMjk2OXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Globe2,
      title: "Cultural Exposure",
      description:
        "Experience diverse cultures, build global networks, and develop international perspective",
      image:
        "https://images.unsplash.com/photo-1758270704025-0e1a1793e1ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBzdHVkeWluZ3xlbnwxfHx8fDE3NjQ0MDU0MDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: BookOpen,
      title: "Quality Education",
      description:
        "Learn from world-class faculty and cutting-edge curriculum at top-ranked universities",
      image:
        "https://images.unsplash.com/photo-1566314748936-ad5426525f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwYm9va3MlMjBlZHVjYXRpb258ZW58MXx8fHwxNzY0MzY0OTI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: TrendingUp,
      title: "Personal Growth",
      description:
        "Develop independence, confidence, and life skills that last a lifetime",
      image:
        "https://images.unsplash.com/photo-1762438135827-428acc0e8941?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwYWNoaWV2ZW1lbnQlMjBncmFkdWF0aW9ufGVufDF8fHx8MTc2NDQwNTQwNHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      university: "Stanford University",
      course: "MS in Computer Science",
      country: "USA 🇺🇸",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      rating: 5,
      text: "JLIK Overseas Education made my dream of studying at Stanford a reality. Their expert guidance through the application process and visa interview was invaluable. Highly recommended!",
    },
    {
      name: "Rahul Mehta",
      university: "University of Oxford",
      course: "MBA",
      country: "UK 🇬🇧",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      rating: 5,
      text: "The team at JLIK Overseas Education is exceptional! They helped me secure admission to Oxford and guided me through every step. Their scholarship advice saved me thousands of dollars.",
    },
    {
      name: "Ananya Patel",
      university: "University of Toronto",
      course: "BBA",
      country: "Canada 🇨🇦",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      rating: 5,
      text: "From university shortlisting to visa approval, JLIK Overseas Education was with me at every step. Their personalized approach and constant support made the entire journey stress-free.",
    },
    {
      name: "Arjun Singh",
      university: "University of Melbourne",
      course: "Engineering",
      country: "Australia 🇦🇺",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      rating: 5,
      text: "Best consultancy for overseas education! They not only helped me get admission but also assisted with accommodation and part-time job opportunities. Thank you, JLIK Overseas Education!",
    },
  ];

  const examPrep = [
    {
      name: "IELTS",
      description: "English proficiency test for UK, Australia, Canada",
      icon: BookOpen,
    },
    {
      name: "TOEFL",
      description: "Required for USA universities",
      icon: BookOpen,
    },
    {
      name: "GRE",
      description: "Graduate Record Examination for masters programs",
      icon: BookOpen,
    },
    {
      name: "GMAT",
      description: "For MBA and business school admissions",
      icon: BookOpen,
    },
    {
      name: "SAT/ACT",
      description: "Undergraduate admissions test for USA",
      icon: BookOpen,
    },
    {
      name: "PTE",
      description: "Alternative English language test",
      icon: BookOpen,
    },
  ];

  const scholarships = [
    {
      title: "Merit-Based Scholarships",
      description: "Academic excellence awards up to 100% tuition",
      icon: Award,
      amount: "Up to $50,000",
    },
    {
      title: "Need-Based Scholarships",
      description: "Financial aid for deserving students",
      icon: DollarSign,
      amount: "Up to $30,000",
    },
    {
      title: "Country-Specific Scholarships",
      description: "Government and university scholarships",
      icon: Globe2,
      amount: "Varies",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Simplified Hero Section with Stock Image */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background */}
        <motion.div style={{ y: yBg }} className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-blue-500/5" />

          {/* Animated Gradient Blobs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-primary/10 rounded-full blur-3xl"
          />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Badge className="mb-6 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground border-none px-4 py-2 shadow-lg">
                  <Sparkles className="w-4 h-4 mr-2 inline" />
                  #1 Education Visa Consultancy
                </Badge>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Study Abroad
                <motion.span
                  className="block bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent mt-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  Your Dreams Await
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Expert education visa consultancy to help you pursue world-class
                education at top universities across the globe. Turn your study
                abroad dreams into reality with JLIK Overseas Education.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <Link href="/contact">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      className="group w-full sm:w-auto shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 relative overflow-hidden"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{
                          x: ["-100%", "100%"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 1,
                        }}
                      />
                      <span className="relative z-10">
                        Book Free Consultation
                      </span>
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 relative z-10" />
                    </Button>
                  </motion.div>
                </Link>
                <Link href="/services">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                    >
                      Explore Services
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>

              <motion.div
                className="flex items-center gap-8 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center"
                    animate={pulseGlow}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </motion.div>
                  <span className="text-muted-foreground">
                    Free Consultation
                  </span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center"
                    animate={pulseGlow}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </motion.div>
                  <span className="text-muted-foreground">
                    95% Visa Success
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative">
                {/* Floating Logo Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0, rotate: -45 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                    delay: 1.5,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="absolute -top-6 -left-6 z-20"
                >
                  <motion.div
                    animate={{
                      y: [0, -12, 0],
                      rotate: [0, 5, 0, -5, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-linear-to-br from-primary to-primary/80 rounded-2xl blur-xl opacity-60" />
                    <div className="relative bg-white p-4 rounded-2xl shadow-2xl border-2 border-primary/20">
                      <Image
                        src={"/images/jlik-logo.png"}
                        alt="JLIK Overseas Education Logo"
                        className="w-20 h-20 object-contain"
                        width={480}
                        height={480}
                      />
                    </div>
                  </motion.div>
                </motion.div>

                {/* Main Hero Image with Modern Effects */}
                <motion.div
                  className="relative rounded-3xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-blue-500 rounded-3xl p-[3px]">
                    <div className="bg-background rounded-3xl h-full w-full" />
                  </div>

                  {/* Image Container */}
                  <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-3xl">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1553893304-448dd3e66fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHN0dWRlbnRzJTIwdW5pdmVyc2l0eSUyMGNhbXB1c3xlbnwxfHx8fDE3NjQ0MDU0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Happy students at university campus"
                      className="w-full h-full object-cover"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-purple-500/10 to-transparent" />
                  </div>
                </motion.div>

                {/* Floating Stats Cards */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
                  className="absolute -bottom-6 -left-6 sm:bottom-8 sm:left-4 z-10"
                >
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="bg-white p-4 sm:p-6 rounded-2xl shadow-2xl border border-border backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <motion.div
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg"
                        animate={pulseGlow}
                      >
                        <Award className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </motion.div>
                      <div>
                        <div className="text-2xl sm:text-3xl">8000+</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">
                          Happy Students
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Floating Success Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 1.4, duration: 0.6, ease: "easeOut" }}
                  className="absolute -top-4 -right-4 sm:top-6 sm:right-6 z-10"
                >
                  <motion.div
                    animate={{
                      y: [0, -6, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                    className="bg-gradient-to-br from-primary via-purple-600 to-blue-600 text-white px-4 py-3 sm:px-6 sm:py-4 rounded-2xl shadow-2xl"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
                      <span className="text-xl sm:text-2xl">95%</span>
                    </div>
                    <div className="text-[10px] sm:text-xs opacity-90">
                      Visa Success
                    </div>
                  </motion.div>
                </motion.div>

                {/* Floating Icon Elements */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.6, duration: 0.5 }}
                  className="absolute top-1/4 -left-4 sm:-left-6 z-10"
                >
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white shadow-xl flex items-center justify-center border-2 border-primary/20"
                  >
                    <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.8, duration: 0.5 }}
                  className="absolute bottom-1/4 -right-4 sm:-right-6 z-10"
                >
                  <motion.div
                    animate={{
                      y: [0, -12, 0],
                      rotate: [0, -5, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white shadow-xl flex items-center justify-center border-2 border-blue-500/20"
                  >
                    <Globe2 className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section with Enhanced Animations */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary/95 to-primary text-primary-foreground relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center"
              >
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    delay: index * 0.2,
                    duration: 5 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <motion.div
                    className="w-12 h-12 mx-auto mb-4 opacity-90"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <stat.icon className="w-full h-full" />
                  </motion.div>
                  <motion.div
                    className="text-4xl md:text-5xl mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.1 + 0.3,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Short About Section with Logo */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Logo & Branding */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Decorative Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-blue-500/5 rounded-3xl transform rotate-3" />
                <div className="absolute inset-0 bg-gradient-to-tl from-primary/5 via-accent/5 to-transparent rounded-3xl transform -rotate-3" />

                {/* Main Logo Container */}
                <motion.div
                  className="relative bg-white rounded-3xl shadow-2xl p-12 border border-primary/10"
                  animate={{
                    boxShadow: [
                      "0 20px 60px rgba(186, 57, 75, 0.1)",
                      "0 25px 70px rgba(186, 57, 75, 0.2)",
                      "0 20px 60px rgba(186, 57, 75, 0.1)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <motion.img
                    src={"/images/jlik-logo-w-text.png"}
                    alt="JLIK Overseas Education Logo"
                    className="w-full h-auto"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  />

                  {/* Decorative Elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-purple-600 rounded-full opacity-20 blur-2xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-blue-500 to-accent rounded-full opacity-20 blur-2xl"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.2, 0.25, 0.2],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  />
                </motion.div>

                {/* Trust Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="absolute -bottom-6 left-1/2 transform -translate-x-1/2"
                >
                  <div className="bg-gradient-to-r from-primary to-primary/90 text-white px-6 py-3 rounded-full shadow-xl flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    <span className="text-sm">Trusted Since 2012</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right: About Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Badge
                  variant="outline"
                  className="mb-4 border-primary/30 text-primary"
                >
                  <Heart className="w-4 h-4 mr-2 inline" />
                  About Us
                </Badge>
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Your Gateway to{" "}
                <span className="bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Global Education
                </span>
              </motion.h2>

              <motion.p
                className="text-lg text-muted-foreground mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                At JLIK Overseas Education, we&apos;ve been transforming dreams
                into reality since 2012. With over 8,000 successful student
                placements and a 95% visa success rate, we&apos;re more than
                just consultants—we&apos;re your partners in achieving academic
                excellence abroad.
              </motion.p>

              <motion.p
                className="text-lg text-muted-foreground mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                From selecting the perfect university to securing your visa and
                settling into your new academic home, we provide comprehensive,
                personalized support every step of the way.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/about">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg" className="shadow-lg">
                      Learn More About Us
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </motion.div>
                </Link>
                <Link href="/contact">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg" variant="outline" className="border-2">
                      Start Your Journey
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border"
              >
                {[
                  { value: "12+", label: "Years" },
                  { value: "50+", label: "Countries" },
                  { value: "2000+", label: "Universities" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-3xl text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section with 3D Tilt Cards */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <Badge
                variant="outline"
                className="px-4 py-2 border-primary/30 text-primary"
              >
                <Sparkles className="w-4 h-4 mr-2 inline" />
                Why Choose Us
              </Badge>
            </motion.div>
            <h2 className="text-4xl md:text-5xl mb-4">
              Why Choose JLIK Overseas Education
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Your trusted partner for overseas education with comprehensive
              support throughout your journey
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <TiltCard className="h-full">
                  <Card className="h-full min-h-[280px] border-border hover:shadow-2xl hover:border-primary/50 transition-all duration-300 relative overflow-hidden group">
                    {/* Animated Gradient Background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      animate={{
                        backgroundPosition: ["0% 0%", "100% 100%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    />

                    <CardContent className="p-8 relative z-10 h-full flex flex-col">
                      <motion.div
                        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-6 group-hover:shadow-lg relative"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <feature.icon className="w-8 h-8 text-primary" />
                      </motion.div>
                      <h3 className="mb-3 text-xl">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Countries Section with Morphing Cards */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Decoration */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <Badge
                variant="outline"
                className="px-4 py-2 border-primary/30 text-primary"
              >
                <Globe2 className="w-4 h-4 mr-2 inline" />
                Global Destinations
              </Badge>
            </motion.div>
            <h2 className="text-4xl md:text-5xl mb-4">
              Popular Study Destinations
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Choose from our wide range of popular study abroad destinations
              with guaranteed visa support
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {countries.map((country, index) => (
              <motion.div key={index} variants={fadeInScale}>
                <TiltCard>
                  <Card className="h-full border-border hover:shadow-2xl hover:border-primary/50 transition-all duration-500 cursor-pointer overflow-hidden group flex flex-col">
                    <div className="h-[200px] overflow-hidden relative flex-shrink-0">
                      <motion.div
                        whileHover={{ scale: 1.15 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full"
                      >
                        <ImageWithFallback
                          src={country.image}
                          alt={country.name}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 transition-all duration-300" />

                      {/* Animated Gradient Overlay */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${country.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                      />

                      <motion.div
                        className="absolute bottom-4 left-4 text-white"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <motion.div
                          className="text-5xl mb-2"
                          whileHover={{ scale: 1.3 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          {country.flag}
                        </motion.div>
                      </motion.div>
                    </div>
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <h3 className="mb-3 text-xl">{country.name}</h3>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <motion.div
                          className="flex items-center gap-2"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{country.programs}</span>
                        </motion.div>
                        <motion.div
                          className="flex items-center gap-2"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{country.visaType}</span>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section - Minimal Design */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <Badge
                variant="outline"
                className="px-4 py-2 border-primary/30 text-primary"
              >
                <TrendingUp className="w-4 h-4 mr-2 inline" />
                Life-Changing Benefits
              </Badge>
            </motion.div>
            <h2 className="text-4xl md:text-5xl mb-4">Why Study Abroad?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Transform your future with global education and unlock
              opportunities that will shape your career
            </p>
          </motion.div>

          {/* Equal Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-2xl bg-card border border-border h-[380px]"
                >
                  {/* Image Background */}
                  <div className="absolute inset-0">
                    <ImageWithFallback
                      src={benefit.image}
                      alt={benefit.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-8">
                    {/* Icon */}
                    <div className="mb-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/90 flex items-center justify-center">
                        <benefit.icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Text */}
                    <h3 className="text-2xl text-white mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-200 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Universities Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <Badge
                variant="outline"
                className="px-4 py-2 border-primary/30 text-primary"
              >
                <GraduationCap className="w-4 h-4 mr-2 inline" />
                Partner Universities
              </Badge>
            </motion.div>
            <h2 className="text-4xl md:text-5xl mb-4">
              Top Partner Universities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We have partnerships with 2000+ world-renowned universities to
              help you achieve academic excellence
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {topUniversities.map((university, index) => (
              <motion.div key={index} variants={fadeInScale}>
                <TiltCard>
                  <Card className="h-full border-border hover:shadow-2xl hover:border-primary/50 transition-all duration-500 overflow-hidden group flex flex-col">
                    <div className="h-[180px] overflow-hidden relative flex-shrink-0">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full"
                      >
                        <ImageWithFallback
                          src={university.image}
                          alt={university.name}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <CardContent className="p-6 flex-1 flex flex-col justify-between">
                      <h3 className="mb-3 text-lg">{university.name}</h3>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <motion.span
                          className="flex items-center gap-1"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Globe2 className="w-4 h-4" />
                          {university.country}
                        </motion.span>
                        <Badge
                          variant="secondary"
                          className="text-primary bg-primary/10 hover:bg-primary/20 transition-colors"
                        >
                          {university.ranking}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center mt-12"
          >
            <Link href="/services">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                >
                  View All Universities
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Application Process Section with Gradient Cards */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <Badge
                variant="outline"
                className="px-4 py-2 border-primary/30 text-primary"
              >
                <Target className="w-4 h-4 mr-2 inline" />
                Application Journey
              </Badge>
            </motion.div>
            <h2 className="text-4xl md:text-5xl mb-4">
              Simple Application Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A streamlined, step-by-step process to make your study abroad
              journey smooth and hassle-free
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applicationSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative h-full"
              >
                <TiltCard className="h-full">
                  <Card className="h-full border-border hover:shadow-2xl hover:border-primary/50 transition-all duration-500 relative overflow-hidden group flex flex-col">
                    {/* Animated Gradient Background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                    />

                    <CardContent className="p-8 relative z-10 flex-1 flex flex-col">
                      <div
                        className={`w-20 h-20 mb-6 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0`}
                      >
                        <item.icon className="w-10 h-10 text-primary" />
                      </div>
                      <div className="text-sm text-primary mb-3 font-mono">
                        STEP {item.step}
                      </div>
                      <h3 className="mb-3 text-xl">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </TiltCard>

                {/* Connecting Line */}
                {index < applicationSteps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-gradient-to-r from-primary/50 to-primary/20"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.5, duration: 0.5 }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-center mt-12"
          >
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300"
                >
                  Start Your Application
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Exam Preparation Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <Badge
                variant="outline"
                className="px-4 py-2 border-primary/30 text-primary"
              >
                <BookOpen className="w-4 h-4 mr-2 inline" />
                Test Preparation
              </Badge>
            </motion.div>
            <h2 className="text-4xl md:text-5xl mb-4">
              Exam Preparation Support
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Expert coaching and preparation for all major standardized tests
              required for overseas education
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            {examPrep.map((exam, index) => (
              <motion.div key={index} variants={fadeInScale}>
                <TiltCard>
                  <Card className="h-full min-h-[200px] border-border hover:shadow-xl hover:border-primary/50 transition-all duration-500 cursor-pointer group">
                    <CardContent className="p-6 text-center h-full flex flex-col items-center justify-center">
                      <motion.div
                        className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:shadow-lg"
                        whileHover={{ scale: 1.15 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <exam.icon className="w-6 h-6 text-primary" />
                      </motion.div>
                      <h3 className="text-lg mb-2">{exam.name}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {exam.description}
                      </p>
                    </CardContent>
                  </Card>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Scholarships Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <Badge
                variant="outline"
                className="px-4 py-2 border-primary/30 text-primary"
              >
                <DollarSign className="w-4 h-4 mr-2 inline" />
                Financial Aid
              </Badge>
            </motion.div>
            <h2 className="text-4xl md:text-5xl mb-4">
              Scholarship Opportunities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We help you discover and apply for scholarships to make your
              education more affordable
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            {scholarships.map((scholarship, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <TiltCard>
                  <Card className="h-full min-h-[300px] border-border hover:shadow-2xl hover:border-primary/50 transition-all duration-500 relative overflow-hidden group">
                    {/* Decorative Elements */}
                    <motion.div
                      className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -mr-20 -mt-20"
                      animate={{
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full -ml-16 -mb-16"
                      animate={{
                        scale: [1, 1.3, 1],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                      }}
                    />

                    <CardContent className="p-8 relative z-10 h-full flex flex-col">
                      <motion.div
                        className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-6 group-hover:shadow-lg"
                        whileHover={{ scale: 1.15 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <scholarship.icon className="w-7 h-7 text-primary" />
                      </motion.div>
                      <h3 className="mb-3 text-xl">{scholarship.title}</h3>
                      <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-1">
                        {scholarship.description}
                      </p>
                      <Badge
                        variant="secondary"
                        className="text-primary bg-primary/10 hover:bg-primary/20 transition-colors w-fit"
                      >
                        {scholarship.amount}
                      </Badge>
                    </CardContent>
                  </Card>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Student Testimonials Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <Badge
                variant="outline"
                className="px-4 py-2 border-primary/30 text-primary"
              >
                <Star className="w-4 h-4 mr-2 inline" />
                Student Reviews
              </Badge>
            </motion.div>
            <h2 className="text-4xl md:text-5xl mb-4">Success Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Hear from our students who are now studying at their dream
              universities around the world
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <TiltCard>
                  <Card className="h-full min-h-[340px] border-border hover:shadow-2xl hover:border-primary/50 transition-all duration-500 group">
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="flex items-start gap-4 mb-4">
                        <motion.div
                          className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ImageWithFallback
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                        <div className="flex-1 min-w-0">
                          <h4 className="mb-1 truncate">{testimonial.name}</h4>
                          <p className="text-xs text-muted-foreground mb-2 truncate">
                            {testimonial.course}
                          </p>
                          <div className="flex items-center gap-1 mb-2">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + i * 0.1 }}
                              >
                                <Star className="w-4 h-4 fill-primary text-primary" />
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-4 leading-relaxed flex-1">
                        &quot;{testimonial.text}&quot;
                      </p>
                      <div className="flex items-center justify-between text-xs mt-auto">
                        <Badge
                          variant="outline"
                          className="text-primary border-primary/30 truncate max-w-[60%]"
                        >
                          {testimonial.university}
                        </Badge>
                        <span className="text-muted-foreground">
                          {testimonial.country}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center mt-12"
          >
            <Link href="/about">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                >
                  View More Success Stories
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-6"
              >
                <Badge
                  variant="outline"
                  className="px-4 py-2 border-primary/30 text-primary"
                >
                  <Phone className="w-4 h-4 mr-2 inline" />
                  Get In Touch
                </Badge>
              </motion.div>
              <h2 className="text-4xl md:text-5xl mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-muted-foreground mb-10 text-lg">
                Book a free consultation with our expert counselors and get
                personalized guidance for your study abroad plans. We&apos;re
                here to help you every step of the way.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    title: "Call Us",
                    content: "+1 (555) 123-4567",
                    detail: "Mon-Sat: 9:00 AM - 6:00 PM",
                  },
                  {
                    icon: Mail,
                    title: "Email Us",
                    content: "info@jlikoverseas.com",
                    detail: "We reply within 24 hours",
                  },
                  {
                    icon: MapPin,
                    title: "Visit Us",
                    content: "123 Education Street",
                    detail: "New York, NY 10001",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.5 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-start gap-4 group"
                  >
                    <motion.div
                      className="w-14 h-14 rounded-xl bg-linear-to-br from-primary/10 to-primary/5 flex items-center justify-center shrink-0 group-hover:shadow-lg transition-shadow"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <motion.div
                        animate={{
                          y: [0, -3, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.3,
                        }}
                      >
                        <item.icon className="w-6 h-6 text-primary" />
                      </motion.div>
                    </motion.div>
                    <div>
                      <h4 className="mb-1">{item.title}</h4>
                      <p className="text-muted-foreground">{item.content}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.detail}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <Link href="/contact">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      className="w-full sm:w-auto shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300"
                    >
                      Book Free Consultation
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <TiltCard>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-3xl blur-2xl opacity-20"
                    animate={{
                      opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1585298799938-a15d7abb8523?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                      alt="Education counseling"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
                  </div>
                </motion.div>
              </TiltCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [20, -20, 20],
            x: [10, -10, 10],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <Badge
                variant="outline"
                className="px-4 py-2 border-white/30 text-white bg-white/10 backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4 mr-2 inline" />
                Start Your Journey Today
              </Badge>
            </motion.div>

            <h2 className="text-4xl md:text-5xl mb-6 max-w-3xl mx-auto leading-tight">
              Turn Your Study Abroad Dreams Into Reality
            </h2>
            <p className="text-lg md:text-xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
              Get in touch with our expert education consultants today and take
              the first step towards your dream university. With 95% visa
              success rate and 8000+ students placed worldwide.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Link href="/contact">
                <motion.div
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    variant="secondary"
                    className="group w-full sm:w-auto shadow-2xl hover:shadow-3xl transition-all duration-300"
                  >
                    Book Your Free Consultation
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </Link>
              <Link href="/services">
                <motion.div
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary transition-all duration-300"
                  >
                    Explore All Services
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
