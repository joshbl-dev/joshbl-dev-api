import { Injectable } from "@nestjs/common";
import { Postgres } from "./Postgres";
import { Knex } from "knex";
import { Image } from "../../entities/Image";
import { ImageCategory } from "../../../utils/types";
import QueryBuilder = Knex.QueryBuilder;

@Injectable()
export class ImagesRepository {
	private readonly tableName: string = "images";
	private readonly queryBuilder: QueryBuilder;

	constructor(private postgres: Postgres) {
		this.queryBuilder = postgres.knex<Image>(this.tableName);
	}

	async insertImage(image: Image) {
		await this.queryBuilder.insert(image);
	}

	async getImageBatch(
		offset: number,
		amount: number,
		category?: ImageCategory
	): Promise<Image[]> {
		this.queryBuilder.select().orderBy("id").offset(offset).limit(amount);
		if (category) {
			this.queryBuilder.where(`category = '${category}'`);
		}
		return this.queryBuilder;
	}
}
