For resigtering 








--------------------
customer {
id,
firstName: string,
lastName: string,
cardId: number, -- Later
email: string,
password: string,
prescription: [],
orders: [#1], -- Later
}

pharmacy = {
id,
name: string,
orders: [],
}

order = {
id,
orderedBy: ,
soldBy: ,
time: ?? (dont know yet),

pickup: boolean, // true, ->
}
