/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://rexivo-id.vercel.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://rexivo-id.vercel.app/sitemap.xml',
    ],
  },
  exclude: ['/404', '/500'],
  changefreq: 'daily',
  priority: 0.7,
}