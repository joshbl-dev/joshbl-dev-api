import { Module } from "@nestjs/common";
import { AssetsModule } from "./assets/assets.module";
import { AutomationsModule } from "./automations/automations.module";
import { AuthModule } from "./auth/auth.module";
import { DnsModule } from "./dns/dns.module";

@Module({
	imports: [AssetsModule, AuthModule, AutomationsModule, DnsModule],
	exports: [AssetsModule, AuthModule, AutomationsModule, DnsModule]
})
export class DomainModule {}
