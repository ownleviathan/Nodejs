// const square = function(x){
//     return x * x
// }

// const square = (x) =>{
//     return x * x
// }

// const square = (x) => x*x

// console.log(square(3))

const event = {
    name: 'Birthday',
    guestList:['Edwin','John','Mike'],
    printGuestList(){
        this.guestList.forEach(element => {
            console.log('Guest list for ' + element + ' ' + this.name)     
        });
       
    }
}

event.printGuestList()