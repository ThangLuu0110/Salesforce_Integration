const CONSUMER_KEY: string = '3MVG9n_HvETGhr3DtNM7iMFj__r8m_ovbtYEhM4oOhdez2S2jkqmib9vznWKMErElDmZm458_AD0A5oYETlJP';
const CONSUMER_SECRET: string = '092DC9866847E2B61FF8A9719271A3E88992AB1F5A4E757CE61D43BA96665837';

export function getAuthorizationToken(){
    const bodyData = 
        'username=thang.luumanh@vti.com' + 
        '&password=Chelsea@0110' + 
        '&grant_type=password' +
        '&client_id=' + CONSUMER_KEY +
        '&client_secret=' + CONSUMER_SECRET;

    const headersData = {
        'Content-type': 'application/x-www-form-urlencoded'
    }

    const options = {
        method: 'POST',
        headers: headersData,
        body: bodyData
    };
    
    return fetch('https://vtivietnam3-dev-ed.develop.my.salesforce.com/services/oauth2/token', options)
        .then(response => response.json())
        .then(responseToken => responseToken['access_token'])
}

export function getRecords(authoToken:string){
    const queryString = 'SELECT+Id,+Name,+Player_Name__c,+Pace__c,+Shooting__c,+Date_of_Birth__c,+Passing__c,+Dribbling__c+FROM+Chelsea_Players__c';
    const headerData = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + authoToken
    }

    const options = {
        method: 'GET',
        headers: headerData,
    };

    return fetch('https://vtivietnam3-dev-ed.develop.my.salesforce.com/services/data/v60.0/query?q=' + queryString, options)
        .then(response => response.json())
}

