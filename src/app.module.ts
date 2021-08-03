import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./api/app.controller";
import { AppService } from "./domain/app.service";
import { PostgresRepositoryModule } from "./data/repositories/Postgres/postgresRepository.module";
import { UtilsModule } from "./utils/utils.module";

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: `${process.env.NODE_ENV}.env`,
			isGlobal: true
		}),
		UtilsModule,
		PostgresRepositoryModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
