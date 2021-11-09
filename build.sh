#!/bin/sh

# Dependencies:
# - pandoc
# - tree

root_dir='srv'
domain='dtcode.club'

[ "$1" = '-f' ] && force_build=1

gen_html() {
    md="$1.md"
    basename=$(basename "$1")
    if [ "$basename" = index ] || [ "$basename" = not_found ]; then
        html="$1.html"
    else
        html="$1/index.html"
    fi

    # If the HTML file exists
    # and is newer than both the markdown source and the template,
    # do not build, unless it has been forced with `-f`.
    if [ ! "$force_build" ] && [ -f "$html" ]; then
        [ -n "$(find "$md"               -newer "$html")" ] ||
        [ -n "$(find 'etc/template.html' -newer "$html")" ] ||
        return
    fi

    echo "Generating $html..."
    mkdir --parents "$(dirname "$html")"
    pandoc --output="$html" --defaults='etc/html.yaml' -- "$md"
}

gen_sitemap() {
    {
        echo '---'
        echo 'title: Sitemap'
        echo '---'
        echo
        echo '```'
        echo '.'
        tree --charset='ascii' -- "$root_dir" | tail --lines='+2'
        echo '```'
    } > $root_dir/sitemap.md
    gen_html "$root_dir/sitemap"
}

write_abs_links() {
    md="$1.md"
    pdf="$1.pdf"

    echo "Generating $pdf..."

    # Remove leading `$root_dir` and escape `/` with `\/`
    root_dir=$(echo "${1#$root_dir}/" | sed 's/\//\\\//g')
    # Make relative links (`[text](relative/link)`)
    # into absolute root links (`[text](/root/link)`)
    rel_link_script="s"\
        "/\(\[.\+\](\)\([a-z0-9][\/a-z0-9.-]\+)\)"\
        "/\1$root_dir\2/g"
    # Make absolute domain links (see above)
    # into full links (`[text](https://full/link)`)
    root_link_script="s"\
        "/\(\[.\+\](\)\(\/[a-z0-9][\/a-z0-9.-]\+)\)"\
        "/\1https:\/\/$domain\2/g"
    # File names *must* be lowercase
    # and start with a letter or number,
    # and they may only contain letters, numbers, hyphens, and dots
    sed "$rel_link_script; $root_link_script" "$md" |
        pandoc --output="$pdf" --defaults='etc/pdf.yaml'
}

# Remove sitemap.md to prevent it from being built twice
rm -- "$root_dir/sitemap.md"
# WARNING: Will not work on file names containing newlines!
find "$root_dir" -name '*.md' | while read -r f; do
    gen_html "${f%.md}"
    # write_abs_links "${f%.md}"
done
gen_sitemap
