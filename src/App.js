import React, { useState } from 'react';

const App = () => {
    const oneDots = ["ب", "ج", "خ", "ض", "ذ", "ز", "ظ", "غ", "ف", "ن"];
    const twoDots = ["ت", "ق"];
    const threeDots = ["پ", "ث", "چ", "ژ", "ش"];
    const midDots = ["ی"];
    const [data, setData] = useState({text: "", dots: 0});
    let dots = 0;
    const change = event =>{
        setData({text: (event.target.value)})
    }
    
    function dotCounter(text) {
        const splText = text.split("");
        for(let i = 0; i<splText.length; i++){
            console.log(splText[i])
            if(oneDots.includes(splText[i])){
                // dots =dots+1
                dots +=1
            }else if(twoDots.includes(splText[i])){
                // dots =dots+2
                dots +=2
            }else if(threeDots.includes(splText[i])){
                // dots =dots+3
                dots +=3
            }else if(midDots.includes(splText[i]) && i !== splText.length -1){
                if(splText[i+1] !== " "){
                    // dots =dots+2
                    dots +=2
                    console.log("ok")
                }
            }
        }
        return dots;
    };
    const log = ()=>{
        const counter = dotCounter(data.text);
        setData({dots: counter})
    }
    return (
        <div>
            <button onClick={log}>click</button>
            <input value={data.text} onChange={change}/>
            <div>تعداد نقاط:{data.dots}</div>
        </div>
    );
};

export default App;
