import { Module } from "@nestjs/common";
import { PostgresRepositoryModule } from "./Postgres/postgresRepository.module";

@Module({
	imports: [PostgresRepositoryModule],
	exports: [PostgresRepositoryModule]
})
export class RepositoryModule {}
