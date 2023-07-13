Component({
	data: {
		value: '/pages/index/index',
		list: [{
				value: '/pages/index/index',
				label: '首页',
				icon: 'home',
				ariaLabel: '首页'
			},
			{
				value: '/pages/app/app',
				label: '控制台',
				icon: 'app',
				ariaLabel: '我的'
			},
			{
				value: '/pages/notification/notification',
				label: '消息',
				icon: 'notification',
				ariaLabel: '消息'
			},
			{
				value: '/pages/person/person',
				label: '首页',
				icon: 'user',
				ariaLabel: '我的'
			}
		],
	},

	methods: {
		onChange(e) {
			wx.switchTab({
				url: e.detail.value,
			})
		},
	},
});