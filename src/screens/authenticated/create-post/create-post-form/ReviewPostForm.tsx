import Button from '../../../../components/design-system/buttons/Button';
import Text from '../../../../components/design-system/Text';
import { PostPropType } from '../CreatePost';

export function ReviewPostForm({post,onSubmit}: {post:PostPropType,onSubmit:() => void} ){
  return (
    <div
      className='bg-white p-8 w-1/5 m-auto h-screen flex flex-col justify-center items-center'
    >
      <Text
        additionalClasses='text-2xl font-bold'
        text={post.title ? post.title : 'No title'}
        variant='title'
      />
      <Text
        text={post.content ? post.content : 'No content'}
        variant='body'
      />
      <img src={post.image ? "": ""} alt='post' />
      <Button
        onClick={onSubmit}
        color='primary'
      >
        Submit
      </Button>
    </div>
  )
}
