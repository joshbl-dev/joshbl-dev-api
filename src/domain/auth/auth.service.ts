import {
	Inject,
	Injectable,
	Scope,
	UnauthorizedException
} from "@nestjs/common";
import { REQUEST } from "@nestjs/core";
import { Request } from "express";
import { User } from "../../data/entities/User";

@Injectable({ scope: Scope.REQUEST })
export class AuthService {
	constructor(@Inject(REQUEST) private request: Request) {}

	validateAdmin() {
		if ((<User>this.request.user).username !== "joshbl") {
			throw new UnauthorizedException("Admin credentials required!");
		}
	}
}
