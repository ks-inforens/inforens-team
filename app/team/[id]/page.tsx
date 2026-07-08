import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { TeamMemberDetails } from '@/components/team-member-details';
import { allMembers, getMemberById } from '@/data/team';

export function generateStaticParams() {
  return allMembers.map((member) => ({ id: member.id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const member = getMemberById(params.id);
  if (!member) {
    return { title: 'Team member not found | Inforens' };
  }
  return {
    title: `${member.name} — ${member.role} | Inforens`,
    description: member.bio,
  };
}

export default function TeamMemberPage({ params }: { params: { id: string } }) {
  const member = getMemberById(params.id);

  if (!member) {
    notFound();
  }

  const related = allMembers
    .filter((teammate) => teammate.group === member.group && teammate.id !== member.id)
    .slice(0, 4);

  return <TeamMemberDetails member={member} related={related} />;
}
