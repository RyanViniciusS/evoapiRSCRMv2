import { ProxyAdminService } from '@api/services/proxy-admin.service';

export class ProxyAdminController {
  constructor(private readonly proxyAdminService: ProxyAdminService) {}

  public async setAllProxies(data: { enabled: boolean }) {
    return this.proxyAdminService.setAllEnabled(data.enabled);
  }
}