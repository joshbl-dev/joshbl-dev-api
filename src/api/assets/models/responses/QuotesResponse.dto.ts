import { QuoteCategory } from "../../../../utils/types";

export class QuotesResponseDTO {
	id: string;
	category?: QuoteCategory;
	text?: string;
}
