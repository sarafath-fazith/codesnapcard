'use client'

import { useSections } from '@/contexts/sections-context';

export default function HomePage() {
  const { sections } = useSections();

  return (
    <div className="min-h-screen bg-background">
      <main>
        {sections.map(({ id, Component }) => (
          <Component key={id} />
        ))}
      </main>
    </div>
  );
}
