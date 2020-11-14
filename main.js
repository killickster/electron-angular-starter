const {app, BrowserWindow} = require('electron')
const url = require("url");
const path = require("path");
var exec = require('child_process').exec, child;

var pathToSpringBootJar = path.join(__dirname, 'jars', "hbcl-walk-api-1.0-SNAPSHOT.jar")


//initalize spring rest api jar
child = exec('java -jar ' + pathToSpringBootJar , function (error, stdout, stderr){
  console.log('stdout: ' + stdout);
  console.log('stderr: ' + stderr);
  if(error !== null){
  console.log('exec error: ' + error);
  }
});


let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/electron-angular-demo/index.html`),
      protocol: "file:",
      slashes: true
    })
  );
  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})

app.on('before-quit', function(){
  //kill spring rest api jar
  child.kill( 'SIGHUP', function(err){

     if(err){
        throw new Error(err)
     }else{
        console.log("Process has been killed successfully")
     }
  })
})
