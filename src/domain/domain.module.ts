import { Module } from "@nestjs/common";
import { AssetsModule } from "./assets/assets.module";
import { AuthModule } from "./auth/auth.module";

@Module({
	imports: [AssetsModule, AuthModule],
	exports: [AssetsModule, AuthModule]
})
export class DomainModule {}
