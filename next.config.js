const rehypePrism = require('@mapbox/rehype-prism');
const remarkSlug = require('remark-slug')
const withImages = require('next-images')

const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
        hastPlugins: [
            rehypePrism
        ],
        remarkPlugins: [
            remarkSlug,
        ]
    }
});
module.exports = withImages(
    withMDX({
        exportTrailingSlash: false,
        exportPathMap: function () {
            return {
                '/': { page: '/' }
            };
        },
        pageExtensions: ['js', 'jsx', 'md', 'mdx']
    })
);