import rss from '@astrojs/rss';
import type { APIContext } from 'astro';

import { SITE, METADATA, APP_BLOG } from '~/config';
import { fetchPosts } from '~/utils/blog';
import { getPermalink } from '~/utils/permalinks';

export const GET = async (context: APIContext) => {
  if (!APP_BLOG.isEnabled) {
    return new Response(null, {
      status: 404,
      statusText: 'Not found',
    });
  }

  const posts = await fetchPosts();

  const rssItems = posts.map((post) => ({
    link: getPermalink(post.permalink, 'post'),
    title: post.title,
    description: post.excerpt || '',
    pubDate: post.publishDate,
  }));

  return rss({
    title: `${SITE.name} Blog`,
    description: METADATA?.description || '',
    site: context.site ?? SITE.site,
    items: rssItems,
    trailingSlash: SITE.trailingSlash,
  });
};
