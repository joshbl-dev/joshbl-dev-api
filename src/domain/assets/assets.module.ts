import { Module } from "@nestjs/common";
import { AssetsService } from "./assets.service";
import { RepositoryModule } from "../../data/repositories/repositoryModule";

@Module({
	imports: [RepositoryModule],
	exports: [AssetsService],
	providers: [AssetsService]
})
export class AssetsModule {}
