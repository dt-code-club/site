#!/bin/sh

md="$1.md"
pdf="$1.pdf"

pandoc "$md" --output="$pdf" --defaults='etc/pdf.yaml'
