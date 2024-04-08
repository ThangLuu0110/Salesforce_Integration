import React from "react";
import DataTable from "react-data-table-component";
import {COLUMNS} from "./constants";
import PLAYER_MOCK_DATA from "../assets/mockup_data/PLAYER_MOCK_DATA.json"

export const DataTableComponent = () => {
    return (
        <div className="grid wide">
            <DataTable
                title="Player List"
                columns={COLUMNS}
                data={PLAYER_MOCK_DATA}
                responsive={true}
                highlightOnHover={true}
                pagination={true}
            />
        </div>
    )
}