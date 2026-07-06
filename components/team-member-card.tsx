'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Linkedin, MapPin } from 'lucide-react';

import type { TeamMember } from '@/data/team';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export function TeamMemberCard({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      transition={{ duration: 0.45, delay: (index % 4) * 0.05, ease: 'easeOut' }}
      className="group rounded-2xl bg-[#fff5f0] p-3 transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-stone-200">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} on LinkedIn`}
            className="absolute bottom-3 right-3 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white text-zinc-900 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        )}
      </div>
      <div className="px-2 pb-2 pt-4">
        <h3 className="text-base font-semibold text-zinc-900">{member.name}</h3>
        <p className="mt-0.5 text-sm font-medium text-orange-700">{member.role}</p>
        {member.location && (
          <p className="mt-2 flex items-center gap-1 text-xs text-zinc-500">
            <MapPin className="h-3 w-3" />
            {member.location}
          </p>
        )}
        <p className="mt-2 text-sm leading-6 text-zinc-600">{member.bio}</p>
      </div>
    </motion.div>
  );
}
