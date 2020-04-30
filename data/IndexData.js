const INDEX_DATA = [
    {
        id: 1,
        title: 'Introduction',
        routeName: '/',
        children: null
    },
    {
        id: 2,
        title: 'Samples',
        routeName: '/samples',
        children: null
    },
    {
        id: 3,
        title: 'Functions',
        routeName: '/functions',
        children: [
            {
                id: 1,
                title: 'open',
                routeName: '/open',
            },
            {
                id: 2,
                title: 'actions',
                routeName: '/actions',
            },
            {
                id: 3,
                title: 'misc',
                routeName: '/misc',
            },
        ]
    }
]
export default INDEX_DATA;