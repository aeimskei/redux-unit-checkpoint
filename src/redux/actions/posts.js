export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILED = 'FETCH_POSTS_FAILED';

const BASE_URL = 'http://localhost:8082/api';

export const fetchPosts = () => {
  return async dispatch => {
    try {
      let response = await fetch(`${BASE_URL}/posts`);
      let posts = await response.json()
      dispatch({
        type: FETCH_POSTS_SUCCESS,
        payload: posts
      })
    } catch (err) {
      dispatch({
        type: FETCH_POSTS_FAILED,
        payload: err
      })

    }
  }
}