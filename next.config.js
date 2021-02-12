const rehypePrism = require('@mapbox/rehype-prism');
const remarkSlug = require('remark-slug');
const withImages = require('next-images');
const IndexData = require('./data/IndexData');
const routeHandler = require('./utils/routeHandler');

const routes = routeHandler(IndexData);

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
        trailingSlash: true,
        exportPathMap: () => {
            return routes
        },
        pageExtensions: ['js', 'jsx', 'md', 'mdx'],
        publicRuntimeConfig: {
            FE_URL: process.env.FE_URL ? process.env.FE_URL : 'http://localhost:3000/',
            GA_ID: process.env.GA_ID ? process.env.GA_ID : '',
            AMPLITUDE_KEY: process.env.AMPLITUDE_KEY ? process.env.AMPLITUDE_KEY : '',
        }
    })
);