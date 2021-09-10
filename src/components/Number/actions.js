import { NUMBER_API_URL, setData, setError, setLoading } from "./numberSlice";

export const getNumberFact = (number) => async (dispatch, getState) => {
  const {
    number: { data, loading, error },
  } = getState();

  if (!loading) {
    try {
      dispatch(setError(false));
      dispatch(setLoading(true));
      const responce = await fetch(NUMBER_API_URL + `${number}/trivia`);
    //   console.log(responce);
      if (!responce.ok) {
        throw new Error("Something went wrong");
      }
      const result = await responce.text();
    //   const result = await responce.json();
      console.log(result);
      dispatch(setData(result));
    } catch (e) {
      dispatch(setError(true));
    } finally {
      dispatch(setLoading(false));
    }
  }
};