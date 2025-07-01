#!/bin/bash

# Push to GitHub repository
echo "Pushing to GitHub repository..."

# Set the remote URL (in case it needs to be updated)
git remote set-url origin https://github.com/codyrutscher/ide-website-tauri.git || git remote add origin https://github.com/codyrutscher/ide-website-tauri.git

# Push to main branch
git push -u origin main

echo "Push complete!"