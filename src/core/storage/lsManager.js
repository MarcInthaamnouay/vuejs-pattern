import PubSub from 'pubsub-js'
import { isEmpty } from 'lodash'

/**
 * Local Storage Manager
 */
const localStorageManager = () => {
  /**
   * Get Data
   * 
   * @param {String} msg 
   * @param {Object} pubsubData 
   * @return {Promise}
   */
  const getData = (msg, pubsubData) => {
    const { key, store, callback } = pubsubData
    if (isEmpty(key) || isEmpty(store)) {
      return callback({ err: `One of the parameter is empty` })
    }

    const storeData = localStorage.getItem(store)
    try {
      const data = JSON.parse(storeData)
      const keyData = data[key]

      if (isEmpty(keyData)) {
        return callback({ err: `Data does not exist for key ${key}` })
      }

      return callback({ data })
    } catch (e) {
      return callback({ err: e })
    }
  }

  /**
   * Set Data
   * 
   * @param {String} msg
   * @param {Object} pubsubData
   * @return {Promise}
   */
  const setData = (msg, pubsubData) => {
    const { key, store, data, callback } = pubsubData

    if (isEmpty(key) || isEmpty(store)) {
      return callback({ err: `One of the parameter is empty`})
    }

    const storeData = localStorage.getItem(store)
    try {
      let parsedData = JSON.parse(storeData)
      if (isEmpty(parsedData)) {
        parsedData = {}
      }

      parsedData[key] = JSON.stringify(data)
      localStorage.setItem(store, JSON.stringify(parsedData))
      return callback({ data: '' })
    } catch (e) {
      return callback({ err: e })
    }
  }

  /**
   * Register
   *    Register Pub Sub events
   */
  const register = () => {
    PubSub.subscribe('GET_LOCAL_DATA', getData)
    PubSub.subscribe('PUT_LOCAL_DATA', setData)
  }

  return {
    register
  }
}

export default localStorageManager
