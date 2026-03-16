import { Request, Response } from 'express';
import IService from '../interfaces/IService';

export default abstract class BaseController<T> {
  constructor(protected _service: IService<T>) { }

  public async create(
    req: Request & { body: T },
    res: Response<T>,
  ) {
    const results = await this._service.create(req.body);
    return res.status(201).json(results);
  }

  public async read(
    _req: Request,
    res: Response<T[]>,
  ) {
    const result = await this._service.read();
    return res.status(200).json(result);
  }

  public async readOne(
    req: Request,
    res: Response<T>,
  ) {
    const result = await this._service.readOne(req.params.id);
    return res.status(200).json(result);
  }

  public async update(
    req: Request & { body: T },
    res: Response<T>,
  ) {
    const result = await this._service.update(req.params.id, req.body);
    return res.status(200).json(result);
  }

  public async delete(
    req: Request,
    res: Response<T>,
  ) {
    await this._service.delete(req.params.id);
    return res.status(204).end();
  }
}
