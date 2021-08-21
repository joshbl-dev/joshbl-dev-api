import { Module } from "@nestjs/common";
import { AssetsAPIModule } from "./assets/assetsAPI.module";
import { AutomationsAPIModule } from "./automations/automationsAPI.module";

@Module({
	imports: [AssetsAPIModule, AutomationsAPIModule]
})
export class ApiModule {}
