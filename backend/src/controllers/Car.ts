import IService from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';
import BaseController from './BaseController';

export default class CarController extends BaseController<ICar> {
  constructor(service: IService<ICar>) {
    super(service);
  }
}
