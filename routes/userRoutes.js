const express = require('express');
const router = express.Router();
const {setUsers, getUsers, updateUsers, deleteUsers} = require('../controllers/userControllers')

router.post('/', setUsers)
router.get('/', getUsers)
router.put('/:id', updateUsers)
router.delete('/:id', deleteUsers)

module.exports = router