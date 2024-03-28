import { ROUTE } from "../../routes/Route";
import SideBarItem from "./SideBarItem";

interface SideBarItemType {
  title: string;
  link: string;
  subItems?: {
    title: string;
    link: string;
  }[];
}

const SideBar = () => {
  const subItems: SideBarItemType[] = [
    {
      title: "회원관리",
      link: ROUTE.USERS_PAGE.link,
    },
    {
      title: "일기",
      link: ROUTE.DIARY_PAGE.link,
    },
    {
      title: "피드관리",
      link: ROUTE.FEED_PAGE.link,
    },
    {
      title: "신고목록",
      link: ROUTE.REPORT_PAGE.link,
    },
    {
      title: "1:1문의",
      link: ROUTE.INQUIRY_PAGE.link,
    },
    {
      title: "FAQ",
      link: ROUTE.FAQ_PAGE.link,
    },
    {
      title: "기타정보관리",
      link: ROUTE.TERMS_OF_USE_PAGE.link,
      subItems: [
        {
          title: "이용약관",
          link: ROUTE.TERMS_OF_USE_PAGE.link,
        },
        {
          title: "개인정보처리방침",
          link: ROUTE.PRIVACY_POLICY_PAGE.link,
        },
        {
          title: "오픈 라이선스",
          link: ROUTE.OPEN_LICENSE_PAGE.link,
        },
        {
          title: "버전 관리",
          link: ROUTE.VERSION_PAGE.link,
        },
      ],
    },
    {
      title: "권한",
      link: ROUTE.AUTHORITY_PAGE.link,
    },
  ];
  return (
    <div className="flex flex-col w-52 bg-gray-70">
      <div className="bg-gray-80">
        {subItems.map((item) => (
          <div key={item.link} className="w-full">
            <SideBarItem
              to={item.link}
              title={item.title}
              haveSubItems={item.subItems !== undefined}
            />
            {item.subItems && (
              <div className="ml-5 flex flex-col">
                {item.subItems.map((subItem) => (
                  <SideBarItem
                    key={item.link + subItem.link}
                    to={subItem.link}
                    title={subItem.title}
                    isSubItem
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
