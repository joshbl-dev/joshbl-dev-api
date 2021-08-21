import { Module } from "@nestjs/common";
import { RepositoryModule } from "../../data/repositories/repositoryModule";
import { AuthService } from "./auth.service";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./strategies/JwtStrategy";

@Module({
	imports: [
		RepositoryModule,
		PassportModule,
		JwtModule.register({
			secret: process.env.JWT_SECRET
		})
	],
	exports: [AuthService],
	providers: [AuthService, JwtStrategy]
})
export class AuthModule {}
