import { Module } from "@nestjs/common";
import { AutomationsAPIModule } from "./automations/automationsAPI.module";
import { HooksAPIModule } from "./hooks/hooksAPI.module";

@Module({
	imports: [AutomationsAPIModule, HooksAPIModule]
})
export class ApiModule {
}
