export let setToken=(token)=>{
localStorage.setItem("Token",token)
}
export let datas=()=>{
    return localStorage.getItem("Token")
}
export let logou=()=>{
    localStorage.removeItem("Token")
}