<template>
	<div>
		<button @click="clearAny">清除覆盖物</button>
		<button @click="initDrawingManager">绘制区域</button>
		<button @click="genratorMarkers">生成坐标点</button>
<!--		<button @click="isInPolygon">是否在多边形内</button>-->
		<div id="baidu-map">
			ssss
		</div>
	</div>
</template>

<script>
	import {loadBaiDuDrawMap} from './asyncLoadMap'
  export default {
    name: "baiduMap",
		data() {
      return {
        drawingManager: null,
				markers: [],
				polygonList: [],
				resultList: []
			}
		},
		created() {
			this.initMap()
    },
    methods: {
      // 测试随机生成一些坐标点
			genratorMarkers() {
        let bounds = this.bmap.getBounds()
        let sw = bounds.getSouthWest()
        let ne = bounds.getNorthEast()
        let lngSpan = Math.abs(sw.lng - ne.lng)
        let latSpan = Math.abs(ne.lat - sw.lat)
				this.clearAny()
        this.markers = []
				for (let i = 0; i < 100; i ++) {
					let obj = {
						id: 0
					}
					obj.id += 1
					obj.point = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.9), ne.lat - latSpan * (Math.random() * 0.9))
					this.markers.push(obj)
					// 将点添加到地图上
					let marker = new BMap.Marker(obj.point);
					setTimeout(() => {	// 异步操作解决页面渲染时候卡顿
            this.bmap.addOverlay(marker);
					})
					// this.addMarker(obj.point);
				}
			},

			// 获取落在多边形内的定点坐标   绘制完成多边形后的监听事件
      polygonComplete (ply) {
			  let list = ply.getPath()
        let area = new BMap.Polygon(list);
			  let start = new Date()
        for (const mark of this.markers) {
          let result = BMapLib.GeoUtils.isPointInPolygon(mark.point, area);
          if (result) {
            this.resultList.push(mark)
					}
        }
        let end = new Date()
        var nTime = end.getTime() - start.getTime();
        console.log('执行时间', nTime)
        console.log('选中结果', this.resultList)
        // this.isInPolygon(area)
      },


			// 清除覆盖物
      clearAny() {
			  this.bmap.clearOverlays()
			},

      initMap () { // 初始化地图
        let _ = this
        loadBaiDuDrawMap().then(BMap => {
          _.bmap = new BMap.Map('baidu-map')            // 创建Map实例
          let point = new BMap.Point(116.404, 39.915);
					_.bmap.centerAndZoom(point, 15)
          _.bmap.enableScrollWheelZoom()
          _.bmap.clearOverlays()
          _.bmap.addControl(new BMap.NavigationControl({
						anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
						type: BMAP_NAVIGATION_CONTROL_ZOOM
          	})
					)
          _.bmap.addEventListener("tilesloaded",function(){  // 监听地图加载完成后，初始化绘制工具栏
            // _.initDrawingManager()
					});
        })
      },


      initDrawingManager () { // 初始化地图绘制工具,需要在第一次开启绘制时再初始化,如果随着页面加载一起初始化会报错
        if (!this.drawingManager) {
          this.drawingManager = new BMapLib.DrawingManager(this.bmap, {
            isOpen: true, // 是否开启绘制模式
            enableDrawingTool: true, // 是否显示工具栏
            drawingToolOptions: {
              anchor: BMAP_ANCHOR_TOP_RIGHT,
              offset: new BMap.Size(5, 5),
              drawingModes: [
                BMAP_DRAWING_POLYGON,
							]
            },
            // polygonOptions: this.bizAddForm.polygonStyle // 多边形的样式
          })
          // 添加鼠标绘制工具监听事件，用于获取绘制结果
          // 多边形画完之后的事件
          this.drawingManager.addEventListener('polygoncomplete', this.polygonComplete)
          this.drawingManager.setDrawingMode(BMAP_DRAWING_POLYGON);
        }
      },
		}
  }
</script>

<style scoped>
	#baidu-map {
		width: 100%;
		height: 800px;
	}
</style>
