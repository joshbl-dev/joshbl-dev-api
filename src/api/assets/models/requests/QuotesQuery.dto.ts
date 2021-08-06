import { IsEnum, IsOptional } from "class-validator";
import { ImageCategory, QuoteCategory } from "../../../../utils/types";

export class QuotesQueryDTO {
	@IsEnum(QuoteCategory)
	@IsOptional()
	category?: ImageCategory;
}
