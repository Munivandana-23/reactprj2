import ReactDOM from 'react-dom/client'
let w=prompt("enter weight")
let h=prompt("enter the height")
let result=w/(h*h)
let msg
if(result<=18){
    msg="your are under weight"
}else if(result>18 && result<=25){
    msg="your are heavy weight"
}else {
    msg="your are obesity"
}
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>

    <h1 style={{color:'red', backgroundColor:'pink', border:'black', textAlign:'center'}}>{msg}</h1>
    </>
)