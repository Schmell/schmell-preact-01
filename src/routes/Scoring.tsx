import { Fragment, FunctionalComponent, h } from "preact";
import { useState } from "preact/hooks";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../util/firebase-config";
import { EventsList } from "./scoring/EventsList";
import { RacesList } from "./scoring/RacesList";
import { ScoringSetUp } from "./scoring/ScoringSetup";

const Scoring: FunctionalComponent = () => {
  // This should be the entry point to the scoring app
  // Maybe we can figure out scoring system from series data (ie: postion, finish, etc..)
  // This pagge should probably heve a way to select the race you wanna score
  //
  const [user] = useAuthState(auth);
  const [event, setEvent] = useState<string>("");
  const [race, setRace] = useState<string>("");
  const [raceProperties, setRaceProperties] = useState<string | null>();

  /*
   * Need to make the state persistent
   */

  return (
    <Fragment>
      {!event && <EventsList user={user} setEvent={setEvent}></EventsList>}
      {event && !race && (
        <RacesList event={event} setRace={setRace}></RacesList>
      )}
      {race && (
        <ScoringSetUp
          race={race}
          setRaceProperties={setRaceProperties}
          event={event}
        ></ScoringSetUp>
      )}
    </Fragment>
  );
};

export default Scoring;