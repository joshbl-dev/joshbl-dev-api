import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./api/app.controller";
import { AppService } from "./domain/app.service";

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: `${process.env.NODE_ENV}.env`,
			isGlobal: true
		})
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
