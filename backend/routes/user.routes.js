const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

// Define routes
router.get('/', userController.getUsers);        // GET /api/users
router.post('/', userController.addUser);        // POST /api/users
router.put('/:id', userController.updateUser);   // PUT /api/users/:id
router.delete('/:id', userController.deleteUser); // DELETE /api/users/:id

module.exports = router;
