import { Injectable } from "@nestjs/common";
import { Postgres } from "./Postgres";
import { Knex } from "knex";
import { Image } from "../../entities/Image";
import QueryBuilder = Knex.QueryBuilder;

@Injectable()
export class ImagesRepository {
	private readonly tableName: string = "images";
	private table: QueryBuilder;

	constructor(private postgres: Postgres) {
		this.table = postgres.knex(this.tableName);
	}

	async insertImage(image: Image) {
		await this.table.insert(image);
	}
}
