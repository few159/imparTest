import { DeleteOverlayElement } from "../styles";
import CardDeleteModal from "./CardDeleteModal/CardDeleteModal";

interface IDeleteCardModalProps{
    carId: number
    closeModal: () => void
}

export default function CardDelete({closeModal, carId}: IDeleteCardModalProps){
    return (
        <DeleteOverlayElement onClick={closeModal}>
            <CardDeleteModal closeModal={closeModal} carId={carId}/>
        </DeleteOverlayElement>
    )
}