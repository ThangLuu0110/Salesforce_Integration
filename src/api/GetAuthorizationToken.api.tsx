const CONSUMER_KEY: string = '3MVG9n_HvETGhr3DtNM7iMFj__r8m_ovbtYEhM4oOhdez2S2jkqmib9vznWKMErElDmZm458_AD0A5oYETlJP';
const CONSUMER_SECRET: string = '092DC9866847E2B61FF8A9719271A3E88992AB1F5A4E757CE61D43BA96665837';

export default function getAuthorizationToken(){
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
        .then(response => console.log(response.json()))
}
