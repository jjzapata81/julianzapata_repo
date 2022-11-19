const pathConstants = {
    API:'/api',
    ROOT: '/',
    ORGANIZATION: '/organization',
    ORGANIZATION_BY_ID: '/organization/:id',
    METRICS:'/metrics',
    TRIBE_BY_ID:'/tribes/:id'
}

const entityType = {
    ORGANIZATIONS: {
        name:'organizations',
        id:'id_organization'
    },
    TRIBES: {
        name:'tribes',
        id:'id_tribe'
    },
    REPOSOTORIES: {
        name:'repositories',
        id:'id_repository'
    },
    METRICS: {
        name:'metrics',
        id:'id_metric'
    }
}

export {
    pathConstants,
    entityType
}