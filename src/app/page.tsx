import LoadingCards from '@/components/card/LoadingCards'
import CategoriesList from '@/components/home/CategoriesList'
import PropertiesContainer from '@/components/home/PropertiesContainer'
import { Suspense } from 'react'

import React from 'react'

const HomePage = ({
  searchParams,
}: {
  searchParams: { category?: string; search?: string };
}) => {

  return (
    <div>
      <section>
        <CategoriesList category ={searchParams.category} search={searchParams.search}/>
        <Suspense fallback={<LoadingCards/>}>
        <PropertiesContainer category ={searchParams.category} search={searchParams.search}/>
        </Suspense>
      </section>

      
    </div>
  )
}

export default HomePage