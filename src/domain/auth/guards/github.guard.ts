import {
	CanActivate,
	ExecutionContext,
	Injectable,
	Logger
} from "@nestjs/common";
import { createHmac, timingSafeEqual } from "crypto";
import { Config } from "../../../utils/Config";

@Injectable()
export class GithubGuard implements CanActivate {
	private readonly logger = new Logger(GithubGuard.name);

	constructor(private config: Config) {}

	canActivate(context: ExecutionContext): boolean {
		const request = context.switchToHttp().getRequest();
		const signature = request.headers["x-hub-signature-256"];

		if (!signature) {
			this.logger.error(`${GithubGuard.name} failed - no signature`);
			return false;
		}

		const payload = JSON.stringify(request.body);
		const secret = this.config.githubSecret;

		const hmac = createHmac("sha256", secret).update(payload).digest("hex");

		const expectedSignature = `sha256=${hmac}`;

		const isSignatureMatch = timingSafeEqual(
			Buffer.from(expectedSignature, "ascii"),
			Buffer.from(signature, "ascii")
		);

		this.logger.log(
			`${GithubGuard.name} ` + (isSignatureMatch ? "passed" : "failed")
		);

		return isSignatureMatch;
	}
}
