export interface PlayerInformationDetail {
    id: number;
    name: string;
    player_name__c: string;
    player_age__c: string;
    nationality__c: string;
    player_position__c: string;
    player_position__detail__c: string;
    card_types__c: string;
    date_of_birth__c: string;
    overall__c: number;
    pace__c: number;
    dribbling__c: number;
    passing__c: number;
    shooting: number;
    attributes: {
        type: string;
        url: string;
    }
}

export interface PlayerInformation {
    id: number;
    name: string;
    player_name__c: string;
    player_age__c: string;
    nationality__c: string;
    player_position__detail__c: string;
    date_of_birth__c: string;
}

export const COLUMNS = [
    {
        name: 'Player Name',
        selector: (row: {player_name__c: string;}) => row.player_name__c,
        sortable: true
    },
    {
        name: 'Age',
        selector: (row: {player_age__c: number;}) => row.player_age__c,
        
    },
    {
        name: 'Nationality',
        selector: (row: {nationality__c: string;}) => row.nationality__c,
    
    },
    {
        name: 'Date Of Birth',
        selector: (row: {date_of_birth__c: string;}) => row.date_of_birth__c,
    },
    {
        name: 'Position',
        selector: (row: {player_position_detail__c: string;}) => row.player_position_detail__c,
    }
];