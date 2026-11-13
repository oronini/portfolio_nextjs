import type { MetadataRoute } from 'next';

const BASE_URL = 'https://me.nekodesk.net';
const paths = [
  '',
  '/about',
  '/production',
  '/contact',
  '/operator',
  '/privacy',
  '/disclaimer',
];

const sitemap = (): MetadataRoute.Sitemap =>
  paths.map((path) => ({ url: `${BASE_URL}${path}` }));

export default sitemap;
