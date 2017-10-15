class Waterfall {
  constructor(el = '.waterfall', column) {
    if (typeof el === 'string') {
      el = document.querySelector(el)
    }
    el.style.display = 'flex'
    // el.style.justifyContent = 'space-between'
    el.style.flexWrap = 'wrap'
    const items = el.querySelectorAll('.waterfall-item') // 未分配列数前的所有item节点
    // 插入列数节点
    const setColumn = () => {
      // 创建一个新的列节点
      const newColumnNode = document.createElement('div')
      newColumnNode.className = 'waterfall-column-wrap'

      // flexbox的子元素高度是一样的，为了获取到不一样的高度，多嵌套一层div
      const col = document.createElement('div')
      col.className = 'waterfall-column'
      newColumnNode.appendChild(col)

      // 有几列就插入几个
      for (let i = 0; i < this.columnCount; i++) {
        el.appendChild(newColumnNode.cloneNode(true))
      }
      this.columns = el.querySelectorAll('.waterfall-column')
    }

    // 假如规定了有几列
    if (typeof column === 'number' && column > 0) {
      this.columnCount = column
    } else {
      // 假如没有规定或者参数错误，就自动分配列数
      const warpWidth = el.offsetWidth
      const innerWidth = items[0].offsetWidth
      this.columnCount = Math.floor(warpWidth / innerWidth)
    }
    setColumn()
    this.arrange(items)
  }
  arrange(arr, animate = 'zoomIn') {
    // 遍历每一个item节点
    for (let a of arr) {
      a.classList.add('animated', animate)

      // 避免漏加类名而影响样式
      if (a.className.indexOf('waterfall-item') === -1) {
        a.classList.add('waterfall-item')
      }

      // 不止一列才判断放到那一列
      if (this.columnCount > 1) {
        let min // 记录高度最小值
        let minIndex // 记录最小值的index

        // 遍历每一列
        Array.from(this.columns).forEach((v, i) => {
          // 第一列的默认为最小值
          if (i === 0) {
            min = v.offsetHeight
          }

          // 假如有更小的，则该值为最小值，并记录index
          if (v.offsetHeight <= min) {
            min = v.offsetHeight
            minIndex = i
          }
        })
        this.columns[minIndex].appendChild(a)
      } else {
        this.columns[0].appendChild(a)
      }
    }
  }
}
export default Waterfall
