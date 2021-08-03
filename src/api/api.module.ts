import { Module } from "@nestjs/common";
import { AssetsAPIModule } from "./assets/assetsAPI.module";

@Module({
	imports: [AssetsAPIModule]
})
export class ApiModule {}
