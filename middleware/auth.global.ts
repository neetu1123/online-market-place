export default defineNuxtRouteMiddleware(async (to, from) => {
  // Below condition process only on client side

const userToken = localStorage.getItem('token')
 const userData = decodedUserData() ;
  const userStore = useUserStore()
  const {token} = storeToRefs(userStore);
  if(userToken)
     token.value = userToken;
});
