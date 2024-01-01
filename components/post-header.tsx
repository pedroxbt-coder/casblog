import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import type Author from "../interfaces/author";
import Outcomes from "./outcomes";
import Link from "next/link";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
  outcomes: string;
};
//dentro del post
const PostHeader = ({ title, coverImage, date, author, outcomes }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <Outcomes outcomes={outcomes} />
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-8 md:mb-16 ">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
