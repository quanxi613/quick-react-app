
if (!window.nativeMethod) {
  window.nativeMethod = {}
}

const nativeMethod = window.nativeMethod



/**
 * @returns {Object} 版本信息
 *  {
 *    type: 'android|ios',
 *    version: '1.0.1'
 *  }
 */
export function getVersionInfo() {
  console.log('getVersionInfo()')
  if (typeof nativeMethod.getVersionInfo === 'function') {
    return nativeMethod.getVersionInfo()
  }
  return '{"type": "android", "version": "0.5.0"}'
}


/**
 *
 * @param {string} url 版本更新所需url,调用后浏览器打开地址
 */
export function update(url) {
  console.log('update()', url)
  if (typeof nativeMethod.update === 'function') {
    return nativeMethod.update(url)
  }
}
