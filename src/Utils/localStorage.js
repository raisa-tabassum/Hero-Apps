export const loadInstallation = () => {
    const data = localStorage.getItem("installed");
    return data ? JSON.parse(data): [];
};

export const updateInstallation = (app) => {
    const installed = loadInstallation()
    
    const isDuplicate = installed.some((a)=>a.id === app.id)
    if(isDuplicate) return 
    
    const updateInstallation = [...installed, app]
    localStorage.setItem("installed",JSON.stringify(updateInstallation))
}

export const uninstall = (id) => {
    const installed = loadInstallation();

    const updateInstallation = installed.filter((a)=> a.id !== id)
    localStorage.setItem("installed",JSON.stringify(updateInstallation))
}