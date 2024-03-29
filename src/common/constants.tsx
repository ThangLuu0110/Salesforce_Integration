export interface PlayerInformation {
    id: number;
    Name: string;
    Player_Name__c: string;
    Date_Of_Birth__c: string;
    Pace__c: number;
    Dribbling__c: number;
    Passing__c: number;
    Shooting: number;
    attributes: {
        type: string;
        url: string;
    }
}