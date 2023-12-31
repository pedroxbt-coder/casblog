import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import type Author from "../interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <section className="mb-20 xl:mb-28">
      <div className="mb-8 md:mb-14">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>

      <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <p className="text-lg leading-relaxed mb-4 border-b">{excerpt}</p>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <div className="order-2 sm:order-1">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="order-1 mb-4 sm:order2">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
