import React, { Component } from 'react';

export class Details extends Component {
 
    constructor(props){
        super(props);
        this.state={ //initialization
    
          act: 0,
          index: '',
          datas: []
        }
      } 




      validation(){  


        var fname=document.getElementById("firstname").value;  
        var lname=document.getElementById("surname").value;  
        var number=document.getElementById("number").value;  
        var email=document.getElementById("email").value;  
        localStorage.setItem("fname1",fname);
        localStorage.setItem("surname1",lname);
        localStorage.setItem("number1",number);
        localStorage.setItem("email1",email);
        // var ecaptcha=document.getElementById("ecaptcha").value; 
        // var captcha= document.getElementById("demo").textContent;


        var varters = /^[A-Za-z]+$/;  

        var phoneno = /^[6-9]\d{0,10}$/;

     
        if(fname=='' || lname=='' || number=='' || email==''){  
        alert("ALL FIELDS ARE COMPULSORY"); 
        return false; 
        }  

        else if(!varters.test(fname) || !varters.test(lname) )  
            {  
             alert('Names should contain varters only');  
             return false; 
            }  
        
        else if(!varters.test(fname) || !varters.test(lname) )  
            {  
             alert('Names should contain varters only');  
             return false; 
            }  

  
        else if(!phoneno.test(number))  
            {  
            alert("Enter a number starting from 6 8 7 9");  
      
            }  

            else{
    
         alert("registeration success");
         return true;
   
            } 
         }  
    
         
  
      fSubmit = (e) =>{
        // localStorage.setItem('data','data')
        if (this.validation()){
          e.preventDefault();
          myFunction();
   
        }
        function myFunction() {
          document.getElementById("formreset").reset();
        }
    
    
        var datas = this.state.datas;
        var  firstname = this.refs.firstname.value;
        var  surname= this.refs.surname.value;
        var  email = this.refs.email.value;
        var  number= this.refs.number.value;
    
        if(this.state.act == 0){   //new
          var data = {
            firstname, surname, email, number
          }
          datas.push(data);
          
        }else{                      //update exisitng data ke liye
          var index = this.state.index;
          datas[index].firstname = firstname;
          datas[index].surname = surname;
          datas[index].email = email;
          datas[index].number = number;
        }    
    
        this.setState({
          datas: datas,
          act: 0
        });
    
         //sab refresh karne ke liye
      
      }
    
    
      fRemove = (i) => {   // har ek data ka index value, i autoincremented hai
        var datas = this.state.datas;
        datas.splice(i,1);   //ek data ko respect to i value
        this.setState({
          datas: datas
        });
    
        // this.state.datas= this.state.datas;
      
      }
    
     
      fEdit = (data,i) => {

        // var data = this.state.datas[i];
        this.refs.firstname.value = data.firstname;
        this.refs.surname.value = data.surname;
        this.refs.email.value = data.email;
        this.refs.number.value = data.number;
    
        this.setState({
          act: 1,
          index: i
        });
    
    
      }  
      
    componentDidMount(){
      if (localStorage.getItem("name1")){
        this.setState({
           datas : this.state.datas,
            firstname : this.refs.firstname.value,
            surname: this.refs.surname.value,
            email : this.refs.email.value,
            number:this.refs.number.value,
      
        })
      }
    }
      
      render() {
        var datas = this.state.datas;
        return (
          <div className="App">
            <h2> RELIANCE JIO FORM</h2>
    
            {/* form texts is he */}
            <form ref="myForm" className="myForm" id="formreset">
    
              <input type="text"  id="firstname" ref="firstname" placeholder="firstname" className="formField" />
              <input type="text" id="surname"ref="surname" placeholder="surname" className="formField" />
              <input type="email" id="email" ref="email" placeholder="email" className="formField" />
              <input type="text" maxLength="10" id="number" ref="number" placeholder="number" className="formField" />
    
              <button onClick={(e)=>this.fSubmit(e)} className="myButton">submit </button>
            </form>
            {console.log('jignesh', this.state.datas)}
            <br/>
            <table className="myTable">
           <tr>
               <th>Firstanme</th>
               <th>Surname</th>
               <th>Email</th>
               <th>Number</th>
               <th>ACTION1</th>
               <th>ACTION2</th>
               </tr>
              { datas.map((data, i) =>
           

                <tr key={i}>
                <td>{data.firstname}</td>
                  <td>{data.surname}</td>
                  <td>{data.email}</td>
                  <td>{data.number}</td>
                  <td><button onClick={()=>this.fRemove(i)} className="myListButton">remove </button></td>
                  <td><button onClick={()=>this.fEdit(data,i)} className="myListButton">edit </button></td>
                </tr>
               
       
    
              )}
                     </table>
          
          </div>
        );
      }
    
}

export default Details;
