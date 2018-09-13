import React, {Component} from 'react';
import {connect} from 'react-redux';
import {get_teams} from '../../../Dux/teamReducer'
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import axios from 'axios';

class ManageTeam extends Component {
    constructor(){
        super();
        this.state={
            data: {}
        }
    }

    renderEditable = (cellInfo) => {
        return(
            <div
                contentEditable
                suppressContentEditableWarning
                onBlur={e=> {
                    
                    const data = [...this.props.teams];
                    data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
                    this.setState({data})
                    console.log(this.state.data);
                }
            }
            
                dangerouslySetInnerHTML={{
                    __html: this.props.teams[cellInfo.index][cellInfo.column.id]
                }}
                onKeyDownCapture={e=> {if(e.key==="Enter"){console.log(this.props.teams[cellInfo.index][cellInfo.column.id])}}}
            />
        )
    }

    handleSave = (info) => {
        console.log([info.teamname, info.teamcaptain, info.league, info.teamid])
        axios.put('/api/teams', {teamname: info.teamname, teamcaptain: info.teamcaptain, league: info.league, teamid: info.teamid})
        .then(response=> alert("Team Updated!"))
        .catch(err=> alert("err"));
    }
    handleDelete = (info) => {
        console.log(info)
    }

    componentDidMount(){
        this.props.get_teams();
    }
    render(){
        if (this.props.teams)
        var data = this.props.teams;
        console.log(this.state.data);
        return(
            <div>
                <h1>Manage Team</h1>
                <ReactTable
                data= {data}
                columns={[
                    {
                        Header: "Team Name",
                        accessor: "teamname",
                        Cell: this.renderEditable
                    },
                    {
                        Header: "Team Captain",
                        accessor: "teamcaptain",
                        Cell: this.renderEditable
                    },
                    {
                        Header: "League",
                        accessor: "league",
                        Cell: this.renderEditable
                    },
                    {
                        Header: '',
                        Cell: row => (
                            <div>
                                <button onClick={()=> this.handleSave(row.original)}>Save</button>
                                <button onClick={()=> this.handleDelete(row.original)}>Delete</button>
                            </div>
                        )
                    }
                ]}
                defaultPageSize={20}
                className="-striped -highlight"/>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    ...state.teams
});

export default connect(mapStateToProps, {get_teams})(ManageTeam);