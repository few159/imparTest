export interface IWeather {
    id: number,
    name: string,
    state: string,
    country: string,
    data: {
        temperature: number,
        wind_direction: string,
        wind_velocity: number,
        humidity: number,
        condition: string,
        pressure: number,
        icon: string,
        sensation: number,
        date: Date
    }
}