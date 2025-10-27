'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { HeroSection } from "@/components/home/hero-section";
import { TrendingSection } from "@/components/home/trending-section";
import { FeaturedCollections } from "@/components/collections/featured-collections";

interface Section {
  id: string;
  name: string;
  Component: React.FC;
}

interface SectionsContextType {
  sections: Section[];
  moveSection: (dragIndex: number, hoverIndex: number) => void;
}

const SectionsContext = createContext<SectionsContextType | undefined>(undefined);

const defaultSections: Section[] = [
  { id: 'hero', name: 'Hero Section', Component: HeroSection },
  { id: 'trending', name: 'Trending Section', Component: TrendingSection },
  { id: 'featured', name: 'Featured Collections', Component: FeaturedCollections },
];

export const SectionsProvider = ({ children }: { children: ReactNode }) => {
  const [sections, setSections] = useState<Section[]>(defaultSections);

  const moveSection = (dragIndex: number, hoverIndex: number) => {
    const draggedSection = sections[dragIndex];
    const newSections = [...sections];
    newSections.splice(dragIndex, 1);
    newSections.splice(hoverIndex, 0, draggedSection);
    setSections(newSections);
  };

  return (
    <SectionsContext.Provider value={{ sections, moveSection }}>
      {children}
    </SectionsContext.Provider>
  );
};

export const useSections = () => {
  const context = useContext(SectionsContext);
  if (!context) {
    throw new Error('useSections must be used within a SectionsProvider');
  }
  return context;
};
