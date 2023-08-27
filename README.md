This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## live link:
## https://pc-builder-hazel.vercel.app/
## Getting Started

This is a website that features computer components and provide a page to build a pc and take a look at the cost. 
the website is built with nextjs, react, redux toolkit, 
i used nextjs api router but it didn't work while building, so used a separate backend for it. 
the home page, product details page, product based on category: these pages are statically generated( generated during build time)(ssg)

the pc builder page is server side rendered(ssr). when clicked on a select option, the available product page is also served by ssr. 
the website is responsive through all sized devices.

i implemented only github authentication using next-auth