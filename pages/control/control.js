// pages/app/app.js
const app = getApp();
import { get,post } from "../../utils/request";
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		mode: '',
		dateVisible: false,
		date: new Date('2021-12-23').getTime(), // 支持时间戳传入
		dateText: '',
		// 指定选择区间起始值
		start: '2000-01-01 00:00:00',
		end: '2030-09-09 12:12:12',

		courseList: [ {
            "courseName": "string",
            "order": "string",
            "grade": [
                "string"
            ]
        }],

	},

	showPicker(e) {
		const {
			mode
		} = e.currentTarget.dataset;
		this.setData({
			mode,
			[`${mode}Visible`]: true,
		});
	},
	hidePicker() {
		const {
			mode
		} = this.data;
		this.setData({
			[`${mode}Visible`]: false,
		});
	},
	onConfirm(e) {
		const {
			value
		} = e.detail;
		const {
			mode
		} = this.data;

		console.log('confirm', value);

		this.setData({
			[mode]: value,
			[`${mode}Text`]: value,
		});

		this.hidePicker();
	},

	onColumnChange(e) {
		console.log('pick', e.detail.value);
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

	},
	getCourse(){
		
		post('/api/course',date).then(res=>{
			// "courseName": "string",
            // "order": "string",
            // "grade": [
            //     "string"
            // ]
			console.log(res);
		})
	}
})