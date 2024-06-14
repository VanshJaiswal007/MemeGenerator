import React from "react";
import memesdata from "./memesdata";
import "./body.css"
export default function Body(){
    const [meme,setmeme] = React.useState(
        {
            toptext:"",
            bottomtext:"",
            randomImage:"http://i.imgflip.com/1bij.jpg"
        }
    )
    const [allmemeimage,setallmemeimage]=React.useState([])
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setallmemeimage(data.data.memes))
    },[])

    function handleinput(event){
         setmeme(prevmeme=>{
            return{
                ...prevmeme,
                [event.target.name]:event.target.value
            }
         })
    }

    
    function getmemeimage(){
        const random = Math.floor(Math.random() * allmemeimage.length)
        const url=allmemeimage[random].url
        setmeme(prevmeme => ({
            ...prevmeme,
            randomImage:url
        }))
    }
    return(
        <div className="body--container">
           <input type="text" className="input1" placeholder="top text" name="toptext" value={meme.toptext} onChange={handleinput}></input>
           <input type="text" className="input2" placeholder="bottom text" name="bottomtext" value={meme.bottomtext} onChange={handleinput}></input>
           <div><button className="button" onClick={getmemeimage}><h2>Get a New Meme Image 🖼</h2></button></div>
           <div className="memeimage">
            <img src={meme.randomImage} className="meme"/></div>
            <h1 className="meme-top-text">{meme.toptext}</h1>
            <h1 className="meme-bottom-text">{meme.bottomtext}</h1>
        </div>
    )
}