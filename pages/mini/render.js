const ipcRenderer = require("electron").ipcRenderer;
const moment = require("moment")
const path = require('path')
const fs = require('fs')
let messageList = fs.readFileSync(path.join(__dirname, "..", "..", "message.txt")).toString().split("\r\n")

new Vue({
    el: '#app',
    data: {
        time: "",
        content: "",
        menustate: false,
        state: false,
        mp3: "",
        id: "",
        timer: null
    },
    methods: {
        OpenMenu() {
            this.menustate = !this.menustate
        },
        RefreshMessage() {
            let randomIndex = Math.floor(Math.random() * messageList.length);
            this.content = messageList[randomIndex]
            this.time = moment().format("YYYY-MM-DD HH:mm:ss")
            this.state = true
            if (this.timer) { clearTimeout(this.timer) }
            this.timer = setTimeout(() => {
                this.state = false
            }, 5000)
        },
        CloseContent() {
            this.state = false
        }
    },
    mounted() {
        ipcRenderer.send("start-schedule")
        ipcRenderer.on('schedule-show', (event, param) => {
            this.content = param.content
            this.time = moment().format("YYYY-MM-DD HH:mm:ss")
            this.state = true
            if (this.timer) { clearTimeout(this.timer) }
            this.timer = setTimeout(() => {
                this.state = false
            }, 5000)
        })
    }
})