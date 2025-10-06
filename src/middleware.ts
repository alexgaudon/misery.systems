import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();

  if (context.url.pathname.match(/\.(jpg|jpeg|png|svg|webp|gif|bmp|ico)$/)) {
    response.headers.set('Cache-Control', 'public, max-age=31536000');
  }

  return response;
});