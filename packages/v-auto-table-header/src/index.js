/**
 * v-element-table-header: 用于自动显示表格头部
 */
import './index.css'
import { addResizeListener, removeResizeListener } from 'element-ui/src/utils/resize-event'
export default {
  name: 'element-table-header',
  option: {
    inserted (el, binding, vnode) {
      const instance = vnode.componentInstance

      instance.$nextTick(() => {
        const headerWrapper = instance.$refs.headerWrapper
        const fixedHeaderWrapper = instance.$refs.fixedHeaderWrapper
        const rightFixedHeaderWrapper = instance.$refs.rightFixedHeaderWrapper

        // 表头高度补偿
        const newDiv = document.createElement('div')
        const headerHeight = headerWrapper.offsetHeight
        setStyle(newDiv, 'height', headerHeight + 'px')
        setStyle(newDiv, 'display', 'none')
        instance.$el.insertBefore(newDiv, headerWrapper)

        const offsetParent = el.offsetParent

        // border
        const border = instance.border ? 1 : 0
        // 当前table距离左边距离
        let left = getOffset(el).left + border || 0
        let right = getOffset(el).right || 0
        // 当前table的父级定位元素，相对于顶部距离
        let top = getOffset(offsetParent).top || 0
        const screenWidth = screen.width

        setStyle(headerWrapper, 'width', headerWrapper.offsetWidth + 'px')

        // 父级滚动监听
        let offsetParentTicking = false
        let isResetFixed = false
        let isSetFixed = false

        instance.handleOffsetParentScroll = function () {
          if (!offsetParentTicking) {
            window.requestAnimationFrame(function () {
              if (offsetParent.scrollTop < el.offsetTop || el.offsetTop === 0 || offsetParent.scrollTop > el.offsetTop + el.offsetHeight - headerHeight * 2) {
                isSetFixed = false
                if (!isResetFixed) {
                  setStyle(newDiv, 'display', 'none')
                  resetTableHeaderFixed()

                  isResetFixed = true
                }
              } else {
                isResetFixed = false

                if (!isSetFixed) {
                  setStyle(newDiv, 'display', 'block')
                  setTableHeaderFixed()

                  isSetFixed = true
                }
              }
              offsetParentTicking = false
            })
            offsetParentTicking = true
          }
        }

        instance.autoTableHeaderResizeListener = function () {
          left = getOffset(el).left + border || 0
          right = getOffset(el).right || 0
          top = getOffset(offsetParent).top || 0
          setStyle(headerWrapper, 'width', el.offsetWidth + 'px')

          if (!(offsetParent.scrollTop < el.offsetTop || el.offsetTop === 0)) {
            setTableHeaderFixed()
          }
        }

        addResizeListener(el, instance.autoTableHeaderResizeListener)

        // 监听父级定位元素滚动事件，动态设置固定头部显隐
        offsetParent.addEventListener('scroll', instance.handleOffsetParentScroll)

        function setTableHeaderFixed () {
          setStyle(headerWrapper, 'position', 'fixed')
          setStyle(headerWrapper, 'top', top + 'px')
          setStyle(headerWrapper, 'left', left + 'px')
          setStyle(headerWrapper, 'zIndex', 4)

          if (fixedHeaderWrapper) {
            setStyle(fixedHeaderWrapper, 'position', 'fixed')
            setStyle(fixedHeaderWrapper, 'top', top + 'px')
            setStyle(fixedHeaderWrapper, 'left', left + 'px')
            setStyle(fixedHeaderWrapper, 'zIndex', 4)
          }

          if (rightFixedHeaderWrapper) {
            setStyle(rightFixedHeaderWrapper, 'position', 'fixed')
            setStyle(rightFixedHeaderWrapper, 'top', top + 'px')
            setStyle(rightFixedHeaderWrapper, 'right', screenWidth - right + 'px')
            setStyle(rightFixedHeaderWrapper, 'zIndex', 5)
          }
        }

        function resetTableHeaderFixed () {
          setStyle(headerWrapper, 'position', '')
          setStyle(headerWrapper, 'top', '')
          setStyle(headerWrapper, 'left', '')
          setStyle(headerWrapper, 'zIndex', '')

          if (fixedHeaderWrapper) {
            setStyle(fixedHeaderWrapper, 'position', '')
            setStyle(fixedHeaderWrapper, 'top', '')
            setStyle(fixedHeaderWrapper, 'left', '')
            setStyle(fixedHeaderWrapper, 'zIndex', '')
          }

          if (rightFixedHeaderWrapper) {
            setStyle(rightFixedHeaderWrapper, 'position', '')
            setStyle(rightFixedHeaderWrapper, 'top', '')
            setStyle(rightFixedHeaderWrapper, 'right', '')
            setStyle(rightFixedHeaderWrapper, 'zIndex', '')
          }
        }
      })
    },
    unbind (el, binding, vnode) {
      const instance = vnode.componentInstance
      removeResizeListener(el, instance.autoTableHeaderResizeListener)
    }
  }
}

function getOffset (el) {
  const rect = el.getBoundingClientRect()
  const win = el.ownerDocument.defaultView
  return {
    top: rect.top + win.pageYOffset,
    left: rect.left + win.pageXOffset,
    right: rect.right + win.pageXOffset
  }
}

function setStyle (el, attribute, value) {
  el.style[attribute] = value
}
