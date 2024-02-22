import { Injectable } from '@nestjs/common';
import { Doctors,Doctor } from '../types/doctor';

@Injectable()
export class DoctorsService {

  constructor(private options: Doctors) {
  }

  getDoctors(): Doctors {
    return this.options;
  }

  getDoctor(id: number): Object {
    const doctor = this.options.doctors.find(doctor => doctor.doctorNumber == id);
    if (!doctor) {
      return { error: 'Doctor not found' };
    }
    return doctor;
  }

}