import { Injectable } from "@nestjs/common";
import { MariaDBRepository } from "./mariaDB.repository";
import { ImageCategory } from "../../../utils/types";
import { Quote } from "../../entities/Quote";

@Injectable()
export class QuotesRepository extends MariaDBRepository {
	constructor() {
		super("quotes");
	}

	async getQuotes(category?: ImageCategory): Promise<Quote[]> {
		this.queryBuilder.select();
		if (category) {
			this.queryBuilder.where("category", category);
		}
		return this.queryBuilder;
	}

	async getQuote(id: string): Promise<Quote> {
		this.queryBuilder.select().where("id", id);
		const quotes: Quote[] = await this.queryBuilder;
		return quotes[0];
	}
}
