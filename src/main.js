const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
    // start the browserWindow with a hidden state
    const mainWindow = new BrowserWindow({ show: false })

    // it loads the file THEN it emits ready-to-show event that's why it never triggers if i don't load anything
    mainWindow.loadFile(path.join(__dirname, 'index.html'))
    // if i dont load a file or load anything for that matter this event never triggers
    // i used once here becuase it's the main window basically
    mainWindow.once('ready-to-show', () => {
        console.log('READY TO SHOW')
        mainWindow.show()
    })
}

const appManager = ({ mainWindowStarter }) => {
    // start the window
    mainWindowStarter()

    // lifeCycles
}

app.whenReady().then(() => appManager({ mainWindowStarter: createWindow }))
