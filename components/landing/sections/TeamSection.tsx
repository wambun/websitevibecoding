'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { leadershipTeam, boardMembers } from '@/data/content/team';
import { Linkedin } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 20,
    },
  },
};

export function TeamSection() {
  return (
    <section className="section bg-cream">
      <div className="container-main">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="badge badge-primary mb-4">Our Team</span>
          <h2 className="text-h2 text-primary mb-4">
            Meet the <span className="text-gradient-primary">Leadership</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our experienced team brings decades of HR, payroll, and benefits expertise
            to help your business thrive.
          </p>
        </motion.div>

        {/* Leadership Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16"
        >
          {leadershipTeam.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-white rounded-card overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Bio overlay on hover */}
                  <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm line-clamp-4">
                      {member.bio}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {member.title}
                  </p>
                  {member.credentials && (
                    <p className="text-xs text-accent font-medium mt-1">
                      {member.credentials}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Board of Directors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h3 className="text-h3 text-primary mb-4">Board of Directors</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Guided by industry veterans and strategic investors committed to our success.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4"
        >
          {boardMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              className="bg-white rounded-xl p-4 text-center shadow-soft hover:shadow-card transition-all duration-300"
            >
              {/* Initials avatar */}
              <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <span className="text-primary font-semibold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h4 className="font-medium text-foreground text-sm">{member.name}</h4>
              <p className="text-xs text-muted-foreground mt-1">{member.title}</p>
              {member.company && (
                <p className="text-xs text-accent mt-0.5">{member.company}</p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
