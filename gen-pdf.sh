#!/bin/sh

f="${1%.md}"
echo "Generating $f.pdf..."
pandoc --output="$f.pdf" --defaults='etc/pdf.yaml' -- "$f.md"
