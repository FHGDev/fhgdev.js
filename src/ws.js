const events = require('events')
const readyEvent = new events.EventEmitter()
const ws = require('ws')
const codes = require('./Misc/Constants').OPCodes
const socket = new ws(`wss://gateway.discord.gg/?v=6&encoding=json`)
var data;
socket.onopen = () => {
  console.log("OPEN")
}

socket.onmessage = (a) => {
  const b = JSON.parse(a)
  if (0 == b.op) {
    return;
  }
  data = b
}

class WebSocket {
    gateConnect(token) {
      if (socket.readyEvent == 0) return console.error('Websocket not open. Wait...')
      socket.send(JSON.stringify({
        op: 2,
        d: {
          token: token,
          properties: {
            $browser: 'Github   '
          },
          status: "online"
        }
      }))
  }
}

module.exports.socket = WebSocket
