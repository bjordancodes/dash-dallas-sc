import React, {Component} from 'react';
import {connect} from 'react-redux';
import {get_schedule} from '../../../Dux/scheduleReducer';
import ReactTable from 'react-table';
import {Link} from 'react-router-dom';
import axios from 'axios';

class MySchedule extends Component {

    componentDidMount(){
        this.props.get_schedule();
    }

    handleSave = (info) => {
        axios.put('/api/schedule', {leaguename: info.leaguename, team1: info.team1, wdl1: info.wdl1, team2: info.team2, wdl2: info.wdl2, matchdate: info.matchdate, matchtime: info.matchtime, scheduleid: info.scheduleid})
        .then(response=> alert("Schedule Updated!"))
        .catch(err=> alert(err));
    }

    handleDelete = (info) => {
        console.log({scheduleid: info.scheduleid});
        axios.delete(`/api/schedule/${info.scheduleid}`)
        .then(response=> alert("Game updated!"))
        .catch(err=> alert(err));
    }

    renderEditable = (cellInfo) => {
        return(
            <div
                contentEditable
                suppressContentEditableWarning
                onBlur={e=> {
                    
                    const data = [...this.props.schedule];
                    data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
                }
            }
            
                dangerouslySetInnerHTML={{
                    __html: this.props.schedule[cellInfo.index][cellInfo.column.id]
                }
            }
            />
        )
    }

    render(){
        if (this.props.schedule)
        console.log(this.props.schedule)
        
        return(
            <div>
            <h1>Master Schedule</h1>
            <Link to="/addNewSchedule"><button>Add New Game</button></Link><p/>
            <ReactTable
            data={this.props.schedule}
            columns={[
                {
                    Header: "League Name",
                    accessor: "leaguename",
                    Cell: this.renderEditable
                },
                {
                    Header: "Home Team",
                    accessor: "team1",
                    Cell: this.renderEditable
                },
                {
                    Header: "Win/Loss/Draw",
                    accessor: "wdl1",
                    Cell: this.renderEditable
                },
                {
                    Header: "Visiting Team",
                    accessor: "team2",
                    Cell: this.renderEditable
                },
                {
                    Header: "Win/Loss/Draw",
                    accessor: "wdl2",
                    Cell: this.renderEditable
                },
                {
                    Header: "Date",
                    accessor: "matchdate",
                    Cell: this.renderEditable
                },
                {
                    Header: "Time",
                    accessor: "matchtime",
                    Cell: this.renderEditable
                },
                {
                    Header: '',
                    Cell: row => (
                        <div>
                            <button onClick={()=> this.handleSave(row.original)}>
                            Save</button>
                            <button onClick={()=> this.handleDelete(row.original)}>
                            Delete</button>
                        </div>)

                }


            ]}
            defaultPageSize={10}
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

export default connect(mapStateToProps, {get_schedule})(MySchedule);