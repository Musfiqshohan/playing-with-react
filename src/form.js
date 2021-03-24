import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import styles from './mystyle.module.css'

class Myform extends React.Component{
    constructor(props) {
        super(props);
        this.state = {username:'',
                    password:'shohan',
                    age:"",
                    error_message:"",
        car:"taranga bus"};

        this.styleobj = {
            color: "red",
            backgroundColor: "blue",
            fontFamily: "Arial",
              padding: "10px",};

    }

   myChangeHandler = (event) =>{
        let name = event.target.name
       let val = event.target.value


       // alert(val)
       //  this.setState({xxxx: val})
       this.setState({[name]: val})

    }


    mySubmitHangler = (event) => {
        event.preventDefault()
       this.setState( {"error_message": <strong style={this.styleobj}> You are submitting{this.state.username} </strong>});




       if(!Number(this.state.age)){
           this.setState( {"error_message": <strong style={this.styleobj}> age must be a number </strong>});
       }



    }


    render() {
        var element="Incorrect password";

        if(this.state.password===this.state.username){
              element = <header>Your password is correct</header>
            }

        return (
            <div>
            {element}
            <form onSubmit={this.mySubmitHangler}>
                <h1>Hello</h1>
                <p>Enter your name: {this.state.username}</p>
                <input type="text" name="username" onChange={this.myChangeHandler}  ></input>
                <p>Enter your age: {this.state.age}</p>
                <input type="text" name="age" onChange={this.myChangeHandler}  ></input>



                <input type="submit"/>
                {this.state.error_message}

                <textarea value="This is a text area"/>
             </form>

                    <select value={this.state.car}>
                        <option  value="Ford">Ford</option>
                        <option  value="Volvo">Volvo</option>
                        <option  value="Fiat">Fiat</option>
                        <option  value="taranga bus">taranga bus</option>
                    </select>

                <h1 className={styles.bigblue}> Hello car!</h1>



            </div>

        );
    }
}


export default Myform;

