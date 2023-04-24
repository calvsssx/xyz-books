import { routerType } from "../types/router.types";
import BookSearch from "./BookSearch";
import Home from "./Home";
import Search from "./Search";
import ErrorPage from "./Error";
import staticData from "../static/staticData";
import BookInformation from "./BookInformation";

const pagesData: routerType[] = [
  {
    path: "",
    element: <Home />,
    title: "home"
  },
  {
    path: "search",
    element: <Search />,
    title: "search"
  },
  // {
  //   path:"BookSearch",
  //   element: <BookSearch />,
  //   title: "booksearch"
  // },
  {
    path:"BooksInformation/:isbn",
    element: <BookInformation books={staticData} />,
    title: "bookinformation"
  },
  {
    path:"Error",
    element: <ErrorPage message="error" />,
    title: "error"
  }
];

export default pagesData;