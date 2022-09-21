export default function PostListCardItem(
  post:any,
) {
    return (
      <tr>
        <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
          {post.title}
        </td>
        <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
            Written by <span className="font-semibold">{post.author}</span>
        </td>
        <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
          {post.createdAt}
        </td>
      </tr>
    )
}
