export const load=(key)=>{
    try{
        let data=localStorage.getItem(key)
        data=JSON.parse(data)
        return data
    }
    catch(err){
        return undefined
    }
}

let val=load("app")
console.log(val)

export const save=(key,data)=>{
    localStorage.setItem(key,JSON.stringify(data))
}