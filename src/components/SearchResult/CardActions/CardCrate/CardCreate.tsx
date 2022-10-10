import { ICar } from "../../../../interfaces/cars";
import { CreateFormPosition, OverlayElement } from "../styles";
import CardCreateForm from "./CardCreateForm/CardCreateForm";

interface ICreateCardProps {
    closeModal: () => void
    updateCar?: ICar
}
export default function CardCreate({ closeModal, updateCar }: ICreateCardProps) {
    return (
        <>
            <OverlayElement onClick={closeModal} />

            <CreateFormPosition>
                <CardCreateForm closeModal={closeModal} updateCar={updateCar}/>
            </CreateFormPosition>
        </>
    )
}