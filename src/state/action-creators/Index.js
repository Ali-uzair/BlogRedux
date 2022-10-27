export const getdata = (posts) => {
  // console.log(posts)
  return (dispatch) => {
    dispatch({
      type: "getData",
      payload: posts,
    });
  };
};

export const setdata = (post) => {
  // console.log(posts)
  return (dispatch) => {
    dispatch({
      type: "setData",
      payload: post,
    });
  };
};
