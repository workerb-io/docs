const INDEX_DATA = [
    {
        id: 1,
        title: 'Introduction',
        routeName: '/',
        children: null
    },
    {
        id: 2,
        title: 'API Reference',
        routeName: '/apiref',
        children: [
            {
                id: 1,
                title: 'Read',
                routeName: '/read',
                children: null
            },
            {
                id: 2,
                title: 'Interact',
                routeName: '/interact',
                children: null
            },
            {
                id: 3,
                title: 'Network',
                routeName: '/network',
                children: null
            },
            {
                id: 4,
                title: 'Misc',
                routeName: '/misc',
                children: null
            },
        ]
    },
    {
        id: 3,
        title: 'Examples',
        routeName: '/examples',
        children: null
    },
];

module.exports = INDEX_DATA
