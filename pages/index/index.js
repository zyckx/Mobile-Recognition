// index.js
// 获取应用实例
const app = getApp();
const { dislodgeZero } = require("../../utils/util");
Page({
    data: {
        //传感器名称
        sensorName: "",
        mode: "datetime",
        type: "",
        startTime: {
            datetimeVisible: false,
            datetime: new Date().getTime(),
            datetimeText: "开始时间",
        },
        endTime: {
            datetimeVisible: false,
            datetime: new Date().getTime(),
            datetimeText: "结束时间",
        },
        computeType: {
            computeText: "",
            computeValue: "",
            computeVisible: false,
            types: [
                { label: "平均温度", value: "temperature" },
				{ label: "平均光照强度", value: "lightIntensity" },
				{ label: "DLI", value: "lightIntensity" },
            ],
        },
    },
    onShow() {
        if (typeof this.getTabBar === "function" && this.getTabBar()) {
            const page = getCurrentPages().pop();
            this.getTabBar().setData({
                value: "/" + page.route,
            });
        }
    },
    onLoad() {},
    //传感器绑定数值
    inputChange(e) {
        this.setData({
            sensorName: e.detail.value,
        });
    },
    //查询事件
    search() {
		console.log("查询了");
        //判断是否输入传感器名称
        if (this.data.sensorName === "") {
            wx.showToast({
                title: "请输入传感器名称",
                icon: "none",
            });
            return;
        }
        //判断是否选择时间
        if (
            this.data.startTime.datetimeText === "开始时间" ||
            this.data.endTime.datetimeText === "结束时间"
        ) {
            wx.showToast({
                title: "请选择时间",
                icon: "none",
            });
            return;
        }
        //判断是否选择计算类型
        if (this.data.computeType.computeText === "") {
            wx.showToast({
                title: "请选择计算类型",
                icon: "none",
            });
            return;
        }
        
		
		// 储存搜索的信息
        wx.setStorageSync("search", {
            sensorName: this.data.sensorName,
            startTime: dislodgeZero(this.data.startTime.datetime),
			endTime: dislodgeZero(this.data.endTime.datetime),
			computeType: this.data.computeType.computeText,
			computeValue:this.data.computeType.computeValue
		});
		console.log('传感器名称',this.data.sensorName);
        wx.cloud
            .callFunction({
                name: "getResult",
                data: {
                    sensorName: this.data.sensorName,
                    startTime: dislodgeZero(this.data.startTime.datetime),
                    endTime: dislodgeZero(this.data.endTime.datetime),
                },
            })
            .then((res) => {
				if(res.result.data.length===0){
                    wx.showToast({
                        title: '没有数据',
                    })
                }else{
					console.log(res);
                    wx.setStorageSync("result", res.result.data);
                    wx.showToast({
                        title: '查询成功,稍后跳转',
                    })
                    setTimeout(() => {
                        wx.navigateTo({
                            url: "/pages/result/result",
                        });
                    }, 1000)
                }
        
            });
        
    },
    //重置事件

    reset() {
        console.log("重置了");
        this.setData({
            sensorName: "",
            startTime: {
                datetimeVisible: false,
                datetime: new Date().getTime(),
                datetimeText: "开始时间",
            },
            endTime: {
                datetimeVisible: false,
                datetime: new Date().getTime(),
                datetimeText: "开始时间",
            },
            computeType: {
                computeText: "",
                computeValue: "",
                computeVisible: false,
                types: [
                    { label: "平均温度", value: "temperature" },
					{ label: "平均光照强度", value: "lightIntensity" },
					{ label: "DLI", value: "lightIntensity" },
                ],
            },
		});
		wx.showToast({
		  title: '重置成功',
		})
    },
    showPicker(e) {
        const { type } = e?.currentTarget?.dataset;

        console.log(type);

        this.setData({
            type,
            [`${type}.datetimeVisible`]: true,
        });
    },
    hidePicker() {
        const { type } = this.data;
        this.setData({
            [`${type}.datetimeVisible`]: false,
        });
    },
    onConfirm(e) {
        const { value } = e?.detail;
        const { type } = this.data;

        console.log("confim", value);

        this.setData({
            [`${type}.datetime`]: value,
            [`${type}.datetimeText`]: value,
        });

        this.hidePicker();
    },
    onColumnChange(e) {
        console.log("pick", e?.detail?.value);
    },
    //计算类型选择
    onComputeTypeColumnChange(e) {
        console.log("picker pick:", e);
    },

    onComputeTypePickerChange(e) {
        const { key } = e.currentTarget.dataset;
        const { value,label } = e.detail;
		console.log(e.detail);
        console.log("picker change:", e.detail.value);
        this.setData({
            [`computeType.${key}Visible`]: false,
            [`computeType.${key}Value`]: value,
            [`computeType.${key}Text`]: label.join(" "),
        });
        console.log(this.data.computeType.computeValue);
    },

    onComputeTypePickerCancel(e) {
        const { key } = e.currentTarget.dataset;
        console.log(e, "取消");
        console.log("picker1 cancel:");
        this.setData({
            [`computeType.${key}Visible`]: false,
        });
    },

    onComputePicker(e) {
        this.setData({
            [`computeType.computeVisible`]: true,
        });
    },
});
