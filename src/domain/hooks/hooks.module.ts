import { Module } from "@nestjs/common";
import { RepositoryModule } from "../../data/repositories/repositoryModule";
import { HooksService } from "./hooks.service";
import { AuthModule } from "../auth/auth.module";

@Module({
	imports: [RepositoryModule, AuthModule],
	exports: [HooksService],
	providers: [HooksService]
})
export class HooksModule {}
