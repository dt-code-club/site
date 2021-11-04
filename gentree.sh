#!/bin/sh

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
