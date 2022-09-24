type TagPropTypes = {
  tagTitle: string;
  tagColor?: string;
}

export default function Tag({
  tagTitle,
  tagColor = "indigo",
}: TagPropTypes) {
  return (
    <span className={`bg-${tagColor}-100 text-${tagColor}-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-${tagColor}-200 dark:text-${tagColor}-800`}>
      {tagTitle}
    </span>
  );
}
