// pages/app/app.js
import * as echarts from '../../ec-canvas/echarts';

const app = getApp();

function initChart(canvas, width, height, dpr) {
	const chart = echarts.init(canvas, null, {
		width: width,
		height: height,
		devicePixelRatio: dpr // new
	});
	canvas.setChart(chart);

	var option = {
		backgroundColor: "#ffffff",
		series: [{
			label: {
				normal: {
					fontSize: 14
				}
			},
			type: 'pie',
			center: ['50%', '50%'],
			radius: ['20%', '40%'],
			data: [{
				value: 55,
				name: '北京'
			}, {
				value: 20,
				name: '武汉'
			}, {
				value: 10,
				name: '杭州'
			}, {
				value: 20,
				name: '广州'
			}, {
				value: 38,
				name: '上海'
			}]
		}]
	};

	chart.setOption(option);
	return chart;
}
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		img1: 'https://tdesign.gtimg.com/miniprogram/images/example1.png',
		img2: 'https://tdesign.gtimg.com/miniprogram/images/example2.png',
		img3: 'https://tdesign.gtimg.com/miniprogram/images/example3.png',
		border: {
			color: '#f6f6f6',
		},
		ec: {
			onInit: initChart
		}
	},
	onTest(){
		wx.navigateTo({
			url: '/pages/heatmap/index',
		})
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad(options) {

	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady() {

	},

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
	onHide() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload() {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom() {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage() {

	}
})