import { IPhoto } from "./photo";

interface ICarBase {
    name: string,
    status: string
}

export interface ICar extends ICarBase{
    id: number,
    photoId: number,
    photo: IPhoto
}

export interface ICreateCar extends ICarBase {
    photo: Omit<IPhoto, 'id'>
}

export interface IFullCar {
    cars: Array<ICar>,
    totalCars: number
}