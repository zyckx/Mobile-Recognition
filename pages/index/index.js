// index.js
// 获取应用实例
const app = getApp();
const imageCdn = 'https://tdesign.gtimg.com/miniprogram/images';
const swiperList = [
	{
		value: `${imageCdn}/swiper1.png`,
		ariaLabel: '图片1',
	},
	{
		value: `${imageCdn}/swiper2.png`,
		ariaLabel: '图片2',
	},
	{
		value: `${imageCdn}/swiper1.png`,
		ariaLabel: '图片1',
	},
	{
		value: `${imageCdn}/swiper2.png`,
		ariaLabel: '图片2',
	},
];
Page({
	data: {
		current: 1,
		autoplay: true,
		duration: 500,
		interval: 5000,
		swiperList,
		img1: 'https://tdesign.gtimg.com/miniprogram/images/example1.png',
		img2: 'https://tdesign.gtimg.com/miniprogram/images/example2.png',
		img3: 'https://tdesign.gtimg.com/miniprogram/images/example3.png',
		visible: true,
		marquee1: {
			speed: 80,
			loop: -1,
			delay: 0,
		},
		marquee2: {
			speed: 60,
			loop: -1,
			delay: 0,
		},
		content: ['君不见', '高堂明镜悲白发', '朝如青丝暮成雪', '人生得意须尽欢', '莫使金樽空对月'],
	},
	onShow() {
		if (typeof this.getTabBar === "function" && this.getTabBar()) {
			const page = getCurrentPages().pop();
			this.getTabBar().setData({
				value: "/" + page.route,
			});
		}
	},
	onLoad() { },
});
