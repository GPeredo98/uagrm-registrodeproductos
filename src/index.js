const path = require('path');
const { app, BrowserWindow } = require('electron');

require('electron-reload')(__dirname, {
	electron: path.join(__dirname, '../node_modules', '.bin', 'electron')
})
require('./database')

app.allowRendererProcessReuse = true;
app.whenReady().then(createWindow);

function createWindow() {
	window = new BrowserWindow({
		width: 800,
		height: 800,
		webPreferences: {
			contextIsolation: false,
			nodeIntegration: true,
			nodeIntegrationInWorker: true,
			enableRemoteModule: true
		}
	});
	window.loadFile('src/views/index.html');
}