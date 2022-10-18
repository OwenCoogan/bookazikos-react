import moment from 'moment';
import Avatar from '../avatar/Avatar';
import Button from '../buttons/Button';
import Tag from '../tag/Tag';

type PostHeaderType = {
  title: string;
  author: any;
  createdAt: string;
  publicationStatus: string;
  tags: any[];
}

export default function PostHeader({
  title,
  author,
  createdAt,
  publicationStatus,
  tags,
}: PostHeaderType) {
  return (
    <>
    <div className="mb-4 md:mb-0 w-full mx-auto relative" style={
      {height: "24em",}
    }>
    <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white mb-10 w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96">From the blog</h1>
        <div className="absolute left-0 bottom-0 w-full h-full z-10 ">
            <img src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" className="absolute left-0 top-0 w-full h-full z-0 object-cover grayscale" />
          </div>
        <div className="p-4 absolute bottom-0 left-0 z-20">
          <h2 className="text-4xl font-semibold text-white leading-tight">
            {title}
          </h2>
          <div className="flex items-center space-x-4">
            <Avatar
              src=""
              user={author}
            />
            <div className="font-medium text-white dark:text-white mb-3">
                <div>{author.firstName+ ' ' +author.lastName}</div>
                <Tag
                  tagTitle={moment(createdAt).format("DD MMM YYYY")}
                  tagColor="warning"
                />
                <Tag
                  tagTitle={publicationStatus.toUpperCase()}
                  tagColor={
                    publicationStatus === "published" ? "success" : "warning"
                  }
                />
            </div>
        </div>
          {
            tags.map((tag: any) => {
              return (
                <Tag
                  key={tag.id}
                  tagTitle={tag.name}
                  tagColor="primary"
                />
              )
            })
            }
        </div>
      </div>
      </>
  )
}
