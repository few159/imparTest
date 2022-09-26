import { useCard } from "../../../../../hooks/Card";
import { CardDeleteModalBody } from "./styles";

interface IDeleteCardModalProps {
    closeModal: () => void
    pokemonId: number
}
export default function CardDeleteModal({ closeModal, pokemonId }: IDeleteCardModalProps) {
    const { deleteCard } = useCard()

    async function deletePoke(pokemonId: number) {
        await deleteCard(pokemonId)
        closeModal()
    }

    return (
        <CardDeleteModalBody>
            <img src="src/assets/Icon-trash.svg" alt="Imagem de lixo" />
            <h2>Excluir</h2>
            <span>CERTEZA QUE DESEJA EXCLUIR?</span>
            <footer>
                <button onClick={() => deletePoke(pokemonId)}>Excluir</button>
                <button onClick={closeModal}>Cancelar</button>
            </footer>
        </CardDeleteModalBody>
    )
}