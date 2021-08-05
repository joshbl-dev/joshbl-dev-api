import { Module } from "@nestjs/common";
import { ImagesRepository } from "./images.repository";
import { MariaDB } from "./MariaDB";

@Module({
	exports: [ImagesRepository],
	providers: [ImagesRepository, MariaDB]
})
export class MariaDBRepositoryModule {}
