import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { useSummary } from "../../hooks/useSummary";
import { currencyFormatter } from "../../utils/formatter";
import { SummaryCard, SummaryContainer } from "./styles";

export function Summary() {
	const summary = useSummary();

	return (
		<SummaryContainer>
			<SummaryCard>
				<header>
					<span>Entradas</span>
					<ArrowCircleUp size={32} color="#00b37e" />
				</header>
				<strong>{currencyFormatter(summary.income)}</strong>
			</SummaryCard>
			<SummaryCard>
				<header>
					<span>Saídas</span>
					<ArrowCircleDown size={32} color="#f75a68" />
				</header>
				<strong>{currencyFormatter(summary.outcome)}</strong>
			</SummaryCard>
			<SummaryCard variant="green">
				<header>
					<span>Total</span>
					<CurrencyDollar size={32} color="#fff" />
				</header>
				<strong>{currencyFormatter(summary.total)}</strong>
			</SummaryCard>
		</SummaryContainer>
	);
}
