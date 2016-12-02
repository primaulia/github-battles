import * as axios from 'axios'

const id = 'c62aa8d0971f0b0a9096'
const sec = '4db2d565bbb1ab0c0d62493f413aeb1cb3b65869'
const param = `?client_id=${id}&client_secret=${sec}`

function getUserInfo (username) {
  return axios.get(`https://api.github.com/users/${username}${param}`)
}

const helpers = {
  getPlayersInfo (players) {
    console.log('get players info')
    return axios.all(players.map((player) => {
      return getUserInfo(player)
    })).then((info) => {
      return info.map((user) => {
        return user.data
      })
    }).catch((err) => {
      console.warn('Error in getPlayersInfo', err)
    })
  }
}

export default helpers
