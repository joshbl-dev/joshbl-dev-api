import { IsNotEmpty } from "class-validator";
import { GithubPayload } from "../../../../domain/hooks/types/GithubPayload";

export class GithubDto implements GithubPayload {
	@IsNotEmpty()
	ref: string;
}
