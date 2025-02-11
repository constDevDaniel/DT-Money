import { useContext } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { currencyFormatter } from "../../utils/formatter";
import { SearchForm } from "./components/SearchForm";
import {
	PriceHighlight,
	TransactionsContainer,
	TransactionsTable,
} from "./styles";

export function Transactions() {
	const { transactions } = useContext(TransactionsContext);

	return (
		<div>
			<Header />
			<Summary />
			<TransactionsContainer>
				<SearchForm />
				<TransactionsTable>
					<tbody>
						{transactions.map((transactions) => {
							return (
								<tr key={transactions.id}>
									<td width="50%">{transactions.description}</td>
									<td>
										<PriceHighlight variant={transactions.type}>
											{transactions.type === "outcome" && "- "}
											{currencyFormatter(transactions.price)}
										</PriceHighlight>
									</td>
									<td>
										{new Date(transactions.createdAt).toLocaleDateString()}
									</td>
								</tr>
							);
						})}
					</tbody>
				</TransactionsTable>
			</TransactionsContainer>
		</div>
	);
}
