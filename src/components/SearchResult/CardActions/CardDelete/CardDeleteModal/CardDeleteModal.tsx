import { CardDeleteModalBody } from "./styles";

export default function CardDeleteModal(){
    return (
        <CardDeleteModalBody>
            <img src="src/assets/Icon-trash.svg" alt="Imagem de lixo" />
            <h2>Excluir</h2>
            <span>CERTEZA QUE DESEJA EXCLUIR?</span>
            <footer>
                <button>Excluir</button>
                <button>Cancelar</button>
            </footer>
        </CardDeleteModalBody>
    )
}