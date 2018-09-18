import React, {Component} from 'react';
import {connect} from 'react-redux';
import {get_players, get_team2, get_team3} from '../../../Dux/playerReducer';
import './managePlayers.css'
import axios from 'axios';

import ReactTable from 'react-table';
import "react-table/react-table.css";

class ManagePlayers extends Component {
    constructor(props){
        super(props);
        this.state={
            player: this.props.player,
            team2: this.props.team2,
            team3: this.props.player.team3
        }
    }

    componentDidMount(){
        this.props.get_players();
        this.props.get_team2();
        this.props.get_team3();
    }

    handleSave = (info) => {
        axios.put('/api/players', {playername: info.playername, email: info.email, address: info.address, phonenumber: info.phonenumber, playerid: info.playerid})
        .then(response=> alert("Team Updated!"))
        .catch(err=> alert("err"));
    }

    handleDelete = (info) => {
        console.log({playerid: info.playerid});
        axios.delete(`/api/players/${info.playerid}`)
        .then(response=> alert("Player Deleted!"))
        .catch(err=> alert(err));
    }

    renderEditable = (cellInfo) => {
        return(
            <div
                contentEditable
                suppressContentEditableWarning
                onBlur={e=> {
                    
                    const data = [...this.props.player];
                    data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
                    this.setState({data})
                    console.log(this.state.data);
                }
            }
            
                dangerouslySetInnerHTML={{
                    __html: this.props.player[cellInfo.index][cellInfo.column.id]
                }
            }
            />
        )
    }

    render(){
        return(
            <div><h1>Manage Players</h1>
            
                <ReactTable
                data= {this.props.player}
                columns={[
                    {
                        Header: "Name",
                        accessor: "playername",
                        Cell: this.renderEditable
                    },
                    {
                        Header: "E-mail",
                        accessor: "email",
                        Cell: this.renderEditable
                    },
                    {
                        Header: "Address",
                        accessor: "address",
                        Cell: this.renderEditable
                    },
                    {
                        Header: "Phone",
                        accessor: "phonenumber",
                        Cell: this.renderEditable
                    },
                    {
                        Header: "Team",
                        accessor: "teamname",
                        Cell: this.renderEditable
                    },
                    {
                        Header: '',
                        Cell: row => (
                            <div>
                                <button onClick={()=> this.handleSave(row.original)}>Save</button>
                                <button onClick={()=> this.handleDelete(row.original)}>Delete</button>
                            </div>)
                    }
                ]}
                
                defaultPageSize={20}
                className="-striped -highlight"/>
                </div>
        )
    }
}

const mapStateToProps = (state) => {
return {
    ...state.player}
};

export default connect(mapStateToProps, {get_players, get_team2, get_team3})(ManagePlayers);