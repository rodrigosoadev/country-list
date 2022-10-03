import { CountriesInfosContainer, CountrySettings } from '../../Home/styles'
import { CountriesDataProps } from '../SearchCountry/CountrySelect'

interface CountriesInfoProps {
    currentCountry: CountriesDataProps;
}

export function CountriesInfo({ currentCountry }: CountriesInfoProps) {
    return (
        <CountriesInfosContainer>
            <CountrySettings>
                <p>
                    Nome do país: <span>{currentCountry.name}</span>
                </p>
                <p>
                    Capital: <span>{currentCountry.capital}</span>
                </p>
            </CountrySettings>
            <CountrySettings>
                <p>
                    Moeda: <span>{currentCountry.currency}</span>
                </p>
                <p>
                    Bandeira (emoji): <span>{currentCountry.emoji}</span>
                </p>
            </CountrySettings>
            <CountrySettings>
                <p>
                    idioma(s) falado(s){''}
                    {currentCountry.languages?.map((language) => {
                        <span>{language.name}</span>
                    })}
                </p>
            </CountrySettings>
        </CountriesInfosContainer>
    )

}
