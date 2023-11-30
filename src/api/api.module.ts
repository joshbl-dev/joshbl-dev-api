import { Module } from "@nestjs/common";
import { AssetsAPIModule } from "./assets/assetsAPI.module";
import { AutomationsAPIModule } from "./automations/automationsAPI.module";
import { HooksAPIModule } from "./hooks/hooksAPI.module";

@Module({
	imports: [AssetsAPIModule, AutomationsAPIModule, HooksAPIModule]
})
export class ApiModule {}
