import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { IPagination } from '../interfaces/pagination';
import { httpRequest } from '../providers/customAxios';

interface PaginationProps {
    children: ReactNode;
}

interface PaginationContextData {
    paginationProperties: IPagination
    mountPagination: (totalElements: number) => void
    changePage: (direction: 'prev' | 'next') => void
    goToPage: (pageNumber: number) => void
}

const PaginationContextData = createContext<PaginationContextData>({} as PaginationContextData);

export function PaginationProvider({ children }: PaginationProps) {
    const [paginationProperties, setPaginationProperties] = useState<IPagination>(null)

    function mountPagination(totalElements: number) {
        const newPagination: IPagination = {
            currentPage: 1,
            elementsLimit: 12,
            totalElements: totalElements
        }

        setPaginationProperties(newPagination)
    }

    function goToPage(pageNumber: number){
        setPaginationProperties({
            ...paginationProperties,
            currentPage: pageNumber,
        })
    }

    function changePage(direction: 'prev' | 'next') {
        const newPagination: IPagination = {
            ...paginationProperties,
            currentPage: direction == 'next' ? (paginationProperties.currentPage + 1) : (paginationProperties.currentPage - 1),
        }

        setPaginationProperties(newPagination)
    }

    return (
        <PaginationContextData.Provider value={{
            paginationProperties,
            mountPagination,
            changePage,
            goToPage
        }}>
            {children}
        </PaginationContextData.Provider>
    )
}

export function usePagination() {
    const context = useContext(PaginationContextData);

    return context;
}