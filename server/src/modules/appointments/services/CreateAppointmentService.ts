import { startOfHour } from 'date-fns';

import Appointment from '../infra/typeorm/entities/Appointment';
import AppError from '@shared/errors/AppError';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';

interface IRequest {
  provider_id: string;
  date: Date;
}
// regras de negócio
class CreateAppointmentService {
  constructor(private appointmentsRepository: IAppointmentsRepository){}

  public async execute({ provider_id, date }: IRequest): Promise<Appointment> {


    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = await this.appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentInSameDate) {
      throw new AppError('this appointment is already');
    }

    const appointment = await this.appointmentsRepository.create({
      provider_id,
      date: appointmentDate,
    });



    return appointment;
  }
}

export default CreateAppointmentService;
