
const Responses = require('./API_Responses')

exports.handler = async event =>{

    console.log('event',event);

    if(!event.pathParameters || !event.pathParameters){
return Responses._400({
    message:'missing the id'
})
    }

    let ID = event.pathParameters.ID;

    if(data[ID]){
        return Responses._200 (
            data[ID]
        )
    }

    return Responses._400({message :'no ID in data'})
}

const data = {
    1234: {name:'skylar', age:26,job:'journal'},
    5689: {name:'Raven', age:25,job:'SE'},
    1234: {name:'Tom', age:29,job:'Doctor'},
}