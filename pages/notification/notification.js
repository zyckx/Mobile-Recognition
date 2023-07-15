// pages/notification/notification.js
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		tabValue: 0,
		tabLists: [{
			id: 1,
			label: "站内私信",
			value: 0,
		},
		{
			id: 2,
			label: "公告",
			value: 1,
		},
		],
		notificationLists: {
			//私信列表
			messages: [{
				id: 1,
				title: 'test',
				time: '2023年07月14日10:56:19'
			},
			{
				id: 2,
				title: 'test',
				time: '2023年07月14日10:56:19'
			},
			{
				id: 3,
				title: 'test',
				time: '2023年07月14日10:56:19'
			},
			{
				id: 4,
				title: 'test',
				time: '2023年07月14日10:56:19'
			},
			{
				id: 5,
				title: 'test',
				time: '2023年07月14日10:56:19'
			},
			{
				id: 6,
				title: 'test',
				time: '2023年07月14日10:56:19'
			},

			{
				id: 7,
				title: 'test',
				time: '2023年07月14日10:56:19'
			},
			{
				id: 8,
				title: 'test',
				time: '2023年07月14日10:56:19'
			},
			{
				id: 9,
				title: 'test',
				time: '2023年07月14日10:56:19'
			},
			{
				id: 10,
				title: 'test',
				time: '2023年07月14日10:56:19'
			},

			],
			//公告列表
			notices: [{
				id: 1,
				title: 'test',
				time: '2023年07月14日10:56:19'
			}, {
				id: 2,
				title: 'test2',
				time: '2023年07月14日10:56:19'
			}, {
				id: 3,
				title: 'test2',
				time: '2023年07月14日10:56:19'
			},]
		}
	},
	onTabsClick(event) {
		console.log(event);
		this.setData({
			tabValue: event.target.dataset.value
		})
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad(options) { },

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady() { },

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow() {
		if (typeof this.getTabBar === "function" && this.getTabBar()) {
			const page = getCurrentPages().pop();
			this.getTabBar().setData({
				value: "/" + page.route,
			});
		}
	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide() { },

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload() { },

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh() { },

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom() { },

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage() { },
});