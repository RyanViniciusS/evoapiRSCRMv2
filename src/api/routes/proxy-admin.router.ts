import { RouterBroker } from '@api/abstract/abstract.router';
import { authGuard } from '@api/guards/auth.guard';
import { proxyAdminController } from '@api/server.module';
import { Router } from 'express';

import { HttpStatus } from './index.router';

export class ProxyAdminRouter extends RouterBroker {
  constructor() {
    super();
    this.router.post('/set-all', authGuard['apikey'], async (req, res) => {
      const { enabled } = req.body ?? {};
      if (typeof enabled !== 'boolean') {
        return res.status(HttpStatus.BAD_REQUEST).json({ error: '"enabled" must be a boolean' });
      }
      const response = await proxyAdminController.setAllProxies({ enabled });
      res.status(HttpStatus.OK).json(response);
    });
  }

  public readonly router: Router = Router();
}