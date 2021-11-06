#!/bin/sh

f="${1%.md}"
echo "Generating $f.pdf..."
pandoc "$f.md" --output="$f.pdf" --defaults='etc/default.yaml'
