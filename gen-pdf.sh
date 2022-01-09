#!/bin/sh

md="$1"
pdf="${md%.md}.pdf"

pandoc "$md" --output="$pdf" --defaults='etc/pdf.yaml'
