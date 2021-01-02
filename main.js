const { app, BrowserWindow } = require('electron')
const { resolve } = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 800,
    minHeight: 600,
    center: true,
    autoHideMenuBar: true,
    titleBarStyle: 'hidden',
    // icon: resolve(__dirname, 'assets/icons', 'icon@32x.png)
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
