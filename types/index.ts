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
