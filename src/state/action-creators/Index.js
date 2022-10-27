export const getdata = (posts)=>
{
  // console.log(posts)
  return (dispatch)=>{
    dispatch({
      type: 'getData',
      payload: posts
    })
  }
}

