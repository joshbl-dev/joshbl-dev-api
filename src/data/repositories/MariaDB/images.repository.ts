import { Injectable } from "@nestjs/common";
import { Image } from "../../entities/Image";
import { ImageCategory } from "../../../utils/types";
import { MariaDBRepository } from "./mariaDB.repository";

@Injectable()
export class ImagesRepository extends MariaDBRepository {
	constructor() {
		super("images");
	}

	async insertImage(image: Image) {
		await this.queryBuilder.insert(image);
	}

	async getImages(category?: ImageCategory): Promise<Image[]> {
		this.queryBuilder.select();
		if (category) {
			this.queryBuilder.where("category", category);
		}
		return this.queryBuilder;
	}
}
