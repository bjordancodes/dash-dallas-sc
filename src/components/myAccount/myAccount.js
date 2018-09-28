import React, {Component} from 'react';
import {connect} from 'react-redux';
import {get_me} from '../../Dux/playerReducer';
import axios from 'axios';
import ReactTable from 'react-table';

class MyAccount extends Component {
    constructor(props){
        super(props);
        this.state={
            
        }
    }

    componentDidMount(){
        this.props.get_me();
    }

    handleSave = (info) => {
        axios.put('/api/players', {playername: info.playername, email: info.email, address: info.address, phonenumber: info.phonenumber, username: info.username, playerid: info.playerid})
        .then(response=> alert("Account Updated!"))
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
                        Header: "Username",
                        accessor: "username",
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



const mapStateToProps = (state) => ({
    ...state.me
});

export default connect(mapStateToProps, {get_me})(MyAccount);