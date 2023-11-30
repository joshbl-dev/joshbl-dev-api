import { Module } from "@nestjs/common";
import { DomainModule } from "../../domain/domain.module";
import { HooksController } from "./hooks.controller";

@Module({
	imports: [DomainModule],
	controllers: [HooksController]
})
export class HooksAPIModule {}
