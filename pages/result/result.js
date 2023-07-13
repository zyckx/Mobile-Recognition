// pages/result/result.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        sensorName: "",
        startTime: "",
        endTime: "",
        computeType: "",
        computeValue: "",
        result: [],
        data: "",
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        const result = wx.getStorageSync("result");
        const search = wx.getStorageSync("search");
        this.setData({
            result,
            sensorName: search.sensorName,
            startTime: search.startTime,
            endTime: search.endTime,
            computeType: search.computeType,
            computeValue: search.computeValue,
        });
        // wx.nextTick(()=>{
        // 	result.forEach((item)=>{
        //         // 使用this.data.computeValue作为对象名
        //        console.log(item[this.data.computeValue]);
        //        //拼接到data中
        //         this.setData({
        //             data:this.data.data+item[this.data.computeValue]+','
        //         })
        //     })
        // })
        if (search.computeType == "DLI") {
            wx.nextTick(() => {
                // var startTime=new Date(search.startTime.replace(/-/g,"/"));
                // var endTime=new Date(search.endTime.replace(/-/g,"/"));
                var total = 0; //      result.forEach((item)=>{ // 使用this.data.computeValue作为对象名 //         console.log(item[this.data.computeValue]); //拼接到data中
                //      total+=(parseFloat(item[this.data.computeValue])+parseFloat(item[this.data.computeValue]))*1440/result.length*60/2/50/1000000 ;
                for (var i = 0; i < result.length; i++) {
                    //       total+=i
                    total += result.data[i].IightIntensity;
                }
                this.setData({
                    data: total,
                }); //      })
            });
        } else {
            wx.nextTick(() => {
                // var startTime=new Date(search.startTime.replace(/-/g,"/"));
                // var endTime=new Date(search.endTime.replace(/-/g,"/"));
                var total = 0;
                result.forEach((item) => {
                    total += parseFloat(item[this.data.computeValue]);
                    this.setData({
                        // data:this.data.data+item[this.data.computeValue]+','
                        data: total / result.length,
                    }); //      })
                });
            });
        }
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {},

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {},

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {},

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {},

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {},

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {},

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {},
    onBack() {
        wx.navigateBack();
    },
    onGoHome() {
        wx.reLaunch({
            url: "/pages/home/home",
        });
    },
});
