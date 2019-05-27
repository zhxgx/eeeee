import axios from "axios";

export let action1 = ({dispatch, url, params, typename}) => {
  let p = params ? axios({url, params}) : axios({url});
  p.then(
    res => {
      dispatch({type: typename, payload: res.data.page_data});
      dispatch({type: 'VIEW_LOADING', payload: false})
    }
  );

  return {type: 'VIEW_LOADING', payload: true}

};

export let action2 = ({typename, url, params}) => (dispatch) => {

  dispatch({type: 'VIEW_LOADING', payload: true});

  return axios({url, params}).then(
    res => {

      dispatch({type: typename, payload: res.data});

      dispatch({type: 'VIEW_LOADING', payload: false});

      return res.data.error
    }
  )
};

