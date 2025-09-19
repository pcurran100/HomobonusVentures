#!/bin/bash
# Quick deployment script to push cathedral colors

echo "🚀 Deploying Cathedral Color Scheme..."

# Add all changes
git add .

# Commit with clear message
git commit -m "FIX: Apply cathedral color scheme with hardcoded colors - gold, crimson, deep blue theme"

# Push to GitHub
git push origin master

echo "✅ Cathedral colors deployed! Check your GitHub Pages site in 2-3 minutes."
echo "🎨 Colors applied:"
echo "   - Gold: #D4AF37 (headings, accents)"
echo "   - Crimson: #8B0000 (buttons, logos)"  
echo "   - Deep Blue: #003366 (sections)"
echo "   - Soft White: #F8F8FF (backgrounds)"
echo "   - Royal Purple: #4B0082 (links)"
