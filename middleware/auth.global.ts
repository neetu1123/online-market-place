export default defineNuxtRouteMiddleware(async () => {
  // Below condition process only on client side

const userToken = localStorage.getItem('token')
const userStore = useUserStore()

const {token} = storeToRefs(userStore);
  if(userToken)
     token.value = userToken;
});
