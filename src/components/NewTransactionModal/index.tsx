import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import {
	CloseButton,
	Content,
	Overlay,
	TransctionType,
	TransctionTypeButton,
} from "./styles";

export function NewTransactionModal() {
	return (
		<Dialog.Portal>
			<Overlay />
			<Content>
				<Dialog.Title>Nova transação</Dialog.Title>
				<CloseButton>
					<X size={24} />
				</CloseButton>

				<form>
					<input type="text" placeholder="Descrição" required />
					<input type="number" placeholder="Preço" />
					<input type="text" placeholder="Categoria" />

					<TransctionType>
						<TransctionTypeButton variant="income" value="income">
							<ArrowCircleUp size={24} />
							Entrada
						</TransctionTypeButton>

						<TransctionTypeButton variant="outcome" value="outcome">
							<ArrowCircleDown size={24} />
							Saída
						</TransctionTypeButton>
					</TransctionType>

					<button type="submit">Cadastrar</button>
				</form>
			</Content>
		</Dialog.Portal>
	);
}
