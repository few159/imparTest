import CardCreate from "../CardActions/CardCrate/CardCreate";
import { ResultHeaderElement } from "./styles";

export default function ResultHeader() {
    return (
        <>
            <ResultHeaderElement>
                <h3>Resultado de Busca</h3>

                <button>Novo Card</button>
            </ResultHeaderElement>

            { false
                ? <CardCreate />
                : null
            }
            
        </>
    )
}