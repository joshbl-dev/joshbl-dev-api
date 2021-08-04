import { ImageCategory } from "../../../../utils/types";

export class ImageResponseDTO {
	id: string;
	category?: ImageCategory;
	url?: string;
}
