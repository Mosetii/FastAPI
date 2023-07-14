import express from 'express';
import { getUser,addUser,getUsers,updateUser,deleteUser } from '../controllers/users.js';

const router = express.Router()

let users = [];

router.get('/',getUsers)
// POST
router.post('/', addUser)

// get request with id
router.get('/:id',getUser)

// delete 
router.delete('/:id', deleteUser)

// patch request
router.patch('/:id', updateUser)

export default router;