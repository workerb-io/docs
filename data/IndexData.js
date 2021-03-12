const INDEX_DATA = [
    {
        id: 1,
        title: 'Introduction',
        routeName: '/',
        showSorted: true,
        children: null
    },
    {
        id: 2,
        title: 'API Reference',
        routeName: '/apiref',
        showSorted: true,
        children: [
            {
                title: "click",
                routeName: "/click",
                children: null
            },
            {
                title: "download",
                routeName: "/download",
                children: null
            },
            {
                title: "event",
                routeName: "/event",
                children: null
            },
            {
                title: "getAttribute",
                routeName: "/getAttribute",
                children: null
            },
            {
                title: "httpDelete",
                routeName: "/httpDelete",
                children: null
            },
            {
                title: "httpGet",
                routeName: "/httpGet",
                children: null
            },
            {
                title: "httpPost",
                routeName: "/httpPost",
                children: null
            },
            {
                title: "httpPut",
                routeName: "/httpPut",
                children: null
            },
            {
                title: "log",
                routeName: "/log",
                children: null
            },
            {
                title: "notify",
                routeName: "/notify",
                children: null
            },
            {
                title: "open",
                routeName: "/open",
                children: null
            },
            {
                title: "read",
                routeName: "/read",
                children: null
            },
            {
                title: "readAll",
                routeName: "/readAll",
                children: null
            },
            {
                title: "readTable",
                routeName: "/readTable",
                children: null
            },
            {
                title: "readURL",
                routeName: "/readURL",
                children: null
            },
            {
                title: "submit",
                routeName: "/submit",
                children: null
            },
            {
                title: "tab",
                routeName: "/tab",
                children: null
            },
            {
                title: "type",
                routeName: "/type",
                children: null
            },
            {
                title: "runInTab",
                routeName: "/runInTab",
                children: null
            },
            {
                title: "prompt",
                routeName: "/prompt",
                children: null
            },
            {
                title: "logging",
                routeName: "/logging",
                children: null
            },
            {
                title: "select",
                routeName: "/select",
                children: null
            },
            {
                title: "setVars",
                routeName: "/setVars",
                children: null
            }
        ]
    },
    {
        id: 3,
        title: 'Demos',
        routeName: '/demos',
        showSorted: true,
        children: [
            {
                title: "Google Search",
                routeName: "/googlesearch",
                children: null
            },
            {
                title: "Bookmarks++",
                routeName: "/bookmarks",
                children: null
            },
            {
                title: "HTTP APIs",
                routeName: "/httpapis",
                children: null
            },
            {
                title: "Wikipedia",
                routeName: "/wikipedia",
                children: null
            },
            {
                title: "Jenkins Build",
                routeName: "/jenkinsbuild",
                children: null
            },
        ]
    },
    {
        id: 4,
        title: 'How Tos',
        routeName: '/how-tos',
        showSorted: false,
        children: [
            {
                title: "Get Started",
                routeName: "/getStarted",
                children: null
            },
            {
                title: "Build Package",
                routeName: "/buildPackage",
                children: null
            },
            {
                title: "Run Package",
                routeName: "/runPackage",
                children: null
            },
        ]
    },
    {
        id: 5,
        title: 'Developer Guide',
        routeName: '/developerGuide',
        showSorted: false,
        children: [
            {
                title: "WorkerB Ecosystem",
                routeName: "/workerBEcosystem",
                children: null
            },
            {
                title: "Actions",
                routeName: "/actions",
                children: null
            },
            {
                title: "Options",
                routeName: "/options",
                children: null
            },
            {
                title: "Add Folder Description",
                routeName: "/addFolderDescription",
                children: null
            },
            {
                title: "Run Pakcage During Development",
                routeName: "/runPackageDuringDevelopment",
                children: null
            },
        ]
    }
];

module.exports = INDEX_DATA
