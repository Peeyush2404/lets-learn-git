import React, { Component } from 'react'
import axios from 'axios';
// import Table  from 'react-bootstrap'
// import Image  from 'react-bootstrap'

class Leaderboard extends Component {
    state ={
        top100Days: [],
        top100AllTime: []
    }
    getFCCData(url, stateName){
        console.log(1);
        axios.get(url)
        .then(({data})=>{
            this.setState({ [stateName]: data});
            console.log(this.state.top100Days);
            console.log(1);
        })
    }

    componentDidMount(){
        this.getFCCData('https://fcctop100.herokuapp.com/api/focusers/top/recent',"top100Days");
        this.getFCCData('https://fcctop100.herokuapp.com/api/focusers/top/recent',"top100AllTime");


    }
  render(){
      const {top100Days, top100AllTime  } = this.state;
      return(
          <>
              <table>
                  <thead>
                      <tr>

                          <th>#</th>
                          <th>Camper Name</th>
                          <th>Points in 30 Days</th>
                          <th>All Time Points</th>
                          

                      </tr>
                  </thead>
                  <tbody>
                      {top100Days.map((row,index)=>(

                      <tr key={row.username}>
                          <td>a href={`https://www.freecodecamp.org/${row.username}`}
                          <img src={row.img} className="border border-2" style={{float:"left",height:"50px"}} circle></img></td>
                          <td>{row.recent}</td>
                          <td>{row.alltime}</td>
                          

                      </tr>
                      )
                      )}
                  </tbody>
              </table>
          </>
      )
  }
}

export default Leaderboard