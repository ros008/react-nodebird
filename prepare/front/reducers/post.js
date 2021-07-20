export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "sujin",
      },
      content: "첫 번째 게시글 #해시태그 #익스프레스",
      Images: [
        {
          src: "http://cardenas.itrydaily.com/images/aipon-dijeuni-baegyeonghwamyeon-gongjubaegyeonghwa.jpg?s=VuRw2x7iHZ",
        },
        {
          src: "https://t1.daumcdn.net/cfile/tistory/27405150584A40500D",
        },
        {
          src: "https://t1.daumcdn.net/cfile/blog/2165154D5477DF6513",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "nero",
          },
          content: "댓글1",
        },
        {
          User: {
            nickname: "hero",
          },
          content: "댓글2",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: "더미데이터",
  User: {
    id: 1,
    nickname: "sujin",
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
