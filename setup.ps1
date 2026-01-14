# Setup script for my-portfolio (PowerShell)
# Run this after installing Node.js

Write-Host "Installing dependencies..." -ForegroundColor Green
npm install

Write-Host "Initializing shadcn/ui..." -ForegroundColor Green
npx shadcn@latest init --yes

Write-Host "Adding component from v0..." -ForegroundColor Green
npx shadcn@latest add "https://v0.app/chat/b/b_Gs8NvvyLIwr?token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..bn8adN6CvDnMClTP.FNTdDz9HSD-3UjPkl38-Tueb5aX2MgNtSpMnIFmPvwYF4YnP65V3EHoAKDQ.vr5BR0TYIQhw0b9zj7lbNQ" --yes

Write-Host "Setup complete! Run 'npm run dev' to start the development server." -ForegroundColor Green
