import {
  HStack,
  Image,
  List,
  ListItem,
  SkeletonText,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

function GenreList() {
  const { data, isLoading, error } = useGenres();

  if (error) return <Text>genres didn't load</Text>;

  const skeletons = [1, 2, 3, 4, 5, 6];
  if (isLoading)
    return (
      <List>
        {skeletons.map(() => (
          <ListItem>
            <SkeletonText paddingY={5} />
          </ListItem>
        ))}
      </List>
    );

  //if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={1}>
          <HStack>
            <Image
              boxSize={8}
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
