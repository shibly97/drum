import React from 'react';
import './App.css';
import UIfx from 'uifx';
import s1 from './sounds/sound1.mp3';
import s2 from './sounds/sound2.wav';
import s3 from './sounds/sound3.mp3';
import s4 from './sounds/sound4.wav';
import s5 from './sounds/sound5.wav';
import s6 from './sounds/sound6.mp3';

const data = [{"id" : 'aa', "name" : "Q", 'keycode': "Q" , src : s1},
              {"id" : 'bb', "name" : "W", 'keycode': "W" , src : s2},
              {"id" : 'cc', "name" : "E", 'keycode': "E" , src : s3},
              {"id" : 'dd', "name" : "A", 'keycode': "A" , src : s4},
              {"id" : 'ee', "name" : "S", 'keycode': "S" , src : s5},
              {"id" : 'ff', "name" : "D", 'keycode': "D" , src : s6},
              {"id" : 'gg', "name" : "Z", 'keycode': "Z" , src : s6},
              {"id" : 'hh', "name" : "X", 'keycode': "X" , src : s6},
              {"id" : 'ii', "name" : "C", 'keycode': "C" , src : s6}]

class DrumPad extends React.Component{

  componentDidMount(){
    document.addEventListener('keydown',this.handlekeydown)
  }

  handlekeydown = (e) =>{
    // var aa= "abcs"
    if(e.keyCode === this.props.babe.charCodeAt(0)){
      if(this.props.status === true){
        (this.props.sound.play(this.props.volume))}
      this.props.click(this.props.name)
    }
  }
  render(){
    return(

      <div id={this.props.name} className = "drum-pad " onClick = {() => {
        if(this.props.status === true){
        (this.props.sound.play(this.props.volume))
        this.audio.play()
        this.audio.currentTime = 0
        }

        (this.props.click(this.props.name))
        }}>

        <audio 
        src= "{this.props.src}" 
        className="clip" 
        id= {this.props.name} 
        ref={ref=> this.audio = ref} >

        </audio>
    
      <p id="name" >{this.props.name}</p>
      
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      status : true,
      volume : 1,
      head : "Press a button"
    } 
  }

  setStatus =(event) => {
    this.setState({status : !this.state.status})
    console.log(this.state.status)
  }

  setVolume = (event) =>{
    this.setState({volume : parseFloat(event.target.value)})
  }

  setHead = (event) =>{
    this.setState({head : event})
  }

  render(){
    return(
      <div id="drum-machine " className= "container-fluid text-center">

        <h1 id="display " className="alert alert-success">{this.state.head}</h1>

        <div className="pad">

        {data.map(el =>{
          const dell = new UIfx(el.src)
          return (<DrumPad id={el.id}
                    name={el.name} sound={dell} status={this.state.status}
                    volume = {this.state.volume} click={this.setHead} value={el.name} babe={el.keycode}
                    scr= {el.src}
                    />)
        })}
        </div>

       

        <input  type="checkbox" onClick={this.setStatus} ></input>
        <label>Sound off</label><br/>
        <input  type="range" min = '0.0' max='1.0' step='0.1' onChange={this.setVolume}></input>
        <label>Volume</label>

      </div>
    )
  }
}

export default App;
