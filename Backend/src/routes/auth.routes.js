const {Router} = require("express")
const authController = require("../controllers/auth.controller")
const authMiddleware = require("../middleware/auth.middleware")

const authRouter = Router()

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 */

authRouter.post("/register", authController.registerUserController)


/** * @route POST /api/auth/login
 * @desc Login a user
 * @access Public
 */

authRouter.post("/login", authController.loginUserController)

/**
 * @route GET /api/auth/logout
 * @description clear token user cookie and add the token in blacklist
 * @access Public
 */

authRouter.get("/logout", authController.logoutUserController)

/**
 * @route GET /api/auth/getUser
 * @description Get the current logged-in user details
 * @access Private
 */

authRouter.get("/getUser", authMiddleware.Usermodel,authController.getUserController)


module.exports = authRouter
