"use client"

import { FaHeart } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { auth } from '@clerk/nextjs/server';

import { usePathname } from 'next/navigation';
import FormContainer from '../form/FormContainer';
import { CardSubmitButton } from '../form/Button';
import { toggleFavouriteAction } from '@/utils/actions';

type FavoriteToggleFormProps ={
  propertyId:string;
  favoriteId: string | null;
}

const FavouriteToggleForm = ({propertyId,favoriteId}:FavoriteToggleFormProps) => {
  const pathName = usePathname();
  const toggleAction = toggleFavouriteAction.bind(null,{propertyId,favoriteId,pathName})
  return (
    <FormContainer action={toggleAction}>
      <CardSubmitButton isFavorite={favoriteId ? true : false}/>
    </FormContainer>
  )
}

export default FavouriteToggleForm