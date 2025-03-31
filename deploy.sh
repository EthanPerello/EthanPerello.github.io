#!/bin/bash

# Exit on error
set -e

echo "🔄 Committing local changes to main..."
git add .
git commit -m "Update project before deploy" || echo "No changes to commit."

echo "⬆️ Pushing main to GitHub..."
git push origin main

echo "🛠️ Building React app..."
npm run build

echo "🚀 Deploying to GitHub Pages..."
npx gh-pages -d build

echo "✅ Deployed to GitHub Pages! Your site should be live shortly."
