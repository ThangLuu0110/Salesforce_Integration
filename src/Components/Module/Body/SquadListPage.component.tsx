import React, {Component} from "react";
import {getAuthorizationToken, getRecords} from "../../../api/GetAuthorizationToken.api";
import {PlayerInformation} from "../../../common/constants";
import DataTableComponent from "../../../common/DataTable.component";

interface SquadlistProps{
    handleActiveTab: (e: any) => void;
}

interface SquadListState{
    playerList: PlayerInformation[]
}
export default class SquadListPage extends Component<SquadlistProps>{
    state = {
        playerList: []
    } as SquadListState;

    componentDidMount(): void {
        this.props.handleActiveTab('SquadList');
        getAuthorizationToken()
        .then(authToken =>  getRecords(authToken))
        .then(playerInfor => {
            this.setState({
                ...this.state,
                playerList: playerInfor.records,
            }, () => console.log(this.state.playerList));
        })
    }


    render() {
        return (
            <div className="container grid">
                <DataTableComponent dataList={this.state.playerList}/>
            </div>
        )
    }
}