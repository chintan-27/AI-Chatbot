import Chatbubble from './chatbubble'
import './App.css';
import axios from 'axios';
import { Component} from 'react';
import Loader from './loader'

class App extends Component {

  state = {
    messages : [],
    text : '',
    loading: false,
  }


  

  render() {
  let msglist = this.state.messages.map((d) => <Chatbubble from={d.from} message={d.msg} />)
  let loader = this.state.loading ? <Loader/>:null 
 
  return (
    <div className="App">
      <div className="head">
        Helper ChatBot
      </div>
      <div className="chat">
        {msglist}
        {loader}
      </div>
      
      <div className="form">
          <input type="text" placeholder="Type Your message here" className="inputfield" onChange={(e)=>{
            this.setState({...this.state,text:e.target.value,e:e})
          }}/>
          <input type="Submit" value="Submit" className="submit" onClick = { async  () => {

            this.setState({messages:[...this.state.messages,{'from':true,'msg':this.state.text}],text:'',loading:true})
            this.state.e.target.value = "";
            const y = this.state.text
            let response = () => {
              return new Promise(function(resolve, reject) {
                axios.post('http://127.0.0.1:5000/chat', {
                  'message':y,
                }).then(response => {
                  resolve(response);
                });
              });
            };
            let responseData = await response();
            this.setState({messages:[...this.state.messages,{'from':false,'msg':responseData.data.msg}],text:'',loading:false})

            }
          }/>
      </div>
    </div>
  );
  }
}

export default App;
