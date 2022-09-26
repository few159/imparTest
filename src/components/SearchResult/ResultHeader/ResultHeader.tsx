import { useState } from "react";
import CardCreate from "../CardActions/CardCrate/CardCreate";
import { ResultHeaderElement } from "./styles";

export default function ResultHeader() {
    const [showNewCardModal, setShowNewCardModal] = useState(false)
    return (
        <>
            <ResultHeaderElement>
                <h3>Resultado de Busca</h3>

                <button onClick={() => setShowNewCardModal(true)}>Novo Card</button>
            </ResultHeaderElement>

            { showNewCardModal
                ? <CardCreate closeModal={() => setShowNewCardModal(false)}/>
                : null
            }
            
        </>
    )
}