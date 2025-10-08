export const getFromLS =()=>{
  const appIdArry =  localStorage.getItem("appId")
  if(appIdArry){
    return JSON.parse(appIdArry)
  }
  return []
}

export const addToLS =(id)=>{
    const appIdArry = getFromLS()
    if(appIdArry.includes(id)) return alert("This app is Alreay Installed")
        appIdArry.push(id)
    localStorage.setItem("appId",JSON.stringify(appIdArry))
}