const {BrowserWindow, app} = require('electron');

const createWindow = ()=>{
  const win = new BrowserWindow({
    width:1000,
    height:650
  })

  win.loadFile('index.html')
}

app.whenReady().then(()=>{
  createWindow();
});
