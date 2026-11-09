type ServiceSectionProps = {
  id?: number;
  title: string;
  subTitle: string;
  imgPath: string;
  imgAlt: string;
  text: string;
};

type BlogSiteSectionProps = {
  id?: number;
  imgPath: string;
  alt: string;
  date: string;
  linkHref: string;
  text: string;
};

type ProductionProps = {
  linkHref: string;
  imgPath: string;
  alt: string;
  title: string;
  skills?: string;
  topText?: string;
  pageText?: string;
  home?: boolean;
  // true のものは一覧・ページに表示しない(データは残す)
  hidden?: boolean;
};

type ExperienceItemType = {
  period: string;
  title: string;
  text?: string;
  // 案件ごとなど、箇条書きで見せたい内容
  points?: string[];
  // lib/information.ts の skills と同じ表記にすると、アイコンが付く
  skills?: string[];
};

type skillArrayType = {
  title: string;
  skills: string[];
};

type iconsArrayType = {
  href: string;
  src: string;
  alt: string;
  className: string;
};

type MenuItem = {
  href: string;
  text: string;
  icon?: string;
};
