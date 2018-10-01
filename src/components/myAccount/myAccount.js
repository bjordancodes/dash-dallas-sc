import React, {Component} from 'react';
import {connect} from 'react-redux';
import {get_me, getMyTeam1, getMyTeam2, getMyTeam3} from '../../Dux/playerReducer';
import axios from 'axios';
import ReactTable from 'react-table';

class MyAccount extends Component {
    constructor(props){
        super(props);
        this.state={
            me: {},
            team1: {},
            team2: {},
            team3: {}
        }
    }

    componentDidMount(){
        this.props.get_me();
        this.props.getMyTeam1();
        this.props.getMyTeam2();
        this.props.getMyTeam3();
        this.stateSetter();

    }

    stateSetter(){
        this.setState({me: this.props.me,
        team1: this.props.myteam1,
        team2: this.props.team2,
        team3: this.props.team3
    })
    }

    handleSave = (info) => {
        axios.put('/api/players', {playername: info.playername, email: info.email, address: info.address, phonenumber: info.phonenumber, username: info.username, playerid: info.playerid})
        .then(response=> alert("Account Updated!"))
        .catch(err=> alert("err"));
    }

    renderEditable = (cellInfo) => {
        return(
            <div
                contentEditable
                suppressContentEditableWarning
                onBlur={e=> {
                    
                    const data = [...this.props.me];
                    data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
                    this.setState({data})
                    console.log(this.state.data);
                }
            }
            
                dangerouslySetInnerHTML={{
                    __html: this.props.me[cellInfo.index][cellInfo.column.id]
                }
            }
            />
        )
    }

    render(){
        console.log(this.props.me)
        console.log(this.props.player)
        return(
            <div><h1>My Account</h1>
            
                <ReactTable
                data= {this.props.me}
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
                        Header: "Username",
                        accessor: "username",
                        Cell: this.renderEditable
                    },
                    {
                        Header: '',
                        Cell: row => (
                            <div>
                                <button onClick={()=> this.handleSave(row.original)}>Save</button>
                            </div>)
                    }
                ]}
                
                defaultPageSize={1}
                className="-striped -highlight"/>
                </div>
        )
    }
}



const mapStateToProps = (state) =>({
    ...state.player
});

export default connect(mapStateToProps, {get_me, getMyTeam1, getMyTeam2, getMyTeam3})(MyAccount);