import React, {Component} from "react";
import {getAuthorizationToken, getListDetailPosition, getRecords} from "../../../api/GetAuthorizationToken.api";
import {DetailPositionInformation, PlayerInformation} from "../../../common/constants";
import DataTableComponent from "../../../common/DataTable.component";
import SearchTableComponent from "../../../common/SearchTable.component";

interface SquadlistProps{
    handleActiveTab: (e: any) => void;
}

interface SquadListState{
    playerList: PlayerInformation[]
    detailPositionList: DetailPositionInformation[]
}
export default class SquadListPage extends Component<SquadlistProps>{
    state = {
        playerList: [],
        detailPositionList: [],
    } as SquadListState;

    componentDidMount(): void {
        this.props.handleActiveTab('SquadList');
        getAuthorizationToken()
        .then(authToken =>  this.handleInit(authToken))
    }

    handleInit(authToken:string){
        getRecords(authToken)
        .then(playerInfor => {
            this.setState({
                ...this.state,
                playerList: playerInfor.records,
            }, () => console.log(this.state.playerList));
        })

        getListDetailPosition(authToken)
        .then(positionInfor => {
            this.setState({
                ...this.state,
                detailPositionList: positionInfor.records,
            }, () => console.log(this.state.detailPositionList));
        })
    }

    render() {
        return (
            <div className="container grid">
                <SearchTableComponent detailPositionList={this.state.detailPositionList}/>
                <DataTableComponent dataList={this.state.playerList}/>
            </div>
        )
    }
}