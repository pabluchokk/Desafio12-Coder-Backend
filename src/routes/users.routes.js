import express from 'express'
import UserController from '../config/UserController.js'

const router = express.Router();
const userController = new UserController()

router.put('/premium/:uid', userController.changeUserRole)

export default router