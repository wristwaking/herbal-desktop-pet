const { app, BrowserWindow, ipcMain } = require('electron');
const { config } = require("dotenv");
const path = require('path');
config()
const { start } = require("./send.js")

function createWindow() {
    const mainWindow = new BrowserWindow({
        height: 300,
        width: 490,
        resizable: false,
        frame: false,
        transparent: true,
        titleBarStyle: 'hidden',
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true,
            devTools: true,
            webSecurity: false
        }
    })
    mainWindow.webContents.loadFile(path.join(__dirname, 'pages', 'mini', 'mini.html'));

    mainWindow.setAlwaysOnTop({ flag: true })
    return mainWindow
}

app.disableHardwareAcceleration()

app.whenReady().then(() => {
    mainWindow = createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

ipcMain.on('close-app', (event, params) => {
    mainWindow.close()
})

ipcMain.on('start-schedule', (event, params) => {
    let result = start(event)
    if (result) { event.sender.send("index-state", { state: true }); }
})
