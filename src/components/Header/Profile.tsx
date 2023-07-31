import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Ismael Albert</Text>
          <Text color="gray.300" fontSize="small">
          maelworkspace@gmail.com

          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Ismael Albert"
        src="https://avatars.githubusercontent.com/u/62386498?v=4"
      ></Avatar>
    </Flex>
  );
}
