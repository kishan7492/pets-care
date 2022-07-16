export const Actions = {
    ADD_POST: "ADD_POST",
    DELETE_POST: "DELTE_POST",
  };
  
  export const addPost = post => ({
    type: Actions.ADD_POST,
    post
  });
  
  export const deletePost = post => ({
    type: Actions.DELTE_POST,
    post
  });

  