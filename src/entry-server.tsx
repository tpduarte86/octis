import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ServerAppRoutes } from './ServerAppRoutes';
import { HeadProvider, HeadCollector, CollectedHead } from './context/HeadContext';
import { servicesData } from './data/servicesData';
import { buildingsData } from './data/buildingsData';
import { translations } from './translations/content';

export interface PrerenderResult {
  html: string;
  head: CollectedHead | null;
}

export function render(url: string): PrerenderResult {
  const collector: HeadCollector = { current: null };

  const html = renderToString(
    <HeadProvider collector={collector}>
      <StaticRouter location={url}>
        <ServerAppRoutes />
      </StaticRouter>
    </HeadProvider>
  );

  return {
    html,
    head: collector.current,
  };
}

export function getStaticRoutes(): string[] {
  const baseRoutes = [
    '/',
    '/quem-somos',
    '/servicos',
    '/imoveis',
    '/alugar-escritorio-sao-paulo',
    '/alugar-galpao-logistico',
    '/simulador-escritorio',
    '/edificios',
    '/experiencia',
    '/reddit',
    '/duvidas-reddit',
    '/contato',
  ];

  const serviceRoutes = servicesData.map((s) => `/servicos/${s.slug}`);
  const buildingRoutes = buildingsData.map((b) => `/edificios/${b.slug}`);
  const articleRoutes = translations.pt.blog.articles.map((a) => `/reddit/${a.id}`);

  // Deduplicate and preserve order
  return Array.from(new Set([...baseRoutes, ...serviceRoutes, ...buildingRoutes, ...articleRoutes]));
}
