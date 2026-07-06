'use client';

import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, HeartHandshake, Users } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TeamMemberCard } from '@/components/team-member-card';
import { coreTeam, mentors, stats, supportTeam } from '@/data/team';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const groupIcons = {
  core: Users,
  mentors: GraduationCap,
  support: HeartHandshake,
};

export default function TeamPage() {
  return (
    <main className="bg-white font-sans text-zinc-900">
      {/* Hero */}
      <section className="pt-16 lg:pt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: 'easeOut' }}>
              <h1 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
                Meet our team
              </h1>
            </motion.div>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
              className="mt-5 text-sm leading-7 tracking-tight text-zinc-600 sm:text-base"
            >
              Inforens is built by people who have lived the study-abroad journey
              themselves: founders, mentors, and all our supporters who show up for
              every student, ever step of the way!
            </motion.p>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            className="mx-auto mt-10 grid max-w-4xl gap-2 rounded-3xl bg-black/5 p-2 sm:grid-cols-2 lg:grid-cols-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-white p-5 text-center">
                <p className="text-2xl font-semibold text-zinc-900 sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-zinc-500">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team tabs */}
      <section className="py-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
        >
          <Tabs defaultValue="core" className="flex flex-col items-center">
            <TabsList>
              <TabsTrigger value="core">Core team</TabsTrigger>
              <TabsTrigger value="mentors">Mentors</TabsTrigger>
              <TabsTrigger value="support">Support team</TabsTrigger>
            </TabsList>

            <TabsContent value="core" className="w-full">
              <TeamGroupIntro
                icon={groupIcons.core}
                heading="The founders and leads steering Inforens"
                body="The people setting the direction, from product and design to growth and partnerships."
              />
              <TeamGrid members={coreTeam} />
            </TabsContent>

            <TabsContent value="mentors" className="w-full">
              <TeamGroupIntro
                icon={groupIcons.mentors}
                heading="Mentors who've walked the same path"
                body="Verified current and recent international students, ready to share what they wish they'd known sooner."
              />
              <TeamGrid members={mentors} />
            </TabsContent>

            <TabsContent value="support" className="w-full">
              <TeamGroupIntro
                icon={groupIcons.support}
                heading="The team keeping every journey on track"
                body="From your first message to your final visa question, this is the team behind the scenes."
              />
              <TeamGrid members={supportTeam} />
            </TabsContent>
          </Tabs>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-2xl bg-stone-800 px-6 py-12 text-center text-white sm:px-8">
            <p className="text-lg font-semibold sm:text-xl">
              Studied abroad already? Help the next student get there.
            </p>
            <p className="mx-auto mt-2 max-w-md text-sm text-zinc-300">
              Join 150+ verified mentors sharing real, first-hand guidance with
              students following in their footsteps.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Button
                asChild
                className="h-12 rounded-full bg-[#db5800] px-6 text-base font-semibold text-white hover:bg-[#db5800]/90"
              >
                <a href="https://www.inforens.com/become-a-mentor">
                  Become a mentor
                  <ArrowRight strokeWidth={3} className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function TeamGroupIntro({
  icon: Icon,
  heading,
  body,
}: {
  icon: typeof Users;
  heading: string;
  body: string;
}) {
  return (
    <motion.div
      className="mx-auto max-w-2xl text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-[#db5800]/75 text-white">
        <Icon className="h-5 w-5" />
      </div>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
        {heading}
      </h2>
      <p className="mt-3 text-sm leading-6 text-zinc-500 sm:text-base">{body}</p>
    </motion.div>
  );
}

function TeamGrid({ members }: { members: (typeof coreTeam)[number][] }) {
  return (
    <motion.div
      className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={stagger}
    >
      {members.map((member, index) => (
        <TeamMemberCard key={member.name + index} member={member} index={index} />
      ))}
    </motion.div>
  );
}
