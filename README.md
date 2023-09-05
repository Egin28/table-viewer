This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Frontend

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Backend

The frontend is fetching data through a mockup endpoint provided on [http://localhost:3004/data](http://localhost:3004/data) from the 'example-data.json' file.

To run the mockup server, install [JSONServer](https://github.com/typicode/json-server)

Then run
```bash
json-server --watch example-data.json --port 3004
```