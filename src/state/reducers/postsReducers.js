const reducer = (state={} ,action)=>{
  // console.log()
  if(action.type==='getData'){
  return {posts: action.payload}
  }
  else{
    return state;
  }
}
export default reducer;
