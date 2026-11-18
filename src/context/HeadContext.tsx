import React, { createContext, useContext } from 'react';

export interface CollectedHead {
  title: string;
  description: string;
  canonicalUrl: string;
  ogType: 'website' | 'article';
  noindex: boolean;
  schemaJson?: object;
}

export interface HeadCollector {
  current: CollectedHead | null;
}

const HeadContext = createContext<HeadCollector | null>(null);

export function HeadProvider({
  collector,
  children,
}: {
  collector: HeadCollector;
  children: React.ReactNode;
}) {
  return <HeadContext.Provider value={collector}>{children}</HeadContext.Provider>;
}

export function useHeadCollector() {
  return useContext(HeadContext);
}
