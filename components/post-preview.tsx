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
      <div className="flex flex-col md:flex-col lg:flex-row lg:justify-between lg:items-center">
        <div className="order-1 sm:order-1 lg:order-2 lg:mb-0 mb-2">
          <DateFormatter dateString={date} />
        </div>
        <div className="order-2 sm:order-2 lg:order-1">
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
