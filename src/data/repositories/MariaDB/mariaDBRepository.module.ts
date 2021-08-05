import { Module } from "@nestjs/common";
import { ImagesRepository } from "./images.repository";
import { MariaDB } from "./MariaDB";
import { QuotesRepository } from "./quotes.repository";

@Module({
	exports: [ImagesRepository, QuotesRepository],
	providers: [
		{ provide: MariaDB, useClass: MariaDB },
		ImagesRepository,
		QuotesRepository
	]
})
export class MariaDBRepositoryModule {}
