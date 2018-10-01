import React, {Component} from 'react';
import {connect} from 'react-redux';
import {get_teams} from '../../../Dux/teamReducer';
import {get_leagues, get_league_teams} from '../../../Dux/scheduleReducer';
import axios from 'axios';
import ReactTable from 'react-table';

class Scheduler extends Component {
    constructor(){
        super();
        this.state = {
            league: '',
            teams: [],
            time: ['18:00', '19:00', '20:00', '21:00'],
            month: 10,
            day: 10,
            leaguename: '',
            team1: '',
            wdl1: '',
            team2: '',
            wdl2: '',
            matchdate: '',
            matchtime: '',
            schedule: []
        }
    }

componentDidMount(){
        // this.props.get_teams();
        this.props.get_leagues();
        this.stateSetter();
        this.leagueOptions();
console.log(this.props.leagues.map((e, i)=> {return <option value={e[i].league}>{e[i].league}</option>}))
    }

component(){
    this.props.get_league_teams({leaguename: this.state.leaguename})
}


// myArr = ['team1', 'team2', 'team3', 'team4', 'team5']
// rand = myArr[Math.floor(Math.random() * myArr.length)];
// time = ['18:00', '19:00', '20:00', '21:00']

scheduleFunction = (team1, league, dateMonth, dateDay) => {
  let newArr = [];
//   var rand = time[Math.floor(Math.random() * myArr.length)];
  

  for (let i = 0; i < league.length; i++){
    console.log("this is the state" + this.state.time)

var startDate = dateDay += 7;
var time = ['18:00', '19:00', '20:00', '21:00'];
var gameTime = () => {
    if((i+1)%4===0){
        return '18:00'
    }
    if((i+1)%3===0){
        return '19:00'
    }
    if((i+1)%2===0){
        return '20:00'
    }
    if((i+1)%1===0){
        return '21:00'
    }
}
// var gameTime = (time) =>{

//     console.log(time)
// if( time >= 22){
//     var newTime = time - 5
//     this.setState({time: 17})
//     return newTime + ':00';}
// else {
//     return time + ':00';
// }
// }

let dateHere = (day) => {
  let monthUpdate = dateMonth+1
  if(day >= 30){
    day -= 30; 
  return monthUpdate + '/' + (day) + '/' + 2018
  }
  else {return dateMonth + '/' + (day) + '/' + 2018}}

    newArr.push({team1: team1,
      team2: league[i].teamname,
      date: dateHere(startDate),
      time: gameTime()}
    )}
  for (let i = 0; i < league.length; i++)
  if (team1 === newArr[i].team2){
    newArr[i].team2 = "bye week"
  }
  else { return newArr }
  return newArr;
}

stateSetter = () => {
    this.setState({league: this.props.leagues})
}

update_cell = (column, e) => {
    return this.setState({[column]: e});
}

submitForm = (e) => {
    var {team1, team2, date, time} = e;
    var {leaguename} = this.state
    console.log(e)
    console.log(team1, team2, date, time, leaguename)
    axios
    .post(`/api/schedule`, {leaguename: leaguename, team1: team1, team2: team2, matchdate: date, matchtime: time})
    .then(response=> alert('Game Added!'))
    .catch(err=> alert('Error'))
}

handleSave = (info) => {
    var {leaguename, team1, team2, matchdate, matchtime} = info;
        console.log(info)
        axios
        .post(`/api/schedule`, {leaguename, team1, team2, matchdate, matchtime})
        .then(response=> alert('Game Added!'))
        .catch(err=> alert('Error'))
}

handleDelete = (info) => {
    console.log({scheduleid: info.scheduleid});
    axios.delete(`/api/schedule/${info.scheduleid}`)
    .then(response=> alert("Game updated!"))
    .catch(err=> alert(err));
}

schedule = () => {
let myTeams = this.state.teams
let myArr = this.scheduleFunction(myTeams[0].teamname, myTeams, this.state.month, this.state.day-7)
console.log(myArr)
myTeams.splice(0, 1)[0]
let myArr2 = this.scheduleFunction(myTeams[0].teamname, myTeams, this.state.month, this.state.day)
myArr.splice(myArr.length+1, 0, myArr2)
console.log(myArr.flat())
myTeams.splice(0, 1)[0]
let myArr3 = this.scheduleFunction(myTeams[0].teamname, myTeams, this.state.month, this.state.day+7)
myArr.splice(myArr.length+1, 0, myArr3)
myTeams.splice(0, 1)[0]
let myArr4 = this.scheduleFunction(myTeams[0].teamname, myTeams, this.state.month, this.state.day+14)
myArr.splice(myArr.length+1, 0, myArr4)
myTeams.splice(0, 1)[0]
let myArr5 = this.scheduleFunction(myTeams[0].teamname, myTeams, this.state.month, this.state.day+21)
myArr.splice(myArr.length+1, 0, myArr5)
this.setState({schedule: myArr.flat()})
console.log(this.state.schedule);
}

getTeams = (e) =>{
    this.props.get_league_teams({leaguename: e})
    this.setState({teams: this.props.leagueteams})
    console.log(this.props.leagueteams)
}

leagueOptions = () => {
    const leagueNames = this.props.leagues
    console.log(leagueNames)
    const listItems = leagueNames.map((e, i)=> <option value={e.league}>{e.league}</option>)
return (
    <select onChange={(e)=> {
    this.setState({leaguename: e.target.value})
    this.getTeams(e.target.value)}}>
        <option value="Select">Select a League</option>
        {listItems}
    </select>
)}

    render(){
        // console.log(this.state)
        // console.log(this.props)
        // leagueOptions = this.props.leagues.map((e)=> <option value={e} OnChange={(e)=> {this.setState({league: e.target.value})}}>{e}</option>)
        return(
            <div>
            <h1>Scheduler</h1>
            <this.leagueOptions/>
            <br/>
        <input type="text" onChange={(e)=>this.update_cell("month", parseInt(e.target.value))} placeholder="Season Start Month"/><br/>
        <input type="text" onChange={(e)=>this.update_cell("day", parseInt(e.target.value))} placeholder="Season Start Day"/><br/>

            <button onClick={this.schedule}>Create Randomized Schedule</button>
            
            <ReactTable
            data={this.state.schedule}
            columns={[
                {
                    Header: "Home Team",
                    accessor: "team1",
                    Cell: this.renderEditable
                },
                {
                    Header: "Visiting Team",
                    accessor: "team2",
                    Cell: this.renderEditable
                },
                {
                    Header: "Date",
                    accessor: "date",
                    Cell: this.renderEditable
                },
                {
                    Header: "Time",
                    accessor: "time",
                    Cell: this.renderEditable
                },
                {
                    Header: '',
                    Cell: row => (
                        <div>
                            <button onClick={()=> this.submitForm(row.original)}>
                            Save</button>
                        </div>)

                }
            ]}
            defaultPageSize={20}
            className="-striped -highlight"
                    />
            />
            </div>
        )
    }
}



const mapStateToProps = (state) => ({
    ...state.schedule
});

export default connect(mapStateToProps, {get_teams, get_leagues, get_league_teams})(Scheduler);