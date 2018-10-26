import React from 'react';
import Header from './Header';
import ContentList from './ContentList';
import Contest from './Contest';
import * as api from '../api';
const pushState = (obj, url) => 
  window.history.pushState(obj, '', url);

class App extends React.Component {
  static propTypes = {
    initialData: React.PropTypes.object.isRequired
  };
  state = this.props.initialData;

  componentDidMount() {

  }
  componentWillUnmount() {
    // clean timers, listeners
  }

  fetchContest = (contestId) => {
      pushState(
        { currentContestId: contestId },
        `/contest/${contestId}`
      );
      
      api.fetchContest(contestId).then(contest => {
        this.setState({
          currentContestId: contest.id,
          contest: {
            ...this.state.contests,
            [contest.id]: contest
          }
  
        });
      });    
  };
  currentContest(){
    return this.state.contests[this.state.currentContestId];
  }
  pageHeader(){
    if(this.state.currentContestId){
      return this.currentContest().contestName;
    }
      return 'Naming Contest';
  }
  currentContent(){
    if (this.state.currentContestId){
      return <Contest {...this.currentContest()} />;
    }
    return <ContentList 
            onContestClick={this.fetchContest}
            contests={this.state.contests} />; 
  }        

  render() {
    return (
      <div className="App">
        <Header message={this.pageHeader()} />
        {this.currentContent()}
       
      </div>
    );
  }
}

export default App;
