import { AxiosResponse } from 'axios';
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { ICar, ICreateCar, IFullCar } from '../interfaces/cars';
import { httpRequest } from '../providers/customAxios';
import { usePagination } from './Pagination';

interface CardProps {
    children: ReactNode;
}

interface CardContextData {
    cars: Array<ICar>
    carsCount: number
    createCard: (cardBody: ICreateCar) => Promise<void>
    deleteCard: (cardId: number) => Promise<void>
    editCard: (car: ICar) => Promise<void>
    getCards: (limit?: number, offset?: number) => Promise<number>
    searchCar: (carName: string, limit?: number, offset?: number) => Promise<number>
    isLoading: boolean,
    searchTerm: string,
    setSearchTerm: Dispatch<SetStateAction<string>>
}

const CardContextData = createContext<CardContextData>({} as CardContextData);

export function CardProvider({ children }: CardProps) {
    const { paginationProperties } = usePagination()
    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const [cars, setCars] = useState<Array<ICar>>([])
    const [carsCount, setCarsCount] = useState<number>(0)
    const [isLoading, setIsLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState<string>()

    async function searchCar(carName: string, limit: number = 12, offset: number = 0) {
        try {
            setIsLoading(true)
            const { data: carsResponse } = await httpRequest.get<IFullCar>(backendUrl + `Cars/search/?term=${carName}&limit=${limit}&offset=${offset}`, { headers: { "Access-Control-Allow-Origin": "*" } })

            setCars(carsResponse.cars)
            setCarsCount(carsResponse.totalCars)

            setIsLoading(false)

            return carsResponse.totalCars
        } catch (err) {
            setIsLoading(false)
            console.error('Get error: ', err)

            toast.error('Erro ao encontrar carro.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    async function getCards(limit: number = 12, offset: number = 0) {
        try {
            setIsLoading(true)
            const { data: carsResponse } = await httpRequest.get<IFullCar>(backendUrl + `Cars/?limit=${limit}&offset=${offset}`, { headers: { "Access-Control-Allow-Origin": "*" } })

            setCars(carsResponse.cars)
            setCarsCount(carsResponse.totalCars)

            setIsLoading(false)
            return carsResponse.totalCars
        } catch (error) {
            setIsLoading(false)
            console.error({ error })

            toast.error('Erro ao coletar carros.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    async function createCard(cardBody: ICreateCar) {
        try {
            setIsLoading(true)
            const { data: createResponse } = await httpRequest.post<ICreateCar, AxiosResponse<ICar>>(backendUrl + `Cars`, cardBody)

            setIsLoading(false)
            toast.success('Criado com sucesso.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } catch (error) {
            setIsLoading(false)
            console.error({ error })

            toast.error('Erro ao criar card.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    async function deleteCard(cardId: number) {
        try {
            setIsLoading(true)
            const { data: deleteResponse } = await httpRequest.delete<ICar>(backendUrl + `Cars/${cardId}`)
            await getCards(paginationProperties.elementsLimit, ((paginationProperties.currentPage - 1) * paginationProperties.elementsLimit))

            setIsLoading(false)
            toast.success('Deletado com sucesso.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } catch (error) {
            setIsLoading(false)
            console.error({ error })
            toast.error('Erro ao deletar card.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    async function editCard(car: ICar) {
        try {
            setIsLoading(true)
            const { data: updateResponse } = await httpRequest.put<ICar, AxiosResponse<number>>(backendUrl + `Cars/${car.id}`, car)
            await getCards(paginationProperties.elementsLimit, ((paginationProperties.currentPage - 1) * paginationProperties.elementsLimit))

            setIsLoading(false)
            toast.success('Atualizado com sucesso.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } catch (error) {
            setIsLoading(false)
            console.error({ error })
            toast.error('Erro ao atualizar card.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    return (
        <CardContextData.Provider value={{
            cars,
            carsCount,
            createCard,
            deleteCard,
            editCard,
            getCards,
            isLoading,
            searchCar,
            searchTerm,
            setSearchTerm
        }}>
            {children}
        </CardContextData.Provider>
    )
}

export function useCard() {
    const context = useContext(CardContextData);

    return context;
}