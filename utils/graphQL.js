import { request,gql} from "graphql-request";

const graphqlAPI=process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getMenItems= async()=>{
    const query=gql`

    query Menitems {
        menitems {
          price
          productId
          stock
          title
          type
          mainimg {
            url
          }
        }
      }
      
    
    `
    const result=await request(graphqlAPI,query)
    return result.menitems
}

export const getMenShirts= async() =>{
    const query=gql`

    query Menitems {
        menitems(where: {type_contains: "shirt"}) {
          price
          productId
          stock
          title
          type
          mainimg {
            url
          }
        }
      }
    
    `
    const result=await request(graphqlAPI,query)
    return result.menitems
}
export const getMenPants= async() =>{
    const query=gql`

    query Menitems {
        menitems(where: {type_contains: "pants"}) {
          price
          productId
          stock
          title
          type
          mainimg {
            url
          }
        }
      }
    
    `
    const result=await request(graphqlAPI,query)
    return result.menitems
}
export const getMenJackets= async() =>{
    const query=gql`

    query Menitems {
        menitems(where: {type_contains: "jacket"}) {
          price
          productId
          stock
          title
          type
          mainimg {
            url
          }
        }
      }
    
    `
    const result=await request(graphqlAPI,query)
    return result.menitems
}
export const getWomenItems= async()=>{
    const query=gql`

    query Womenitems {
        womenItems {
          price
          productId
          stock
          title
          type
          mainimg {
            url
          }
        }
      }
    
    `
    const result=await request(graphqlAPI,query)
    return result.womenItems
}
export const getWomenJackets= async()=>{
    const query=gql`
    query Womenitems {
        womenItems(where: {type_contains: "jacket"}) {
          price
          productId
          stock
          title
          type
          mainimg {
            url
          }
        }
      }
    `
    const result=await request(graphqlAPI,query)
    return result.womenItems
}
export const getWomenShirts= async()=>{
    const query=gql`
    query Womenitems {
        womenItems(where: {type_contains: "shirt"}) {
          price
          productId
          stock
          title
          type
          mainimg {
            url
          }
        }
      }
    `
    const result=await request(graphqlAPI,query)
    return result.womenItems
}
export const getWomenPants= async()=>{
    const query=gql`
    query Womenitems {
        womenItems(where: {type_contains: "pants"}) {
          price
          productId
          stock
          title
          type
          mainimg {
            url
          }
        }
      }
    `
    const result=await request(graphqlAPI,query)
    return result.womenItems
}
export const getShoes= async()=>{
    const query=gql `
    query shoes {
        shoes {
          price
          productId
          stock
          title
          type
          mainimg {
            url
          }
        }
      }
      
    `;
    const result=await request(graphqlAPI,query);

    return result.shoes
}
export const getShoesWalking= async()=>{
    const query=gql`
    query shoes(where:{type_contains:"walking"}) {
        shoes {
          price
          productId
          stock
          title
          type
          mainimg {
            url
          }
        }
      }
      
    `
    const result=await request(graphqlAPI,query)
    return result.shoes
}
export const getShoesRunning= async()=>{
    const query=gql`
    query shoes(where:{type_contains:"running"}) {
        shoes {
          price
          productId
          stock
          title
          type
          mainimg {
            url
          }
        }
      }
      
    `
    const result=await request(graphqlAPI,query)
    return result.shoes
}
export const getShoesCasual= async()=>{
    const query=gql`
    query shoes(where:{type_contains:"casual"}) {
        shoes {
          price
          productId
          stock
          title
          type
          mainimg {
            url
          }
        }
      }
      
    `
    const result=await request(graphqlAPI,query)
    return result.shoes
}
