import React, {Component} from 'react';
import '../managerPortal/managePlayers/managePlayers.css'
import axios from 'axios';
import ReactTable from 'react-table';


export default class TeamInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            teaminfo:[]
        }
    }
    
    componentWillMount(){
        axios.post('/api/get_players_for_teams', {teamid: this.props.props.match.params.id})
        .then(res=> this.setState({teaminfo: res.data}))
        .catch(err=> console.log(err));
    }

    componentWillUpdate(){
        console.log('Updated?')
    }
    render(){
        console.log(this.props)
        return(
            <div>
            <h1> My Teams </h1>
            My name: <h1></h1>
                <ReactTable
                data= {this.state.teaminfo}
                columns={[
                    {
                        Header: 'Teammates',
                        id: 1,
                        accessor: 'playername'
                    },
                
                ]}/>
            </div>
        )
    }
}