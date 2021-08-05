import { MariaDB } from "./MariaDB";
import { Image } from "../../entities/Image";
import { Knex } from "knex";
import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import QueryBuilder = Knex.QueryBuilder;

@Injectable()
export abstract class MariaDBRepository implements OnModuleInit {
	protected readonly tableName: string;
	protected queryBuilder: QueryBuilder;
	@Inject(MariaDB)
	private readonly mariaDB: MariaDB;

	protected constructor(tableName: string) {
		this.tableName = tableName;
	}

	onModuleInit(): any {
		this.queryBuilder = this.mariaDB.knex<Image>(this.tableName);
	}
}
