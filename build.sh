#!/bin/sh

# Dependencies:
# - Markdown

gen_html() {
    md="$1.md"
    if [ "$(basename "$1")" = index ] || [ "$(basename "$1")" = not_found ]; then
        html="$1.html"
    else
        html="$1/index.html"
    fi

    if [ -f "$html" ]; then
        [ -n "$(find "$md"                     -newer "$html")" ] ||
        [ -n "$(find 'template/template-start' -newer "$html")" ] ||
        [ -n "$(find 'template/template-end'   -newer "$html")" ] ||
        return
    fi

    echo "Generating $html..."
    mkdir --parents "$(dirname "$html")"
    {
        cat template/template-start
        perl '/usr/local/src/markdown-1.0.1/Markdown.pl' --html4tags "$md"
        cat template/template-end
    } > "$html"
}

# WARNING: Will not work on file names containing newlines!
find dist -name '*.md' | while read -r f; do
    gen_html "${f%.md}"
done
