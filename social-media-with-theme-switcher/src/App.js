import React from 'react';
import './App.css';

import Header from './Components/Header/Header';
import Overview from './Components/Overview/Overview';
import Today from './Components/Today/Today';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      overview:[["@nathanf","1987","Followers","12 Today","Facebook"],
        ["@nathanf",
        "1044",
        "Followers",
        "99 Today",
        "Twitter"],
      
        ["@realnathanf",
        "11k",
        "Followers",
        "1099 Today",
        "Instagram"],
      
        ["Nathan F.",
        "8239",
        "Subscribers",
        "144 Today",
        "Youtube"]],
      today:[  ["Page Views",
      "87",
      "3%",
      "Facebook"],
    
      ["Likes",
      "52",
      "2%",
      "Facebook"],
    
      ["Likes",
      "5462",
      "2257%",
      "Instagram"],
    
      ["Profile Views",
      "52k",
      "1375%",
      "Instagram"],
    
      ["Retweets",
      "117",
      "303%",
      "Twitter"],
    
      ["Likes",
      "507",
      "553%",
      "Twitter"],
    
      ["Likes",
      "107",
      "19%",
       "Youtube"],
    
      ["Total Views",
      "1407",
      "12%",
       "Youtube"]]
    }
  }

  render() {

    return (
      <div className="App">
        <Header />
        <Overview data={this.state.overview} />
        <Today data={this.state.today} />
      </div>
    );
  
  }
}

export default App;
