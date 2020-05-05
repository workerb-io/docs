const routeHandler = (data, parent='') =>{
    if(data === null) return;
    let routes = {}
    data.forEach(e => {
        routes[parent+e.routeName] = {page: parent+e.routeName}
        if(e.children !==null){
            routes = Object.assign(routes,routeHandler(e.children, e.routeName))
        }
    });
    return routes;
}

module.exports = routeHandler