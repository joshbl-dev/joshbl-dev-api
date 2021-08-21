import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";
import { Config } from "../../../utils/Config";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(private config: Config) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: true,
			secretOrKey: config.jwtSecret
		});
	}

	async validate(payload: any) {
		return { username: payload.sub };
	}
}
