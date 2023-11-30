import {
	CanActivate,
	ExecutionContext,
	Injectable,
	Logger
} from "@nestjs/common";
import { createHmac } from "crypto";
import { Config } from "../../../utils/Config";

@Injectable()
export class GithubGuard implements CanActivate {
	private readonly logger = new Logger(GithubGuard.name);

	constructor(private config: Config) {}

	canActivate(context: ExecutionContext): boolean {
		const request = context.switchToHttp().getRequest();
		const signature = request.headers["x-hub-signature-256"];
		const payload = JSON.stringify(request.body);
		const secret = this.config.githubSecret;

		const hmac = createHmac("sha256", secret).update(payload).digest("hex");

		const expectedSignature = `sha256=${hmac}`;

		this.logger.log(
			"Github Guard result: " + (signature === expectedSignature)
		);

		return signature === expectedSignature;
	}
}
