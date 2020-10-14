
const ak = 'DGvGryGb1ZiwParBgwyAWNCCzimDrCPC'

function loadBaiDuMap () {
  return new Promise((resolve, reject) => {
    if (typeof BMap !== 'undefined') {
      resolve(BMap)
      return true
    }
    window.initCallBack = function () {
      resolve(BMap)
    }
    let script = document.createElement('script')
    script.type = 'text/javascript'
    script.onerror = reject
    script.src = `http://api.map.baidu.com/api?v=3.0&ak=${ ak }&callback=initCallBack`
    document.head.appendChild(script)
  })
}


function loadBaiDuDrawMap () {
  return loadBaiDuMap().then(BMap => {
    let loaded = false
    try {
      loaded = (BMapLib && BMapLib.DrawingManager)
    } catch (e) {
      loaded = false
    }
    if (!loaded) {
      console.log('BMapLib.DrawingManager loading!')


      let script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = 'DrawingManager_min.js'
      document.head.appendChild(script)

      let link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = 'http://api.map.baidu.com/library/DrawingManager/1.4/src/DrawingManager_min.css'
      document.head.appendChild(link)


      // 计算覆盖物的工具类
      let script2 = document.createElement('script')
      script2.type = 'text/javascript'
      script2.src = 'http://api.map.baidu.com/library/GeoUtils/1.2/src/GeoUtils_min.js'
      document.head.appendChild(script2)
    } else {
      console.log('BMapLib.DrawingManager is loaded!')
    }
    return BMap
  })
}

export {loadBaiDuDrawMap, loadBaiDuMap}
