import { Injectable } from "@nestjs/common";
import { MariaDBRepository } from "./mariaDB.repository";

@Injectable()
export class QuotesRepository extends MariaDBRepository {
	constructor() {
		super("quotes");
	}
}
