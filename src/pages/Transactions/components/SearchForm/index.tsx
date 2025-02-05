import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";

export function SearchForm() {
	return (
		<SearchFormContainer>
			<input type="text" placeholder="Busque por transções" />

			<button type="submit">
				<MagnifyingGlass width={20}/> Buscar
			</button>
		</SearchFormContainer>
	);
}
