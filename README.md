#一个可自定义商城后台项目

前端开发框架采用dva，UI框架采用antd，后端使用egg+ts，数据库使用mysql

```├── README.md
└── react_project
    ├── README.md
    ├── config
    │   ├── env.js
    │   ├── jest
    │   │   ├── cssTransform.js
    │   │   └── fileTransform.js
    │   ├── modules.js
    │   ├── paths.js
    │   ├── pnpTs.js
    │   ├── webpack.config.js
    │   └── webpackDevServer.config.js
    ├── config-overrides.js
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── css
    │   │   └── reset.css
    │   ├── index.html
    │   └── robots.txt
    ├── scripts
    │   ├── build.js
    │   ├── start.js
    │   └── test.js
    ├── server
    │   ├── README.md
    │   ├── app
    │   │   ├── controller
    │   │   │   └── home.ts
    │   │   ├── public
    │   │   ├── router.ts
    │   │   └── service
    │   │       └── Test.ts
    │   ├── appveyor.yml
    │   ├── config
    │   │   ├── config.default.ts
    │   │   ├── config.local.ts
    │   │   ├── config.prod.ts
    │   │   └── plugin.ts
    │   ├── logs
    │   │   └── server
    │   │       ├── common-error.log
    │   │       ├── egg-agent.log
    │   │       ├── egg-schedule.log
    │   │       ├── egg-web.log
    │   │       └── server-web.log
    │   ├── mocks
    │   │   └── localData
    │   │       └── navList.ts
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── run
    │   │   ├── agent_config.json
    │   │   ├── agent_config_meta.json
    │   │   ├── agent_timing_23348.json
    │   │   ├── application_config.json
    │   │   ├── application_config_meta.json
    │   │   ├── application_timing_23349.json
    │   │   ├── application_timing_23413.json
    │   │   ├── application_timing_23467.json
    │   │   ├── application_timing_23494.json
    │   │   ├── application_timing_23540.json
    │   │   ├── application_timing_23586.json
    │   │   ├── application_timing_23612.json
    │   │   ├── application_timing_23664.json
    │   │   ├── application_timing_23695.json
    │   │   ├── application_timing_23723.json
    │   │   ├── application_timing_23766.json
    │   │   ├── application_timing_23805.json
    │   │   ├── application_timing_23815.json
    │   │   └── router.json
    │   ├── test
    │   │   └── app
    │   │       ├── controller
    │   │       │   └── home.test.ts
    │   │       └── service
    │   │           └── Test.test.ts
    │   ├── tsconfig.json
    │   ├── tslint.json
    │   └── typings
    │       ├── app
    │       │   ├── controller
    │       │   │   └── index.d.ts
    │       │   ├── index.d.ts
    │       │   └── service
    │       │       └── index.d.ts
    │       ├── config
    │       │   ├── index.d.ts
    │       │   └── plugin.d.ts
    │       └── index.d.ts
    ├── src
    │   ├── assets
    │   │   └── img
    │   │       └── login
    │   │           └── bg.jpg
    │   ├── components
    │   │   ├── BasicData
    │   │   │   ├── BrandManagement
    │   │   │   │   ├── components.js
    │   │   │   │   └── index.js
    │   │   │   ├── ClassifiedManagement
    │   │   │   │   ├── components.js
    │   │   │   │   └── index.js
    │   │   │   ├── ProductManagement
    │   │   │   │   ├── components.js
    │   │   │   │   └── index.js
    │   │   │   ├── SeriesManagement
    │   │   │   │   ├── components.js
    │   │   │   │   └── index.js
    │   │   │   └── SpecificationManagement
    │   │   │       ├── components.js
    │   │   │       └── index.js
    │   │   ├── Home
    │   │   │   ├── components.js
    │   │   │   └── index.js
    │   │   ├── Loading
    │   │   │   ├── PageLoading.js
    │   │   │   └── PageLoading.less
    │   │   ├── NotFound
    │   │   │   └── NotFound
    │   │   │       ├── components.js
    │   │   │       └── index.js
    │   │   ├── PurchaseSale
    │   │   │   ├── AfterSalesOrder
    │   │   │   │   ├── components.js
    │   │   │   │   └── index.js
    │   │   │   ├── OrderGoods
    │   │   │   │   ├── components.js
    │   │   │   │   └── index.js
    │   │   │   ├── OrderList
    │   │   │   │   ├── components.js
    │   │   │   │   └── index.js
    │   │   │   └── ReceivingGoods
    │   │   │       ├── components.js
    │   │   │       └── index.js
    │   │   └── SystemManagement
    │   │       └── WebsiteParameters
    │   │           ├── components.js
    │   │           └── index.js
    │   ├── config.js
    │   ├── index.js
    │   ├── mocks
    │   │   ├── demo.js
    │   │   └── index.js
    │   ├── models
    │   │   ├── index.js
    │   │   ├── login
    │   │   │   ├── effects
    │   │   │   │   └── effects.js
    │   │   │   ├── index.js
    │   │   │   ├── reducers
    │   │   │   │   └── reducers.js
    │   │   │   └── state
    │   │   │       └── state.js
    │   │   └── navigation
    │   │       ├── effects
    │   │       │   └── effects.js
    │   │       ├── index.js
    │   │       ├── reducers
    │   │       │   └── reducers.js
    │   │       └── state
    │   │           └── state.js
    │   ├── pages
    │   │   ├── errorPage
    │   │   │   └── ErrorPage.js
    │   │   ├── index
    │   │   │   ├── Index.js
    │   │   │   └── style.less
    │   │   └── login
    │   │       ├── Login.js
    │   │       └── index.less
    │   ├── routes
    │   │   ├── index.js
    │   │   └── routerTable.js
    │   ├── serviceWorker.js
    │   ├── services
    │   │   ├── apiConfig.js
    │   │   └── request.js
    │   ├── setupProxy.js
    │   ├── test
    │   │   └── App.test.js
    │   └── utils
    │       ├── authentication.js
    │       ├── core.js
    │       └── packMock.js
    └── yarn.lock
```