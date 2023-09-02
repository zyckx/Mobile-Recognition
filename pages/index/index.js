// index.js
import ActionSheet, { ActionSheetTheme } from 'tdesign-miniprogram/action-sheet/index';
import { get } from '../../utils/request'
Page({
	data: {
		history: [
			{
				grade: "string",
				date: "string",
				time: "string",
				courseName: "string",
				item: [
					{
						name: "string",
						number: "string"
					},
					{
						name: "string",
						number: "string"
					},

				]
			}
		],
		historySheet: [],
		confirmBtn: { content: '知道了', variant: 'base' },
		showText: false,
		dialogContent:''
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
	showDescAction() {
		this.getHistory()
		ActionSheet.show({
			theme: ActionSheetTheme.List,
			selector: '#t-action-sheet',
			context: this,
			align: 'left',
			description: '点击选项查看',
			items: [
				{
					label: '选项一',

					suffixIcon: 'chevron-right',
				},
				{
					label: '选项二',

					suffixIcon: 'chevron-right',
				},
				{
					label: '选项三',
					suffixIcon: 'chevron-right',
				}
			],
			// items:ActionSheet
		});
	},
	handleSelected(e) {
		const {index}=e.detail
		console.log(index);
		console.log(this.data.history[index].item[index].name);
		const content=this.data.history[index].item[index].name+' '+this.data.history[index].item[index].number+this.data.history[index].grade+' '+this.data.history[index].date+' '+this.data.history[index].time+' '+this.data.history[index].courseName
		this.setData({
			dialogContent: content
		})
		this.showDialog()
	},
	gotoresult() {
		wx.navigateTo({
			url: '/pages/index/result/result',
		})
	},
	UploadImage(grade) {
		wx.chooseMedia({
			count: 1, // 最多选择的文件个数，可以根据需求修改
			mediaType: ['image', 'video'], // 文件类型，可以选择image、video、mix
			sourceType: ['album', 'camera'], // 图片和视频选择的来源，可以选择album（相册）或camera（相机）
			maxDuration: 30, // 拍摄视频最长拍摄时间，单位秒
			camera: 'back', // 仅在 sourceType 为 camera 时生效，使用后置摄像头
			success(res) {
				const file = res.tempFiles[0]; // 获取选择的文件信息

				// 需要上传的文件路径
				const filePath = file.tempFilePath;
				token = wx.getStorageSync('token');
				// 执行上传操作
				wx.uploadFile({
					url: 'https://your-upload-api-url.com', // 替换为您的上传文件的API地址
					filePath: filePath,
					name: 'file', // 服务器接受文件的字段名
					header: {
						'Content-Type': 'multipart/form-data', // 根据实际需求设置请求头
						'Authorization': `Bearer ${token}`,
					},
					formData: {
						// 可以附加其他表单数据，根据您的API要求
						'grade': grade, // 示例：用户ID
					},
					success(uploadRes) {
						const data = JSON.parse(uploadRes.data);
						const result = Object.assign(data.result, { grade: grade });
						wx.setStorageSync('result', result);
						console.log('上传成功', data);
						// 在这里处理上传成功后的响应数据
					},
					fail(error) {
						console.error('上传失败', error);
						// 在这里处理上传失败的情况
					},
				});
			},
			fail(error) {
				console.error('选择媒体文件失败', error);
			}
		});


	},
	getHistory() {
		get('/api/history', (res) => {
			console.log(res);
			if (res.data.code == 200) {
				// {
				// 	"grade": "string",
				// 	"date": "string",
				// 	"time": "string",
				// 	"courseName": "string",
				// 	"item": [
				// 		{
				// 			"name": "string",
				// 			"number": "string"
				// 		}
				// 	]
				// }
				const sheet = []
				// 遍历item
				for (let i = 0; i < res.data.data.item.length; i++) {
					sheet.push({ label: res.data.data.item[i].name + ' ' + res.data.data.item[i].number })
				}

				this.setData({
					history: res.data.data,
					ActionSheet: sheet
				})
			}
		})
	},
	showDialog() {
		this.setData({ showText: true });
	},

	closeDialog() {
		this.setData({ showText: false });
	},
});