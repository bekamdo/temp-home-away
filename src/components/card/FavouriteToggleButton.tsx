import { FaHeart } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import {auth} from "@clerk/nextjs/server"
import { CardSignInButton } from '../form/Button';
import { fetchFavoritesId } from '@/utils/actions';
import FavouriteToggleForm from './FavouriteToggleForm';
const FavouriteToggleButton =  async ({propertyId}:{propertyId:string}) => {
  const {userId} = auth() ;
  const favouriteId = await fetchFavoritesId({propertyId})

  if(!userId) return <CardSignInButton/>
  return (
    <FavouriteToggleForm favoriteId = {favouriteId} propertyId={propertyId}/>

  
  )
}

export default FavouriteToggleButton  