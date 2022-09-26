import { DeleteOverlayElement } from "../styles";
import CardDeleteModal from "./CardDeleteModal/CardDeleteModal";

interface IDeleteCardModalProps{
    pokemonId: number
    closeModal: () => void
}

export default function CardDelete({closeModal, pokemonId}: IDeleteCardModalProps){
    return (
        <DeleteOverlayElement onClick={closeModal}>
            <CardDeleteModal closeModal={closeModal} pokemonId={pokemonId}/>
        </DeleteOverlayElement>
    )
}