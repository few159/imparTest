import Weather from '../Weather/Weather'
import { HeaderElement } from './styles'

export default function Header() {
    return (
        <HeaderElement>
            <img src='/assets/logo-teste.svg' alt='Teste Impar Logomarca'/>
            <Weather />
        </HeaderElement>
    )
}