import { ImageCategory } from "../../../../utils/types";
import { IsEnum, IsOptional } from "class-validator";

export class ImagesQueryDTO {
	@IsEnum(ImageCategory)
	@IsOptional()
	category?: ImageCategory;
}
