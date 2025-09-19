#!/bin/bash
# Deploy DRAMATIC Roman fonts with uppercase and letter spacing

echo "🏛️ Deploying DRAMATIC Roman Typography..."

# Add all changes
git add .

# Commit with clear message
git commit -m "ENHANCE: Dramatic Roman fonts - Cinzel uppercase with letter spacing + Merriweather serif body"

# Push to GitHub
git push origin master

echo "✅ DRAMATIC Roman typography deployed!"
echo "📜 Enhanced fonts:"
echo "   - Cinzel: UPPERCASE headings with letter spacing (Roman inscriptions)"
echo "   - Merriweather: Larger, more readable serif body text"
echo "   - Fallbacks: Times New Roman + Georgia for reliability"
echo "🏛️ Classic Roman look now VERY visible!"
