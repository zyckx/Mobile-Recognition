// index.js
// 获取应用实例
const app = getApp();
import ActionSheet, { ActionSheetTheme } from 'tdesign-miniprogram/action-sheet/index';
Page({
	data: {
	
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
	handleAction() {
		ActionSheet.show({
		  theme: ActionSheetTheme.List,
		  selector: '#t-action-sheet',
		  context: this,
		  items: [
			{
			  label: '选项一',
			},
			{
			  label: '选项二',
			},
			{
			  label: '选项三',
			},
			{
			  label: '选项四',
			},
		  ],
		});
	  },
	  showDescAction() {
		ActionSheet.show({
		  theme: ActionSheetTheme.List,
		  selector: '#t-action-sheet',
		  context: this,
		  description: '动作面板描述文字',
		  items: [
			{
			  label: '选项一',
			},
			{
			  label: '选项二',
			},
			{
			  label: '选项三',
			},
		  ],
		});
	  },
	  showIconAction() {
		ActionSheet.show({
		  theme: ActionSheetTheme.List,
		  selector: '#t-action-sheet',
		  context: this,
		  items: [
			{
			  label: '选项一',
			  icon: 'app',
			},
			{
			  label: '选项二',
			  icon: 'app',
			},
			{
			  label: '选项三',
			  icon: 'app',
			},
			{
			  label: '选项四',
			  icon: 'app',
			},
		  ],
		});
	  },
	  handleSelected(e) {
		console.log(e.detail);
	  }
});
