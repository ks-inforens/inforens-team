'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Linkedin, Mail, MapPin } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { TeamMemberCard } from '@/components/team-member-card';
import { getGroupLabel, type TeamMember } from '@/data/team';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export function TeamMemberDetails({
  member,
  related,
}: {
  member: TeamMember;
  related: TeamMember[];
}) {
  return (
    <main className="bg-white font-sans text-zinc-900">
      <section className="pt-12 lg:pt-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/team"
            className="inline-flex mx-auto bg-stone-100 px-3 py-1.5 rounded-full items-center gap-1 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="mt-8 grid gap-10 sm:grid-cols-[220px_1fr] sm:items-start lg:grid-cols-[280px_1fr] lg:gap-14"
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-2xl bg-stone-200"
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="280px"
                priority
                className="object-cover"
              />
            </motion.div>

            <div>
              <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: 'easeOut' }}>
                <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
                  {member.name}
                </h1>
                <p className="mt-1.5 text-base font-medium text-orange-700">{member.role}</p>
                {member.location && (
                  <p className="mt-3 flex items-center gap-1.5 text-sm text-zinc-500">
                    <MapPin className="h-4 w-4" />
                    {member.location}
                  </p>
                )}
              </motion.div>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.5, delay: 0.05, ease: 'easeOut' }}
                className="mt-6 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base"
              >
                {member.fullBio}
              </motion.p>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                {member.linkedin && (
                  <Button
                    asChild
                    className="h-11 rounded-full bg-[#db5800] px-5 text-sm font-semibold text-white hover:bg-[#db5800]/90"
                  >
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                )}
                {member.email && (
                  <Button
                    asChild
                    variant="ghost"
                    className="h-11 rounded-full bg-stone-700 px-5 text-sm font-semibold text-white hover:bg-stone-600"
                  >
                    <a href={`mailto:${member.email}`}>
                      <Mail className="mr-2 h-4 w-4" />
                      {member.email}
                    </a>
                  </Button>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Separator className="mb-8" />
            <h2 className="text-center text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
              Other {getGroupLabel(member.group).toLowerCase()}
            </h2>
            <motion.div
              className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
            >
              {related.map((teammate, index) => (
                <TeamMemberCard key={teammate.id} member={teammate} index={index} />
              ))}
            </motion.div>
          </div>
        </section>
      )}
    </main>
  );
}
