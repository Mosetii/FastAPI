import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req,res) => {
    res.send(users)
}

export const addUser = (req,res) => {
    const user = req.body;

    users.push({ ...user, id: uuidv4()})

    res.send('Post link reached')
}

export const getUser =  (req,res) => {
    const foundUser = users.find( user => user.id === req.params.id)

    res.send(foundUser);
}

export const deleteUser = (req,res) => {
    
    users = users.filter(user => user.id !== req.params.id);

    res.send(`User with id: ${req.params.id} deleted from the database`);
}

export const updateUser = (req,res) => {
    const user = users.find((user) => user.id === req.params.id);

    const { firstName, lastName, age } = req.body;

    if(firstName) user.firstName = firstName
    if(lastName) user.lastName = lastName
    if(age) user.age = age;

    res.send(`User with id ${req.params.id} updated`);
}