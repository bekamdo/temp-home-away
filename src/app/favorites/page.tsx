import EmptyList from "@/components/home/EmptyList";
import PropertiesList from "@/components/home/PropertiesList";
import { fetchFavorities } from "@/utils/actions";

const Favorites = async() => {
  const favorites = await fetchFavorities();
  if(favorites.length === 0){
    return <EmptyList/>
  }
  return (
    <PropertiesList properties={favorites}/>
  )
}

export default Favorites;