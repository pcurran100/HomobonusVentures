#!/bin/bash
# Deploy Roman-inspired fonts

echo "🏛️ Deploying Roman-inspired Typography..."

# Add all changes
git add .

# Commit with clear message
git commit -m "FEATURE: Implement Cinzel & Merriweather fonts - Roman-inspired typography for cathedral theme"

# Push to GitHub
git push origin master

echo "✅ Roman typography deployed!"
echo "📜 Fonts applied:"
echo "   - Cinzel: Headings, hero text, buttons, navigation logo"
echo "   - Merriweather: Body text, paragraphs, form inputs"
echo "🏛️ Classic Roman-inspired look now live!"
