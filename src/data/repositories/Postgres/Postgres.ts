import { Injectable } from "@nestjs/common";
import { Config } from "../../../utils/Config";
import { database } from "../../../utils/constants";
import knex, { Knex } from "knex";

@Injectable()
export class Postgres {
	knex: Knex;

	constructor(private config: Config) {
		this.knex = knex({
			client: "pg",
			connection: {
				user: config.postgresUsername,
				password: config.postgresPassword,
				host: config.postgresHostname,
				database: database
			},
			pool: {
				min: 0,
				max: 2
			}
		});
	}
}
