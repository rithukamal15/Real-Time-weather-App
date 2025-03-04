const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("api", {
    // Future Electron API methods can be added here
});
