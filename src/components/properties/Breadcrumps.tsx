import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from '@/components/ui/breadcrumb';

const BreadCrumps = ({name}:{name:string}) => {
  return (
    <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
       <BreadcrumbLink href='/'> Home</BreadcrumbLink>
       <BreadcrumbSeparator/>
       <BreadcrumbPage>
       {name}
       </BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
    </Breadcrumb>
  )
}

export default BreadCrumps;