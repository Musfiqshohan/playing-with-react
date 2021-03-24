import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Myform from './form.js';

let secondelement = ( <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>);


const myfirstelement = <h3>Hello React! 5 + 5 = {5+5}</h3>;




class Car extends React.Component{

    constructor() {
        super();
        this.state={color: 'green'};
    }

    componentWillUnmount() {
        alert('car is going to be invisible on button click ');
    }


    render() {
        return  <div>  <h3>this is a car and has {this.props.wheel.front} wheels</h3> </div>;
    }
}


class Cycle extends Car{
    constructor(props) {
        super(props);
        this.state= {color:'red',
        size: "Bigx",
        wheels: 2,
        seat_color: props.color};
        // this.size = {size: "Bigx"}
        // this.wheel = 2;
        // this.seat_color= props.color
    }

    changeColor = () =>{
        this.setState({color: 'green'});
    }


    render(){

        let wheels = {'front':1, 'back':2}
        return <div> <h2>I am a {this.state.color} {this.state.size} cycle with seat color {this.state.seat_color} and not a <Car wheel={wheels}/>
        </h2>
         <button
          type="button"
          onClick={this.changeColor}
        >Change color</button>
            </div>

    }


    send_date(){
        return <h2><Car wheel={4}/></h2>;
    }
}


class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state= {favcolor: "red"}
        this.state = {show: true}
    }

    // static getDerivedStateFromProps(props, state){
    //     return {favcolor: props.favcolor}
    // }

    componentDidMount() {
        setTimeout(
            ()=>{
                this.setState({favcolor: 'white'})
            }
            , 1000)
    }





    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("beforeupdate").innerHTML=
             "Before the update, the favorite was "+prevState.favcolor;
    }

    componentDidUpdate() {
        document.getElementById("afterupdate").innerHTML=
            "The updated favorite is "+this.state.favcolor;
    }

    shouldComponentUpdate() {
    return true;
  }

    changefavColor= ()=>{
        this.setState({favcolor: 'Brown'});
        this.setState({show:false})
    }


    shoot=  (val, ev) =>{
        alert('great shot'+val+"from"+ev.type)
    }

    render() {

        if(this.state.show===true){
            var new_obj =  <Car wheel={4}/>
        }

        return (<div>
        <h1>My updated Favorite Color is {this.state.favcolor}</h1>
            <button type="button" onClick={this.changefavColor}>Change header color</button>
              <div id="beforeupdate"></div>
              <div id="afterupdate"></div>
            {new_obj}

            <button type="button" onClick={(ev) => this.shoot('Goal?', ev)}>Shoot</button>


        </div>);
    }
}






ReactDOM.render(<Myform/>, document.getElementById('root'));
// ReactDOM.render(<App/>, document.getElementById('root'));
// ReactDOM.render(<Car/>, document.getElementById("header"));
ReactDOM.render(<Cycle color="Yellow"/>, document.getElementById("header"));
ReactDOM.render(<Header favcolor='Black' />, document.getElementById("constructor"));
// ReactDOM.render(<Header favcolor='Pink' />, document.getElementById("update"));








// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
//
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
