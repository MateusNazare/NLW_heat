import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { GetLast3MessagesController } from "./controllers/GetLast3MessagesController";
import { ProfileUserController } from "./controllers/ProfileUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().hendle);
router.post("/messages", ensureAuthenticated, new CreateMessageController().hendle);
router.get("/messages/last3", new GetLast3MessagesController().hendle);
router.get("/profile", ensureAuthenticated, new ProfileUserController().hendle);

export { router };