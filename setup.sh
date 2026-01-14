#!/bin/bash
# Setup script for my-portfolio
# Run this after installing Node.js

echo "Installing dependencies..."
npm install

echo "Initializing shadcn/ui..."
npx shadcn@latest init --yes

echo "Adding component from v0..."
npx shadcn@latest add "https://v0.app/chat/b/b_Gs8NvvyLIwr?token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..bn8adN6CvDnMClTP.FNTdDz9HSD-3UjPkl38-Tueb5aX2MgNtSpMnIFmPvwYF4YnP65V3EHoAKDQ.vr5BR0TYIQhw0b9zj7lbNQ" --yes

echo "Setup complete! Run 'npm run dev' to start the development server."
