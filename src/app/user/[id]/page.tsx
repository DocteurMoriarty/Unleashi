import { Metadata } from "next"

export const generateMetadata = ({ params }: { params: {id:string }}): Metadata => {
  return{
    title: `Utilisateur ${ params.id }`,
  }
    
}



export default function user({
    params
}:{
    params: { id : string }
}) {
  return <h1>Utilisateur {params.id}</h1>
}
