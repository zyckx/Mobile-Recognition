// pages/result/result.js
import {
	post
} from '../../../utils/request'
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		subItem: {
			grade: "",
			item: [{
				name: "1",
				number: "3",
				remark: "2",
				date: "2",
				time: "2"
			},
		],
		},
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad(options) {
		this.getResult()
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady() { },

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow() {
		this.getResult()
		console.log(this.subItem);
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
	getResult() {
		// wx.getStorage({
		// 	key: 'result',
		// 	success: (res) => {
		// 		this.setData({
		// 			subItem: res.data
		// 		})
		// 	}
		// })
		const data = wx.getStorageSync('result')
		// this.setData({
		// 	subItem: data
		// })
	},
	onBack() {
		wx.navigateBack()
	},
	onSubmit() {
		post('/api/submit').then(res => {
			if (res.data.code == 200) {
				wx.showToast({
					title: '提交成功',
					icon: 'success',
					duration: 1000
				})
				setTimeout(() => {
					wx.navigateBack()
				}, 1000)
			} else {
				wx.showToast({
					title: '提交失败',
					icon: 'success',
					duration: 1000
				})
			}
		})
	}
});