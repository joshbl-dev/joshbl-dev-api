import { Module } from "@nestjs/common";
import { RepositoryModule } from "../../data/repositories/repositoryModule";
import { AutomationsService } from "./automations.service";
import { AuthModule } from "../auth/auth.module";

@Module({
	imports: [RepositoryModule, AuthModule],
	exports: [AutomationsService],
	providers: [AutomationsService]
})
export class AutomationsModule {}
