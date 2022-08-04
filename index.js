const {app, BrowserWindow} = require("electron");
const url = require("url");

function newApp(){
    win = new BrowserWindow({width: 1000, height:650});
    win.loadURL(url.format({
        pathname:"index.html",
        slashes: true
    }));
}

app.on("ready", newApp)