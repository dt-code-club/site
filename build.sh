#!/bin/sh

# Dependencies:
# - Markdown

fail() {
    >&2 echo "$@"
    exit 1
}

gen_html() {
    if [ -f "$1.html" ]; then
        [ -n "$(find "$1.md"                   -newer "$1.html")" ] ||
        [ -n "$(find 'template/template-start' -newer "$1.html")" ] ||
        [ -n "$(find 'template/template-end'   -newer "$1.html")" ] ||
        return
    fi
    echo "Generating $1.html..."
    {
        cat template/template-start
        perl '/usr/local/src/markdown-1.0.1/Markdown.pl' --html4tags "$1.md"
        cat template/template-end
    } > "$1.html"
}

# WARNING: Will not work on file names containing newlines!
find dist -name '*.md' | while read -r f; do
    gen_html "${f%.md}"
done
