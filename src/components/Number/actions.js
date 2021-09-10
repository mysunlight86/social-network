import { NUMBER_API_URL, setData, setError, setLoading } from "./numberSlice";

export const getNumberFact = (number) => async (dispatch, getState) => {
  const {
    number: { loading },
  } = getState();

  if (!loading) {
    try {
      dispatch(setError(false));
      dispatch(setLoading(true));
      const responce = await fetch(NUMBER_API_URL + `${number}/trivia`);
      if (!responce.ok) {
        throw new Error("Something went wrong");
      }
      const result = await responce.text();
      dispatch(setData(result));
    } catch (e) {
      dispatch(setError(true));
    } finally {
      dispatch(setLoading(false));
      dispatch(setError(false));
    }
  }
};