import { Injectable, Logger } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt") {
	private readonly logger = new Logger(JwtAuthGuard.name);

	canActivate(context) {
		const result = super.canActivate(context);
		this.logger.log("JwtAuthGuard " + (result ? "passed" : "failed"));
		return result;
	}
}
