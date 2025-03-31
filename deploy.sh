#!/bin/bash

set -e

echo "🔄 Committing local changes..."
git add .
git commit -m "Update before deploy" || echo "✅ No new changes to commit."
git push origin main

echo "🛠️ Building the project..."
npm run build

echo "🚀 Deploying to gh-pages..."
npm run deploy

echo "✅ Deployed to: https://EthanPerello.github.io"
