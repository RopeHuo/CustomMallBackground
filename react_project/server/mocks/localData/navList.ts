export default{
	"user": {
		"code": 200,
		"message": "OK",
		"data": [
			{
				"id": 1,
				"user": "admin",
				"pass": "e10adc3949ba59abbe56e057f20f883e",
				"sex": 2,
				"type": 1,
				"status": 1,
				"create_at": "0000-00-00 00:00:00",
				"update_at": "0000-00-00 00:00:00"
			},
			{
				"id": 2,
				"user": "ping",
				"pass": "e10adc3949ba59abbe56e057f20f883e",
				"sex": 2,
				"type": 1,
				"status": 1,
				"create_at": "0000-00-00 00:00:00",
				"update_at": "0000-00-00 00:00:00"
			}
		]
	},
	"head_navigation_list": {
		"code": 200,
		"message": "OK",
		"data": [
			{
				"title": "后台首页",
				"router": "/home",
				"id": 1
			},
			{
				"title": "基础数据",
				"router": "/productManagement",
				"id": 2,
				"childer": [
					{
						"title": "",
						"sort": "1",
						"childer": [
							{
								"title": "产品管理",
								"router": "/productManagement",
								"id": 1
							},
							{
								"title": "规格管理",
								"router": "/specificationManagement",
								"id": 2
							},
							{
								"title": "分类管理",
								"router": "/classifiedManagement",
								"id": 3
							},
							{
								"title": "系列管理",
								"router": "/seriesManagement",
								"id": 4
							},
							{
								"title": "品牌管理",
								"router": "/brandManagement",
								"id": 5
							}
						]
					}
				]
			},
			{
				"title": "进销存管理",
				"router": "/orderList",
				"id": 3,
				"childer": [
					{
						"title": "订单管理",
						"sort": "1",
						"childer": [
							{
								"title": "订单列表",
								"router": "/orderList",
								"id": 1
							},
							{
								"title": "售后订单",
								"router": "/afterSalesOrder",
								"id": 2
							}
						]
					},
					{
						"title": "仓库业务",
						"sort": "2",
						"childer": [
							{
								"title": "订货",
								"router": "/orderGoods",
								"id": 1
							},
							{
								"title": "收货",
								"router": "/receivingGoods",
								"id": 2
							}
						]
					}
				]
			},
			{
				"title": "系统管理",
				"router": "/websiteParameters",
				"id": 4,
				"childer": [
					{
						"title": "系统配置",
						"sort": "1",
						"childer": [
							{
								"title": "网站参数",
								"router": "/websiteParameters",
								"id": 1
							},
							{
								"title": "文件存储",
								"router": "/fileStore",
								"id": 2
							}
						]
					}
				]
			}
		]
	}
}