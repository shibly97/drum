import React from 'react';
import uifx from './uifx';
import beepMp3 from './my-sounds/beep.mp3' 

const beep = new uifx(beepMp3)

class buttons extends React.Component{
    render(){
    return(
    <button onclick={beep.play}> beep </button>)

    }
}

export default buttons;
