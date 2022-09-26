import { CreateFormPosition, OverlayElement } from "../styles";
import CardCreateForm from "./CardCreateForm/CardCreateForm";

interface ICreateCardProps {
    closeModal: () => void
}
export default function CardCreate({ closeModal }: ICreateCardProps) {
    return (
        <>
            <OverlayElement onClick={closeModal} />

            <CreateFormPosition>
                <CardCreateForm closeModal={closeModal} />
            </CreateFormPosition>
        </>
    )
}