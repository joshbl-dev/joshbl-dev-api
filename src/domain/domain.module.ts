import { Module } from "@nestjs/common";
import { AssetsModule } from "./assets/assets.module";
import { AutomationsModule } from "./automations/automations.module";
import { AuthModule } from "./auth/auth.module";

@Module({
	imports: [AssetsModule, AuthModule, AutomationsModule],
	exports: [AssetsModule, AuthModule, AutomationsModule]
})
export class DomainModule {}
