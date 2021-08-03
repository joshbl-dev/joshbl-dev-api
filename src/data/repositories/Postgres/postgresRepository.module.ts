import { Module } from "@nestjs/common";
import { ImagesRepository } from "./images.repository";
import { Postgres } from "./Postgres";

@Module({
	exports: [ImagesRepository],
	providers: [ImagesRepository, Postgres]
})
export class PostgresRepositoryModule {}
