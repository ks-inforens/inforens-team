import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function TeamMemberNotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-2xl font-semibold text-zinc-900">Team member not found</h1>
      <p className="mt-2 max-w-sm text-sm text-zinc-500">
        Sorry, we couldn&apos;t find the person you are looking for!
      </p>
      <Button
        asChild
        className="mt-6 h-11 rounded-full bg-[#db5800] px-6 text-sm font-semibold text-white hover:bg-[#db5800]/90"
      >
        <Link href="/team">Back to team</Link>
      </Button>
    </main>
  );
}
