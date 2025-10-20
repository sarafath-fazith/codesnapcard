'use client';

import { useState, useEffect } from "react";
import { CollectionsHeader } from "@/components/collections/collections-header";
import { CollectionsGrid } from "@/components/collections/collections-grid";
import { AuthModal } from "@/components/auth/auth-modal";
import { Button } from "@/components/ui/button";

// Mock user hook - in a real app, this would come from an auth provider
const useUser = () => {
  const [user] = useState(null); // Simulate a logged-out user
  return { user };
};

export default function MyCollectionPage() {
  const { user } = useUser();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  useEffect(() => {
    if (!user) {
      setIsAuthModalOpen(true);
    }
  }, [user]);

  if (!user) {
    return (
      <>
        <div className="container mx-auto py-8 px-4 md:px-6 text-center">
          <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
          <p className="text-muted-foreground mb-6">
            You must be logged in to view your collection.
          </p>
          <Button onClick={() => setIsAuthModalOpen(true)}>Log In</Button>
        </div>
        <AuthModal open={isAuthModalOpen} onOpenChange={setIsAuthModalOpen} />
      </>
    );
  }

  return (
    <>
      <div className="container mx-auto py-8 px-4 md:px-6">
        <CollectionsHeader />
        <CollectionsGrid />
      </div>
      <AuthModal open={isAuthModalOpen} onOpenChange={setIsAuthModalOpen} />
    </>
  );
}
