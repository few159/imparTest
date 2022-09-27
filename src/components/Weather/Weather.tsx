import { useEffect, useState } from "react"
import { IWeather } from "../../interfaces/weather"
import { httpRequest } from "../../providers/customAxios"
import { WeatherElement } from "./styles"

export default function Weather() {
    const [weather, setWeather] = useState<IWeather>(null)

    useEffect(() => {
        getWheater()
    }, [])

    async function getWheater() {
        const { data: weatherResponse } = await httpRequest.get<IWeather>('https://apiadvisor.climatempo.com.br/api/v1/weather/locale/5959/current?token=1a3bad1ad2bdd3710fff7faf0df4893d')

        setWeather(weatherResponse)
    }

    return (
        <>
            {
                weather ?
                    <WeatherElement>
                        <div>
                            <strong>Local: </strong>{weather.name} / {weather.country}
                        </div>
                        <div>
                            <strong>Cº </strong>{weather.data.temperature}
                        </div>
                    </WeatherElement>
                    : null
            }
        </>
    )
}