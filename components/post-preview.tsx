import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import type Author from "../interfaces/author";
import post from "../interfaces/post";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  category: string;
};

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  category,
}: Props) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>

      <h3 className="text-3xl mb-3 leading-snug">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <p className="text-lg border-b mb-2">{category}</p>
      <p className="text-lg leading-relaxed mb-2 border-b">{excerpt}</p>
      <div className="flex md:flex-col xl:flex-row xl:justify-between xl:items-center">
        <div className="order-2 sm:order-1 xl:order-2 sm:mb-2">
          <DateFormatter dateString={date} />
        </div>
        <div className="order-1 sm:order-2 xl:order-1">
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
