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
    Id: number;
    Name: string;
    Player_Name__c: string;
    Player_Age__c: number;
    Nationality__c: string;
    Player_Position_Detail__c: string;
    Date_Of_Birth__c: string;
}

export const COLUMNS = [
    {
        name: 'Player Name',
        selector: (row: {Player_Name__c: string;}) => row.Player_Name__c,
        sortable: true,
        left: true,

    },
    {
        name: 'Age',
        selector: (row: {Player_Age__c: number;}) => row.Player_Age__c,
        
    },
    {
        name: 'Nationality',
        selector: (row: {Nationality__c: string;}) => row.Nationality__c,
    
    },
    {
        name: 'Date Of Birth',
        selector: (row: {Date_Of_Birth__c: string;}) => row.Date_Of_Birth__c,
    },
    {
        name: 'Position',
        selector: (row: {Player_Position_Detail__c: string;}) => row.Player_Position_Detail__c,
    }
];