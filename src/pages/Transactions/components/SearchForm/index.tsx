import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { SearchFormContainer } from "./styles";

const searchFormSchema = z.object({
	query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<SearchFormInputs>({
		resolver: zodResolver(searchFormSchema),
	});

	async function handleSearchTransactions(data: SearchFormInputs) {
		await new Promise((resolve) => setTimeout(resolve, 2000));
		console.log(data);
	}

	return (
		<SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
			<input
				type="text"
				placeholder="Busque por transções"
				{...register("query")}
			/>

			<button type="submit" disabled={isSubmitting}>
				<MagnifyingGlass width={20} /> Buscar
			</button>
		</SearchFormContainer>
	);
}
