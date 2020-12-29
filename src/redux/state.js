const state = {
  profilePage: {
    postsData: [
      { message: "my first post", likesCount: 1 },
      { message: "my second post", likesCount: 10 },
      { message: "my third post", likesCount: 19999 },
    ],
  },
  dialogsPage: {
    messagesData: [{ message: "hi1" }, { message: "hi2" }, { message: "h53" }],
    dialogsData: [
      { name: "Name1", id: 1 },
      { name: "Name2", id: 2 },
      { name: "Name3", id: 3 },
      { name: "Namedede4", id: 4 },
    ],
  },
  friendsPage: {
    friendsData: [
      {name: 'name1', id: 1,},
      {name: 'name2', id: 2,},
      {name: 'name3', id: 3,},
    ]
  },
};
export { state };
