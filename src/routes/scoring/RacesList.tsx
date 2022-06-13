import {
  AddIcon,
  CalendarIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  EditIcon,
  NotAllowedIcon,
  ViewIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  IconButton,
  List,
  ListItem,
  Spinner,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { collection } from "firebase/firestore";
import { Fragment, h } from "preact";
import { route } from "preact-router";
<<<<<<< HEAD
import { useState } from "preact/hooks";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../../util/firebase-config";
import { formatDate } from "../../util/formatters";
import style from "./scoring.css";

export const RacesList = (props) => {
console.log(props);
  // const [user] = useAuthState(auth);
  const [path, setPath] = useState(props.eventPath)
  
  const seriesRef = collection(db, `/events/${path}/races`);
  const [races] = useCollection(seriesRef);
=======
import { useCollection } from "react-firebase-hooks/firestore";
import {
  FadeInSlideLeft,
  FadeInSlideRight,
} from "../../components/animations/FadeSlide";
import useStorage from "../../hooks/useStorage";
import { db } from "../../util/firebase-config";
import { formatDate } from "../../util/formatters";
import style from "./scoring.css";

export const RacesList = ({ setHeaderTitle }) => {
  setHeaderTitle("Races");
  const [seriesId, setSeriesId] = useStorage("seriesId");
  const [raceId, setRaceId] = useStorage("raceId", { initVal: "1" });
  const seriesRef = collection(db, `/events/${seriesId}/races`);
  const [races, racesLoading] = useCollection(seriesRef);

  console.log( seriesId);
  
  if(!racesLoading){
    console.log('races: ', races?.docs);

  }

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
>>>>>>> bba0015782d41309e2b4fa53740d1ca6f1b17d7c

  return (
    <Fragment>
      <Container>
        <FadeInSlideRight>
          <Heading
            as="h3"
            color="blue.400"
            position={"fixed"}
            w="100%"
            mt={2}
            pb={3}
            // height={"20px"}
            // bg={"white"}
            zIndex="+1"
          >
<<<<<<< HEAD
            <Flex alignItems="center" justifyContent="space-between">
              <Flex alignItems="center">
                {race.data().sailed == "1" ? (
                  <NotAllowedIcon color="gray.400" />
                ) : (
                  <CheckCircleIcon color="green.500" />
                )}
                <Text px={3}>
                  {race.data().name
                    ? race.data().name
                    : `Race ${race.data().rank}`}
                </Text>
              </Flex>
              <Flex gap={2} alignContent="flex-end">
                <Tooltip
                  label="Edit race settings"
                  aria-label="Edit race settings"
                >
                  <IconButton
                    className={style.whiteIcon}
                    aria-label="Edit race settings"
                    colorScheme="blue"
                    size="xs"
                    _visited={{ color: "white" }}
                    icon={<EditIcon />}
                    disabled={race.data().sailed === "1"}
                    onClick={() => {
                      // Either use context here or maybe save to db as state
                      props.setRacePath(`/events/${props.navPath}/races/${race.data().raceid}`)
                      route("/race-properties");
                      // setRace(race.ref);
                    }}
                  />
                </Tooltip>
                <Tooltip
                  label="View race results"
                  aria-label="View race results"
                >
                  <IconButton
                    aria-label="View results "
                    colorScheme="blue"
                    size="xs"
                    icon={<ViewIcon />}
                    disabled={race.data().sailed === "0"}
                    onClick={({ target }) => {
                      route(
                        `/results/${race.data()._seriesid}/${
                          race.data().raceid
                        }`
                      );
                    }}
                  />
                </Tooltip>
                <Text fontSize="xs" width={16}>
                  {formatDate(race.data().date)}
                </Text>
              </Flex>
=======
            Select a race
          </Heading>
        </FadeInSlideRight>

        <List position={"relative"} top={14}>
          {/* Loading Spinner */}
          {racesLoading ? (
            <Flex justifyContent=" center" alignItems="center">
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
>>>>>>> bba0015782d41309e2b4fa53740d1ca6f1b17d7c
            </Flex>
          ) : (
            // Races loaded make a list
            races?.docs.map((race) => (
              <FadeInSlideLeft>
                {/* This is the list of races */}
                <ListItem key={race.id} className={style.selectList}>
                  <Flex alignItems="center" justifyContent="space-between">
                    <Flex alignItems="center">
                      {/* Icon for row */}
                      {race.data().sailed === "1" ? (
                        <CheckCircleIcon color="gray.400" boxSize={3} />
                      ) : race.data().sailed === "cancelled" ? (
                        <NotAllowedIcon color="gray.400" boxSize={3} />
                      ) : race.data().sailed === "postponed" ? (
                        <CalendarIcon color="gray.400" boxSize={3} />
                      ) : (
                        <AddIcon color="gray.400" boxSize={3} />
                      )}

                      {/* If Name else R+N */}
                      <Text px={3}>
                        {race.data().name
                          ? race.data().name
                          : `Race ${race.data().rank}`}
                      </Text>

                      <Text color="gray.400" px={3} fontSize="xs">
                        {/* Change the sailwave number to sailed or not and  */}
                        {race.data().sailed === "1" ? (
                          " - Sailed"
                        ) : race.data().sailed === "0" ? (
                          <Button
                            aria-label="Start Race"
                            colorScheme="green"
                            className={style.startRaceButton}
                            size="xs"
                            rightIcon={<ChevronRightIcon />}
                          >
                            Start race
                          </Button>
                        ) : (
                          capitalizeFirstLetter(race.data().sailed)
                        )}
                      </Text>
                    </Flex>

                    <Flex gap={2} alignContent="flex-end">
                      {/* Edit race button */}
                      <Tooltip
                        hasArrow
                        label="Edit race settings"
                        aria-label="Edit race settings"
                        placement="top-start"
                        bg="blue.300"
                      >
                        <span>
                          <IconButton
                            className={style.whiteIcon}
                            aria-label="Edit race settings"
                            colorScheme="blue"
                            size="xs"
                            _visited={{ color: "white" }}
                            icon={<EditIcon />}
                            disabled={race.data().sailed === "1"}
                            onClick={() => {
                              setRaceId(race.id);
                              route("/race-properties");
                            }}
                          />
                        </span>
                      </Tooltip>

                      {/* View race results */}
                      <Tooltip
                        hasArrow
                        label="View race results"
                        aria-label="View race results"
                        placement="top-start"
                        bg="blue.300"
                      >
                        <span>
                          <IconButton
                            aria-label="View results "
                            colorScheme="blue"
                            size="xs"
                            icon={<ViewIcon />}
                            disabled={race.data().sailed !== "1"}
                            onClick={({ target }) => {
                              route(
                                `/results/${race.data()._seriesid}/${
                                  race.data().raceid
                                }`
                              );
                            }}
                          />
                        </span>
                      </Tooltip>

                      {/* Race Date */}
                      <Text fontSize="xs" width={16} align="right">
                        {formatDate(race.data().date)}
                      </Text>
                    </Flex>
                  </Flex>
                </ListItem>
              </FadeInSlideLeft>
            ))
          )}
        </List>
      </Container>
    </Fragment>
  );
};
