type TagPropTypes = {
  tagTitle?: string;
  tagColor: "primary" | "secondary" | "tertiary" | "warning" | "danger" | "success";
}

export default function Tag({
  tagTitle,
  tagColor,
}: TagPropTypes) {
  return (
    <span className={`bg-${tagColor}-100 text-${tagColor}-800 text-xs inline-block font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-${tagColor}-200 dark:text-${tagColor}-800`}>
      {tagTitle}
    </span>
  );
}
