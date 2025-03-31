#!/bin/bash

# Stop on error
set -e

echo "🔍 Checking Git repository..."
if [ ! -d ".git" ]; then
  echo "❌ Not a Git repository. Run 'git init' and connect to your GitHub repo first."
  exit 1
fi

echo "🔄 Committing any local changes..."
git add .
git commit -m "Update before deploy" || echo "✅ No new changes to commit."

echo "⬆️ Pushing to main branch on GitHub..."
git push origin main

echo "🛠️ Building the React app..."
npm run build

echo "🚀 Publishing to GitHub Pages via gh-pages branch..."
npx gh-pages -d build

echo "✅ Deployment complete!"
echo "🌐 Site is live at: https://EthanPerello.github.io"
