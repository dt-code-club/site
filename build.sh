#!/bin/sh

# Dependencies:
# - pandoc
# - tree

root_dir=srv

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
    pandoc --output="$html" --defaults='etc/html.yaml' -- "$md"
}

gen_sitemap() {
    echo "Generating $root_dir/sitemap/index.html..."
    mkdir --parents "$root_dir/sitemap"
    {
        echo '---'
        echo 'title: Sitemap'
        echo '---'
        echo
        echo '```'
        echo '.'
        tree --charset='ascii' "$root_dir" | tail --lines='+2'
        echo '```'
    } | pandoc --output="$root_dir/sitemap/index.html" --defaults='etc/html.yaml'
}

write_abs_links() {
    dir=$(echo "${1#$root_dir}/" | sed 's/\//\\\//g')
    rel_link_script="s/\(\[.\+\](\)\([a-z0-9][\/a-z0-9.-]\+)\)/\1$dir\2/g"
    root_link_script="s/\(\[.\+\](\)\(\/[a-z0-9][\/a-z0-9.-]\+)\)/\1https:\/\/dtcode.club\2/g"
    sed "$rel_link_script; $root_link_script" "$f"
}

# WARNING: Will not work on file names containing newlines!
find "$root_dir" -name '*.md' | while read -r f; do
    gen_html "${f%.md}"
    # write_abs_links "${f%.md}"
done

gen_sitemap
