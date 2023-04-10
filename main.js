//Mixed messages
//Every time a user runs a program,
//they should get a new, randomized output.

class MixedMessages {
    constructor (){
        this._eatingAtHomeOrEatingOut = ['Eating out', 'Eating at home'];
        this._eatingOutOptions = [];
        this._eatingAtHomeOptions = [];
        this._subject = '';
    }

    eatingOut(){
        const restaurants = new Map();

        restaurants.set('panda express', 'Orange chicken, black pepper chicken, or bejing beef');
        restaurants.set('mexican', 'burritos, tacos, or carne asada fries');
        restaurants.set('chic-fil-a', 'spicy chicken sandwich');
    }

    eatingAtHome(){
        const homeFood = new Map();
        homeFood.set('')        
    }

    whatsForDinner(){

        this._subject = this._subjectArr[Math.floor(Math.random() * this._subjectArr.length)];
        this._constructedMessage.push(this._structureArr[Math.floor(Math.random() * this._structureArr.length)]);
        console.log(this._subject);
        console.log(this._constructedMessage.join(''));
    }



}

const NewMessage  = new MixedMessages;
NewMessage.whatsForDinner(); 

