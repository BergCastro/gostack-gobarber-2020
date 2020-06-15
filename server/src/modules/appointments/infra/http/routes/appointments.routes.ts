import { Router } from 'express';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsController from '../controllers/AppointmentsController';
// parseISO de string para date
// router request, transfomar dados chama um arquivo e dar uma resposta
const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();

appointmentsRouter.use(ensureAuthenticated);

// appointmentsRouter.get('/', async (request, response) => {
//   const appointmentsRepository = getCustomRepository(AppointmentsRepository);
//   const appoitments = await appointmentsRepository.find();
//   return response.json(appoitments);
// });

appointmentsRouter.post('/', appointmentsController.create);

export default appointmentsRouter;
