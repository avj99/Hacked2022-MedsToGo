user = {

}

customer {
id,
userType: string, // customer
name: string,
cardId: string,
email: string,
password: string,
insurance: boolean,
orders: [#1, #5, #6],
}

// One users can place many orders

pharmacy = {
id,
name: string,
orders: [],
}

// A pharmacy can have many orders

order = {
id,
orderedBy: ,
soldBy: ,
time: ?? (dont know yet),
prescription: URL,
pickup: boolean, // true, ->
deliveredBy: ,
}

//

- create an account

/signup
