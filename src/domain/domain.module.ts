import { Module } from "@nestjs/common";
import { AssetsModule } from "./assets/assets.module";

@Module({
	imports: [AssetsModule],
	exports: [AssetsModule]
})
export class DomainModule {}
