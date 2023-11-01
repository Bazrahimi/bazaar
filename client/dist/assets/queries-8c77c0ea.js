import{b,B as R,g as Q,z as E,s as f,r as k,x as C,q as g,A as O,_ as y}from"./ApolloContext-0423ced6.js";import{r as l,F as w}from"./index-7df5b2c6.js";import{u as D,v as _,D as U,g as h}from"./index-bcc7c8d0.js";import{m,N as p,a as P}from"./networkStatus-e971fe23.js";var S=!1,q="useSyncExternalStore",T=w[q],I=T||function(s,t,e){var r=t();globalThis.__DEV__!==!1&&!S&&r!==t()&&(S=!0,globalThis.__DEV__!==!1&&b.error(58));var i=l.useState({inst:{value:r,getSnapshot:t}}),o=i[0].inst,a=i[1];return R?l.useLayoutEffect(function(){Object.assign(o,{value:r,getSnapshot:t}),v(o)&&a({inst:o})},[s,r,t]):Object.assign(o,{value:r,getSnapshot:t}),l.useEffect(function(){return v(o)&&a({inst:o}),s(function(){v(o)&&a({inst:o})})},[s]),r};function v(s){var t=s.value,e=s.getSnapshot;try{return t!==e()}catch{return!0}}var L=Object.prototype.hasOwnProperty;function N(s,t){return t===void 0&&(t=Object.create(null)),H(D(t.client),s).useQuery(t)}function H(s,t){var e=l.useRef();(!e.current||s!==e.current.client||t!==e.current.query)&&(e.current=new A(s,t,e.current));var r=e.current;return r.forceUpdateState=l.useReducer(function(i){return i+1},0)[1],r}var A=function(){function s(t,e,r){var i=this;this.client=t,this.query=e,this.forceUpdate=function(){return i.forceUpdateState()},this.ssrDisabledResult=m({loading:!0,data:void 0,error:void 0,networkStatus:p.loading}),this.skipStandbyResult=m({loading:!1,data:void 0,error:void 0,networkStatus:p.ready}),this.toQueryResultCache=new(Q?WeakMap:Map),_(e,U.Query);var o=r&&r.result,a=o&&o.data;a&&(this.previousData=a)}return s.prototype.forceUpdateState=function(){globalThis.__DEV__!==!1&&b.warn(50)},s.prototype.executeQuery=function(t){var e=this,r;t.query&&Object.assign(this,{query:t.query}),this.watchQueryOptions=this.createWatchQueryOptions(this.queryHookOptions=t);var i=this.observable.reobserveAsConcast(this.getObsQueryOptions());return this.previousData=((r=this.result)===null||r===void 0?void 0:r.data)||this.previousData,this.result=void 0,this.forceUpdate(),new Promise(function(o){var a;i.subscribe({next:function(c){a=c},error:function(){o(e.toQueryResult(e.observable.getCurrentResult()))},complete:function(){o(e.toQueryResult(a))}})})},s.prototype.useQuery=function(t){var e=this;this.renderPromises=l.useContext(E()).renderPromises,this.useOptions(t);var r=this.useObservableQuery(),i=I(l.useCallback(function(o){if(e.renderPromises)return function(){};e.forceUpdate=o;var a=function(){var n=e.result,u=r.getCurrentResult();n&&n.loading===u.loading&&n.networkStatus===u.networkStatus&&f(n.data,u.data)||e.setResult(u)},c=function(n){if(d.unsubscribe(),d=r.resubscribeAfterError(a,c),!L.call(n,"graphQLErrors"))throw n;var u=e.result;(!u||u&&u.loading||!f(n,u.error))&&e.setResult({data:u&&u.data,error:n,loading:!1,networkStatus:p.error})},d=r.subscribe(a,c);return function(){setTimeout(function(){return d.unsubscribe()}),e.forceUpdate=function(){return e.forceUpdateState()}}},[r,this.renderPromises,this.client.disableNetworkFetches]),function(){return e.getCurrentResult()},function(){return e.getCurrentResult()});return this.unsafeHandlePartialRefetch(i),this.toQueryResult(i)},s.prototype.useOptions=function(t){var e,r=this.createWatchQueryOptions(this.queryHookOptions=t),i=this.watchQueryOptions;f(r,i)||(this.watchQueryOptions=r,i&&this.observable&&(this.observable.reobserve(this.getObsQueryOptions()),this.previousData=((e=this.result)===null||e===void 0?void 0:e.data)||this.previousData,this.result=void 0)),this.onCompleted=t.onCompleted||s.prototype.onCompleted,this.onError=t.onError||s.prototype.onError,(this.renderPromises||this.client.disableNetworkFetches)&&this.queryHookOptions.ssr===!1&&!this.queryHookOptions.skip?this.result=this.ssrDisabledResult:this.queryHookOptions.skip||this.watchQueryOptions.fetchPolicy==="standby"?this.result=this.skipStandbyResult:(this.result===this.ssrDisabledResult||this.result===this.skipStandbyResult)&&(this.result=void 0)},s.prototype.getObsQueryOptions=function(){var t=[],e=this.client.defaultOptions.watchQuery;return e&&t.push(e),this.queryHookOptions.defaultOptions&&t.push(this.queryHookOptions.defaultOptions),t.push(k(this.observable&&this.observable.options,this.watchQueryOptions)),t.reduce(C)},s.prototype.createWatchQueryOptions=function(t){var e;t===void 0&&(t={});var r=t.skip;t.ssr,t.onCompleted,t.onError,t.defaultOptions;var i=g(t,["skip","ssr","onCompleted","onError","defaultOptions"]),o=Object.assign(i,{query:this.query});if(this.renderPromises&&(o.fetchPolicy==="network-only"||o.fetchPolicy==="cache-and-network")&&(o.fetchPolicy="cache-first"),o.variables||(o.variables={}),r){var a=o.fetchPolicy,c=a===void 0?this.getDefaultFetchPolicy():a,d=o.initialFetchPolicy,n=d===void 0?c:d;Object.assign(o,{initialFetchPolicy:n,fetchPolicy:"standby"})}else o.fetchPolicy||(o.fetchPolicy=((e=this.observable)===null||e===void 0?void 0:e.options.initialFetchPolicy)||this.getDefaultFetchPolicy());return o},s.prototype.getDefaultFetchPolicy=function(){var t,e;return((t=this.queryHookOptions.defaultOptions)===null||t===void 0?void 0:t.fetchPolicy)||((e=this.client.defaultOptions.watchQuery)===null||e===void 0?void 0:e.fetchPolicy)||"cache-first"},s.prototype.onCompleted=function(t){},s.prototype.onError=function(t){},s.prototype.useObservableQuery=function(){var t=this.observable=this.renderPromises&&this.renderPromises.getSSRObservable(this.watchQueryOptions)||this.observable||this.client.watchQuery(this.getObsQueryOptions());this.obsQueryFields=l.useMemo(function(){return{refetch:t.refetch.bind(t),reobserve:t.reobserve.bind(t),fetchMore:t.fetchMore.bind(t),updateQuery:t.updateQuery.bind(t),startPolling:t.startPolling.bind(t),stopPolling:t.stopPolling.bind(t),subscribeToMore:t.subscribeToMore.bind(t)}},[t]);var e=!(this.queryHookOptions.ssr===!1||this.queryHookOptions.skip);return this.renderPromises&&e&&(this.renderPromises.registerSSRObservable(t),t.getCurrentResult().loading&&this.renderPromises.addObservableQueryPromise(t)),t},s.prototype.setResult=function(t){var e=this.result;e&&e.data&&(this.previousData=e.data),this.result=t,this.forceUpdate(),this.handleErrorOrCompleted(t,e)},s.prototype.handleErrorOrCompleted=function(t,e){var r=this;if(!t.loading){var i=this.toApolloError(t);Promise.resolve().then(function(){i?r.onError(i):t.data&&(e==null?void 0:e.networkStatus)!==t.networkStatus&&t.networkStatus===p.ready&&r.onCompleted(t.data)}).catch(function(o){globalThis.__DEV__!==!1&&b.warn(o)})}},s.prototype.toApolloError=function(t){return P(t.errors)?new O({graphQLErrors:t.errors}):t.error},s.prototype.getCurrentResult=function(){return this.result||this.handleErrorOrCompleted(this.result=this.observable.getCurrentResult()),this.result},s.prototype.toQueryResult=function(t){var e=this.toQueryResultCache.get(t);if(e)return e;var r=t.data;t.partial;var i=g(t,["data","partial"]);return this.toQueryResultCache.set(t,e=y(y(y({data:r},i),this.obsQueryFields),{client:this.client,observable:this.observable,variables:this.observable.variables,called:!this.queryHookOptions.skip,previousData:this.previousData})),!e.error&&P(t.errors)&&(e.error=new O({graphQLErrors:t.errors})),e},s.prototype.unsafeHandlePartialRefetch=function(t){t.partial&&this.queryHookOptions.partialRefetch&&!t.loading&&(!t.data||Object.keys(t.data).length===0)&&this.observable.options.fetchPolicy!=="cache-only"&&(Object.assign(t,{loading:!0,networkStatus:p.refetch}),this.observable.refetch())},s}();const $=h`
  query GetLatestProducts {
    getLatestProducts {
      products {
        id
        imageURLs
        name
        price
      }
      totalProductsCount
    }
  }
`,j=h`
  query GetProductsByCategory($category: String!) {
    getProductsByCategory(category: $category) {
      category
      description
      id
      imageURLs
      name
      stock
      price

    }
  }
`,x=h`
  query Query($getProductsById: ID!) {
    getProductsById(id: $getProductsById) {
      category
      createdAt
      description
      id
      imageURLs
      name
      price
      stock
      seller {
        id
        firstName
        email
      }
      viewCount
    }
}
`,W=h`
query Query($term: String!) {
  getProductsBySearch(term: $term) {
    id
    imageURLs
    name
    price
  }
}
`,V=h`
  query MostViewedProducts {
    MostViewedProducts {
      products {
        name
        id
        price
        viewCount
        imageURLs
      }
      totalProductsCount
    }
  }
`,Y=h`
  query Query($getUserDetailsId: ID!) {
    getUserDetails(id: $getUserDetailsId) {
      address
      contactNumber
      email
      firstName
      id
      lastName
      role
      status
    }
  }
`,z=h`
query GetProductsBySeller($getProductsBySellerId: ID!) {
  getProductsBySeller(id: $getProductsBySellerId) {
    viewCount
    name
    price
    imageURLs
    id
  }
}
`;export{$ as G,V as M,j as a,x as b,W as c,Y as d,z as e,N as u};
