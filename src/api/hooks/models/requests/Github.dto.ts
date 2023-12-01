import { IsNotEmpty } from "class-validator";

export class GithubDto implements GithubPayload {
	@IsNotEmpty()
	ref: string;
}
