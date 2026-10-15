import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/dashboard/', '/admin/', '/profile/', '/api/', '/kyc/'],
    },
    sitemap: 'https://www.mervaultfingroup.com/sitemap.xml',
  };
}
