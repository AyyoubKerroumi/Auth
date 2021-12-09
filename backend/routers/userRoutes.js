import {Router} from "express"
import {authUser , registerUser} from '../controllers/usersController.js'
import { protect } from "../middelwares/verifyAuthToken.js";
const router = Router();

router.post('/login',authUser)
router.post('/register' , registerUser)
router.get('/',protect,(req,res) => {
    res.send("Bonjour")
})
export default router