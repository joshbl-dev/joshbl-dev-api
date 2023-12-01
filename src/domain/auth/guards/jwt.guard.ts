import { Injectable, Logger } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt") {
	private readonly logger = new Logger(JwtAuthGuard.name);

	canActivate(context) {
		const result = super.canActivate(context);
		this.logger.log(
			`${JwtAuthGuard.name} ` + (result ? "passed" : "failed")
		);
		return result;
	}
}
