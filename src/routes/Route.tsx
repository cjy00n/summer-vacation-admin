import AuthorityPage from "../pages/AuthorityPage";
import DiaryPage from "../pages/DiaryPage";
import FeedPage from "../pages/FeedPage";
import InquiryPage from "../pages/InQuiryPage";
import UsersPage from "../pages/UsersPage";
import OpenLicensePage from "../pages/etc-manage/OpenLicensePage";
import PrivacyPolicyPage from "../pages/etc-manage/PrivacyPolicyPage";
import TermsOfUsePage from "../pages/etc-manage/TermsOfUsePage";
import VersionPage from "../pages/etc-manage/VersionPage";
import FAQPage from "../pages/FAQPage";
import LoginPage from "../pages/LoginPage";

interface RouteItem {
  path: string;
  link: string;
  element: JSX.Element;
  haveHeader?: boolean;
  haveSideBar?: boolean;
}

interface Routes {
  [key: string]: RouteItem;
}
export const ROUTE: Routes = {
  USERS_PAGE: {
    path: "/users",
    link: "/users",
    element: <UsersPage />,
  },
  DIARY_PAGE: {
    path: "/diary",
    link: "/diary",
    element: <DiaryPage />,
  },
  FEED_PAGE: {
    path: "/feed",
    link: "/feed",
    element: <FeedPage />,
  },
  REPORT_PAGE: {
    path: "/report",
    link: "/report",
    element: <UsersPage />,
  },
  INQUIRY_PAGE: {
    path: "/inquiry",
    link: "/inquiry",
    element: <InquiryPage />,
  },
  FAQ_PAGE: {
    path: "/faq",
    link: "/faq",
    element: <FAQPage />,
  },
  TERMS_OF_USE_PAGE: {
    path: "/terms-of-use",
    link: "/terms-of-use",
    element: <TermsOfUsePage />,
  },
  PRIVACY_POLICY_PAGE: {
    path: "/privacy-policy",
    link: "/privacy-policy",
    element: <PrivacyPolicyPage />,
  },
  OPEN_LICENSE_PAGE: {
    path: "/open-license",
    link: "/open-license",
    element: <OpenLicensePage />,
  },
  VERSION_PAGE: {
    path: "/version",
    link: "/version",
    element: <VersionPage />,
  },
  AUTHORITY_PAGE: {
    path: "/authority",
    link: "/authority",
    element: <AuthorityPage />,
  },
  LOGIN_PAGE: {
    path: "/login",
    link: "/login",
    haveHeader: false,
    haveSideBar: false,
    element: <LoginPage />,
  },
};

export const ROUTE_ARR = Object.values(ROUTE);
