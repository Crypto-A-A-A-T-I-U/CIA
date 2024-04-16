echo "Setting Database..."
npm install --quiet --no-optional --no-fund --loglevel=error
npx prisma generate
npx prisma migrate dev
npm run dev