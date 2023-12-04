type FetchUserToken = (
  setToken: any,
  setLoading: any,
  getUserToken: any,
) => void;
export const fetchToken: FetchUserToken = async (
  setToken,
  setLoading,
  getUserToken,
) => {
  try {
    let userToken = await getUserToken();
    const token = userToken.payload?.token || null;
    setToken(token);
  } catch (error) {
    console.error('Token_error', error);
  } finally {
    setLoading(false);
  }
};
