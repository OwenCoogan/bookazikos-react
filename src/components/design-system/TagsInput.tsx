import { useState } from 'react'
import Tag from './tag/Tag';
import TextInput from './TextInput';

type TagsTypes = {
    handleSubmit: (tags: string[]) => void;
}


function TagsInput({
    handleSubmit,
}: TagsTypes){
    const [tags, setTags] = useState([
        "HTML", "CSS", "JavaScript"
    ])

    function onKeyDown(e: any) {
      if (e.key === 'Enter') {
        e.preventDefault();
        setTags([...tags, e.target.value])
        handleSubmit(tags)
        e.target.value = ''
      }
    }

    return (
        <div className="w-full md:w-full px-3 mb-6">
          <div className="tags-input-container">
              { tags.map((tag, index) => (
                  <Tag
                      tagTitle={tag}
                      tagColor="tertiary"
                  />
              )) }
          </div>
        <TextInput
            label="Add a tag"
            inputName="tag"
            type="text"
            placeholder="Add a tag"
            onKeyDown={onKeyDown}
            onChange={(event) => {
            }}
        />
        </div>
    )
}

export default TagsInput
