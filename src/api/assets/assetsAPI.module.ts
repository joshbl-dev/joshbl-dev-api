import { Module } from "@nestjs/common";
import { AssetsController } from "./assets.controller";
import { DomainModule } from "../../domain/domain.module";

@Module({
	imports: [DomainModule],
	controllers: [AssetsController]
})
export class AssetsAPIModule {}
