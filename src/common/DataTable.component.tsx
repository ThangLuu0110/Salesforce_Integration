import React, {Component} from "react";
import DataTable from "react-data-table-component";
import {COLUMNS, PlayerInformation} from "./constants";

interface DataTableComponentProps{
    dataList: PlayerInformation[]
}

const customStyles = {
    headCells: {
		style: {
			fontWeight: "bold",
            fontSize: "1rem"
		},
	},
}
export default class DataTableComponent extends Component<DataTableComponentProps>{
    render(){
        return (
            <div className="grid wide">
                <DataTable
                    title="Player List"
                    columns={COLUMNS}
                    data={this.props.dataList}
                    customStyles={customStyles}
                    responsive={true}
                    highlightOnHover={true}
                    pagination={true}
                    onRowClicked={() => console.log('Row clicked')}
                />
            </div>
        )
    }
}