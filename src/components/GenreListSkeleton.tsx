import { ListItem, Skeleton } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <ListItem paddingY="5px">
      <Skeleton height="32px" borderRadius={20} />
    </ListItem>
  );
};

export default GenreListSkeleton;
