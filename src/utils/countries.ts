import countries from "world-countries";


export const formatedCountries = countries.map((item) => {
    return {code: item.cca2, name: item.name.common, flag: item.flag, location:item.latlng,region:item.region}
})

export const findCountryByCode = (code: string) => {
    return formatedCountries.find((item) => item.code === code)
}