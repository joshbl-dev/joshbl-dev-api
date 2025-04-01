import { Module } from "@nestjs/common";
import { AutomationsModule } from "./automations/automations.module";
import { AuthModule } from "./auth/auth.module";
import { HooksModule } from "./hooks/hooks.module";

@Module({
	imports: [
		AuthModule,
		AutomationsModule,
		HooksModule
	],
	exports: [
		AuthModule,
		AutomationsModule,
		HooksModule
	]
})
export class DomainModule {
}
