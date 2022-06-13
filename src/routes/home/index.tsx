import { Box, Divider, Flex, Heading, Spinner, Text } from "@chakra-ui/react";
import { Fragment, h } from "preact";
import { Link } from "preact-router";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  FadeInSlideLeft,
  FadeInSlideRight,
} from "../../components/animations/FadeSlide";
import { SignIn } from "../../components/SignIn";
import { SignOut } from "../../components/SignOut";
import { auth } from "../../util/firebase-config";

const Home = ({ setHeaderTitle }) => {
  const [user, userLoading, userError] = useAuthState(auth);

  setHeaderTitle("Home");

  return (
    <Fragment>
      <Heading color="blue.400">
        <Flex justifyContent="space-between">
          <FadeInSlideRight>
            <Text>Home</Text>
          </FadeInSlideRight>
          <FadeInSlideLeft>{!user ? <SignIn /> : <SignOut />}</FadeInSlideLeft>
        </Flex>
      </Heading>

      <FadeInSlideRight>
        <Box m={3}>
          <Text fontSize="lg" fontWeight="bold">
            Welcome to On the Water RC
          </Text>

          <Divider my={3} />

          <Text fontSize="md">
            On The Water RC is sailboat racing scoring companion for the popular
            Sailwave desktop application
          </Text>
        </Box>
      </FadeInSlideRight>

      {userLoading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      ) : (
        <Fragment>
          <Divider my={5} />
          <Heading as="h4" fontSize={"lg"}>
            Where to from here
          </Heading>

          <Link href="/upload">
            <Text colorScheme={"blue"} color={"blue"}>
              Upload a sailwave file
            </Text>
          </Link>

          <Link href="/series">
            <Text colorScheme={"blue"} color={"blue"}>
              Select a Series
            </Text>
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
