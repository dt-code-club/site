#!/bin/sh

# Dependencies:
# - pandoc
# - tree

[ "$(basename "$0")" = 'rebuild.sh' ] && rebuild=1

gen_html() {
    md="$1.md"
    if [ "$(basename "$1")" = index ] || [ "$(basename "$1")" = not_found ]; then
        html="$1.html"
    else
        html="$1/index.html"
    fi

    if [ ! "$rebuild" ] && [ -f "$html" ]; then
        [ -n "$(find "$md"               -newer "$html")" ] ||
        [ -n "$(find 'etc/template.html' -newer "$html")" ] ||
        return
    fi

    echo "Generating $html..."
    mkdir --parents "$(dirname "$html")"
    pandoc --output="$html" --template='etc/template.html' --no-highlight -- "$md"
}

gen_sitemap() {
    echo 'Generating srv/sitemap.md...'
    {
        echo '---'
        echo 'title: Sitemap'
        echo '---'
        echo
        echo '```'
        echo '.'
        tree --charset='ascii' srv | tail --lines='+2'
        echo '```'
    } > srv/sitemap.md
    gen_html 'srv/sitemap'
}

rm srv/sitemap.md

# WARNING: Will not work on file names containing newlines!
find srv -name '*.md' | while read -r f; do
    gen_html "${f%.md}"
done

gen_sitemap
