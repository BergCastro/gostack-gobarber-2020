import { Router } from 'express';

import ProfileController from '../controllers/ProfileController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const profilesRouter = Router();

const profilesController = new ProfileController();

profilesRouter.use(ensureAuthenticated);

profilesRouter.get('/', profilesController.show);
profilesRouter.put('/', profilesController.update);

export default profilesRouter;
