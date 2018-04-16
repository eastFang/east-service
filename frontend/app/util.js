/**
 * 判断是否是PC客户端
 */
export const isPC = () => {
  const userAgentInfo = navigator.userAgent
  const aMobileAgent = ['Android', 'iPhone', 'SybianOS', 'Windows Phone', 'iPad', 'iPod']
  let flag = true
  aMobileAgent.forEach((item) => {
    if (userAgentInfo.indexOf(item) > -1) {
      flag = false
    }
  })
  return flag
}