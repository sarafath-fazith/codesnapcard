'use client'

import { useSections } from '@/contexts/sections-context'
import { DraggableSection } from './draggable-section'

export function HomePageCustomizer() {
  const { sections, moveSection } = useSections()

  return (
    <div className="space-y-2">
      <p className="text-sm text-muted-foreground">
        Drag and drop to reorder the sections on your home page.
      </p>
      <div className="border rounded-lg p-2 space-y-2 bg-muted/50">
        {sections.map((section, index) => (
          <DraggableSection
            key={section.id}
            id={section.id}
            name={section.name}
            index={index}
            moveSection={moveSection}
          />
        ))}
      </div>
    </div>
  )
}
