#!/bin/sh

{
    echo '---\ntitle: Sitemap\n---\n\n```\n.'
    tree --charset='ascii' srv | tail --lines='+2'
    echo '```'
} > srv/sitemap.md
