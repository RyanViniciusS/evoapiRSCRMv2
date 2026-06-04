import { PrismaRepository } from '@api/repository/repository.service';
import { WAMonitoringService } from '@api/services/monitor.service';

export class ProxyAdminService {
  constructor(
    private readonly prismaRepository: PrismaRepository,
    private readonly waMonitor: WAMonitoringService,
  ) {}

  public async setAllEnabled(enabled: boolean): Promise<{ updated: number; enabled: boolean }> {
    const result = await this.prismaRepository.proxy.updateMany({ data: { enabled } });

    for (const instanceName of Object.keys(this.waMonitor.waInstances)) {
      try {
        const proxy = (this.waMonitor.waInstances[instanceName] as any).localProxy;
        if (proxy) proxy.enabled = enabled;
      } catch {}
    }

    return { updated: result.count, enabled };
  }
}