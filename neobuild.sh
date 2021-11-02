#!/bin/sh

# Todo:
# - Generate PDFs
# - Syntax highlighting
# - Table of contents
# - Metadata

# Dependencies:
# - Pandoc

gen_html() {
    md="$1.md"
    if [ "$(basename "$1")" = index ] || [ "$(basename "$1")" = not_found ]; then
        html="$1.html"
    else
        html="$1/index.html"
    fi

    if [ -f "$html" ]; then
        [ -n "$(find "$md"           -newer "$html")" ] ||
        [ -n "$(find 'template.html' -newer "$html")" ] ||
        return
    fi

    echo "Generating $html..."
    mkdir --parents "$(dirname "$html")"
    pandoc "$md" --output "$html" --template='template.html' --no-highlight
}

# WARNING: Will not work on file names containing newlines!
find dist -name '*.md' | while read -r f; do
    gen_html "${f%.md}"
done
