import{_ as p,x as L,A as T,s as M}from"./ApolloContext-0423ced6.js";import{r as s}from"./index-7df5b2c6.js";import{u as b,v as k,D as y,g as u}from"./index-bcc7c8d0.js";function O(f,o){var l=b(o==null?void 0:o.client);k(f,y.Mutation);var I=s.useState({called:!1,loading:!1,client:l}),C=I[0],c=I[1],r=s.useRef({result:C,mutationId:0,isMounted:!0,client:l,mutation:f,options:o});Object.assign(r.current,{client:l,options:o,mutation:f});var P=s.useCallback(function(e){e===void 0&&(e={});var E=r.current,_=E.options,D=E.mutation,S=p(p({},_),{mutation:D}),d=e.client||r.current.client;!r.current.result.loading&&!S.ignoreResults&&r.current.isMounted&&c(r.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:d});var R=++r.current.mutationId,i=L(S,e);return d.mutate(i).then(function(t){var a,n,m=t.data,g=t.errors,v=g&&g.length>0?new T({graphQLErrors:g}):void 0,N=e.onError||((a=r.current.options)===null||a===void 0?void 0:a.onError);if(v&&N&&N(v,i),R===r.current.mutationId&&!i.ignoreResults){var w={called:!0,loading:!1,data:m,error:v,client:d};r.current.isMounted&&!M(r.current.result,w)&&c(r.current.result=w)}var $=e.onCompleted||((n=r.current.options)===null||n===void 0?void 0:n.onCompleted);return v||$==null||$(t.data,i),t}).catch(function(t){var a;if(R===r.current.mutationId&&r.current.isMounted){var n={loading:!1,error:t,data:void 0,called:!0,client:d};M(r.current.result,n)||c(r.current.result=n)}var m=e.onError||((a=r.current.options)===null||a===void 0?void 0:a.onError);if(m)return m(t,i),{data:void 0,errors:t};throw t})},[]),U=s.useCallback(function(){r.current.isMounted&&c({called:!1,loading:!1,client:l})},[]);return s.useEffect(function(){return r.current.isMounted=!0,function(){r.current.isMounted=!1}},[]),[P,p({reset:U},C)]}const q=u`
  mutation CreateUser($firstName: String!, $lastName: String!, $email: String!, $password: String!, $role: Role!, $address: String!, $contactNumber: String!) {
    createUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password, role: $role, address: $address, contactNumber: $contactNumber) {
      token 
      user {
        id
      }
    }
  }
`,F=u`
mutation CreateProduct($name: String!, $description: String!, $category: String!, $imageURLs: [String!]!, $price: Float!, $stock: Float, $sellerId: ID) {
  createProduct(name: $name, description: $description, category: $category, imageURLs: $imageURLs, price: $price, stock: $stock, sellerId: $sellerId) {
    description
    category
    id
    imageURLs
    name
    price
    stock
  }
}
`,G=u`
  mutation Mutation($incrementProductViewCountId: ID!) {
    incrementProductViewCount(id: $incrementProductViewCountId) {
      name
      id 
      viewCount
    }
  }
`,j=u`
  mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        email
        firstName
        lastName
        id
        role
      }
    }
  }

`,Q=u`
  mutation Mutation($deleteProductId: ID!) {
    deleteProduct(id: $deleteProductId)
  }
`;export{q as C,Q as D,j as L,F as P,G as a,O as u};
