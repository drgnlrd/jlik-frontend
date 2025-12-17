"use client";
import { motion } from "motion/react";
import { Award, Target, Heart, TrendingUp } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import Image from "next/image";

export function About() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for the highest standards in education consulting and student success",
    },
    {
      icon: Heart,
      title: "Student-Centric",
      description:
        "Your dreams and aspirations are at the heart of everything we do",
    },
    {
      icon: Target,
      title: "Results-Focused",
      description:
        "Your success is our success - we're committed to achieving your academic goals",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description:
        "Staying ahead with the latest trends in international education and visa policies",
    },
  ];

  const stats = [
    { number: "12+", label: "Years Experience" },
    { number: "8K+", label: "Students Placed" },
    { number: "50+", label: "Countries" },
    { number: "95%", label: "Visa Success Rate" },
  ];

  return (
    <div>
      {/* Hero Section with Logo */}
      <section className="relative py-20 bg-linear-to-br from-primary/5 via-purple-500/5 to-accent/20 overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-linear-to-bl from-primary/20 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-tr from-blue-500/20 to-transparent rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            {/* Prominent Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
              className="mb-8 flex justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {/* Glowing Background */}
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 30px rgba(186, 57, 75, 0.2)",
                      "0 0 50px rgba(186, 57, 75, 0.4)",
                      "0 0 30px rgba(186, 57, 75, 0.2)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-linear-to-br from-primary/20 to-purple-600/20 rounded-3xl blur-xl"
                />

                {/* Logo Container */}
                <div className="relative bg-white p-8 rounded-3xl shadow-2xl border-2 border-primary/10">
                  <Image
                    src={"/images/jlik-logo-w-text.png"}
                    alt="JLIK Overseas Education"
                    className="w-32 h-32 md:w-40 md:h-40 object-contain"
                    height={480}
                    width={480}
                  />
                </div>

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
                  className="absolute -bottom-4 -right-4"
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
                    className="bg-linear-to-r from-primary to-primary/90 text-white px-4 py-2 rounded-full shadow-xl flex items-center gap-2 text-sm"
                  >
                    <Award className="w-4 h-4" />
                    <span>Est. 2012</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              About{" "}
              <span className="bg-linear-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
                JLIK Overseas Education
              </span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Your trusted partner in navigating the journey to world-class
              overseas education
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl mb-2">{stat.number}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Students studying together"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2012, EduPath was born from a passion to help
                  students achieve their dreams of studying at world-renowned
                  universities. What started as a small education consultancy
                  has grown into a leading overseas education visa specialist.
                </p>
                <p>
                  Our team of experienced education counselors and visa experts
                  has successfully guided over 8,000 students to prestigious
                  universities across the USA, UK, Canada, Australia, Germany,
                  and many more countries. We understand that studying abroad is
                  a life-changing decision, and we&apos;re committed to making
                  your journey smooth and successful.
                </p>
                <p>
                  With partnerships with over 2,000 universities worldwide and
                  an in-depth understanding of education visa policies, we
                  ensure your application process is handled with expertise and
                  care from start to finish.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <value.icon className="w-10 h-10 mx-auto mb-4 text-primary" />
                    <h3 className="mb-3">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl mb-6">Our Mission</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  To empower students to achieve their academic and career
                  aspirations by providing expert, ethical, and personalized
                  overseas education consultancy services that open doors to
                  world-class learning opportunities.
                </p>
                <p>
                  We believe that quality education has the power to transform
                  lives. Our mission is to make international education
                  accessible and achievable for every student, regardless of
                  their background, by offering comprehensive guidance from
                  university selection to visa approval and beyond.
                </p>
                <p>
                  Through our partnerships with leading universities and our
                  deep expertise in education visa processing, we strive to turn
                  your study abroad dreams into reality.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Global education"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4">Why Choose EduPath?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              What sets us apart in the overseas education consultancy industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Counselors",
                description:
                  "Our team consists of certified education consultants with years of experience in international admissions",
              },
              {
                title: "University Partnerships",
                description:
                  "Direct partnerships with 2000+ universities across USA, UK, Canada, Australia, and more",
              },
              {
                title: "High Success Rate",
                description:
                  "95% visa success rate with comprehensive documentation and interview preparation",
              },
              {
                title: "End-to-End Support",
                description:
                  "Complete assistance from profile evaluation to post-arrival support in your destination country",
              },
              {
                title: "Scholarship Guidance",
                description:
                  "Help in securing scholarships and financial aid to make education more affordable",
              },
              {
                title: "Transparent Process",
                description:
                  "Clear communication and honest guidance at every step of your study abroad journey",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
