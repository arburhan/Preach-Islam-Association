/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: 'https://preachislam.org',
  generateRobotsTxt: true,

  // Exclude admin, dashboard, and auth pages from sitemap
  exclude: [
    '/dashboard/*',
    '/auth/*',
    '/api/*',
    '/admin/*',
  ],

  // robots.txt configuration
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/dashboard', '/auth', '/api', '/admin'],
      },
    ],
    additionalSitemaps: [
      'https://preachislam.org/sitemap.xml',
    ],
  },

  // Transform URLs to set custom priorities
  transform: async (config, path) => {
    // Default priority
    let priority = 0.7;
    let changefreq = 'weekly';

    // Homepage - highest priority
    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    }
    // Important pages - high priority
    else if (['/about', '/donation'].includes(path)) {
      priority = 0.9;
      changefreq = 'weekly';
    }
    // Regular important pages
    else if (['/events', '/volunteer', '/contacts'].includes(path)) {
      priority = 0.8;
      changefreq = 'weekly';
    }
    // Secondary pages
    else if (['/vission-mission', '/project-management', '/marriage'].includes(path)) {
      priority = 0.6;
      changefreq = 'monthly';
    }
    // Event detail pages
    else if (path.startsWith('/events/')) {
      priority = 0.7;
      changefreq = 'weekly';
    }

    return {
      loc: path,
      changefreq: changefreq,
      priority: priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
