import { DeleteOverlayElement } from "../styles";
import CardDeleteModal from "./CardDeleteModal/CardDeleteModal";

export default function CardDelete(){
    return (
        <DeleteOverlayElement>
            <CardDeleteModal />
        </DeleteOverlayElement>
    )
}