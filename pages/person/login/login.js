// pages/login/login.js
import Toast from 'tdesign-miniprogram/toast/index';
import {get} from '../../../utils/request'
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		textPassword: '',
		phoneError: false,
		phoneNumber: '',
		isAgreed: true
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
		get('/test_query',{query:2222}).then(res=>{
			Toast({
				context: this,
				selector: '#t-toast',
				message: res,
				theme: 'success',
				direction: 'column',
			});
			console.log(res);
		})
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
	onLogin() {
		if (this.isAgreed) {

		} else {
			Toast({
				context: this,
				selector: '#t-toast',
				message: '请选择是否同意用户协议',
				theme: 'error',
				direction: 'column',
			});
		}
	},
	onPhoneInput(e) {
		const {
			phoneError
		} = this.data;
		const isPhoneNumber = /^[1][3,4,5,7,8,9][0-9]{9}$/.test(e.detail.value);
		if (phoneError === isPhoneNumber) {
			this.setData({
				phoneError: !isPhoneNumber,
			});
		}
	},
	onChange(event) {
		const {
			checked
		} = event.detail;
		console.log(checked)
		this.setData({
			isAgreed: checked
		});
	},
})