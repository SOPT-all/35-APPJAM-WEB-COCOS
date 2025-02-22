import Community from "@page/community/index/Community";
import Write from "@page/community/write/Write";
import { PATH } from "@route/path.ts";
import PostDetail from "@page/community/[postId]/PostDetail";
import SearchDone from "@page/community/search/done/SearchDone.tsx";
import Search from "@page/community/search/index/Search.tsx";
import Category from "@page/community/category/Category.tsx";
import SymptomDetail from "@page/main/index/symptomDetail/SymptomDetail";

const COMMUNITY_ROUTES = [
  { path: PATH.COMMUNITY.ROOT, element: <Community /> },
  { path: PATH.COMMUNITY.POST, element: <PostDetail /> },
  { path: PATH.COMMUNITY.SEARCH, element: <Search /> },
  { path: PATH.COMMUNITY.SEARCH_DONE, element: <SearchDone /> },
  { path: PATH.COMMUNITY.WRITE, element: <Write /> },
  { path: PATH.COMMUNITY.CATEGORY, element: <Category /> },
  {path: PATH.COMMUNITY.DETAIL, element : < SymptomDetail/>}
];

export default COMMUNITY_ROUTES;
