import { Box, Button, Divider, Flex, Heading, IconButton, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import { collection, deleteDoc, doc, query, where } from "firebase/firestore";
import { Fragment, h } from "preact";
import { route } from "preact-router";
import { useCollection } from "react-firebase-hooks/firestore";
import { BsXLg } from "react-icons/bs";
import { FadeInSlideLeft, FadeInSlideRight } from "../../components/animations/FadeSlide";
import useStorage from "../../hooks/useStorage";
import { db } from "../../util/firebase-config";
import style from "./style.css";

const Series = ({ user, setHeaderTitle }) => {
  setHeaderTitle("Series");
  // Get users series
  const seriesRef = collection(db, "series");
  const [series, seriesLoading] = useCollection(query(seriesRef, where("__owner", "==", user && user.uid)));
//   console.log("series: ", series?.docs);

  const removeSeries = async (id: any) => {
    await deleteDoc(doc(db, "series", id));
  };

  // useStorage option (modified to be used as context)
  const [seriesId, setSeriesId] = useStorage("seriesId", {
    initVal: "",
    bool: false,
  });

  return (
    <Fragment>
      <Flex justifyContent="space-between" alignItems="end">
        <FadeInSlideRight>
          <Heading as="h4" color="blue.400">
            Select series
          </Heading>
        </FadeInSlideRight>

        {/* Upload Button */}
        <FadeInSlideLeft>
          <Button
            colorScheme="blue"
            variant="outline"
            boxShadow="md"
            _visited={{ color: "blue" }}
            onClick={() => route("/upload")}
          >
            Upload
          </Button>
        </FadeInSlideLeft>
      </Flex>

      <Divider mt={3} border="8px" />

      <List>
        {seriesLoading ? (
          <Flex justifyContent="center" alignItems="center" mt={8}>
            <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
          </Flex>
        ) : (
          series?.docs.map((series) => (
            <Fragment>
              <FadeInSlideLeft>
                <ListItem key={series.id} className={style.selectList}>
                  <Flex justifyContent="space-between">
                    <Box
                      onClick={() => {
                        setSeriesId(series.id);
                        route("/races");
                      }}
                    >
                      <Text>{series.data().event}</Text>
                      <Text fontSize="xs" color="gray.400">
                        {series.id}
                      </Text>
                    </Box>
                    <IconButton
                      aria-label="Remove series"
                      icon={<BsXLg />}
                      size={"sm"}
                      variant="ghost"
                      colorScheme={"blue"}
                      onClick={(e) => {
                        e.preventDefault();
                        removeSeries(series.id);
                      }}
                    />
                  </Flex>

                  <Text fontSize="xs" color="gray.400">
                    {series.data().venue}
                  </Text>
                </ListItem>
              </FadeInSlideLeft>
            </Fragment>
          ))
        )}
      </List>
    </Fragment>
  );
};

export default Series;
