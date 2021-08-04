import { ImageCategory } from "../../../../utils/types";
import { IsEnum, IsOptional, IsPositive } from "class-validator";
import { Type } from "class-transformer";

export class ImagesQueryDTO {
	@Type(() => Number)
	@IsPositive()
	@IsOptional()
	offset?: number;
	@Type(() => Number)
	@IsPositive()
	@IsOptional()
	amount?: number;
	@IsEnum(ImageCategory)
	@IsOptional()
	category?: ImageCategory;
}
