import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { doc, getDoc } from "firebase/firestore";
import { FunctionalComponent, h } from "preact";
<<<<<<< HEAD
import { useEffect, useState } from "preact/hooks";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../util/firebase-config";
import Footer from "./footer";
import Header from "./header";
import Routing from "./Routing";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  gray: {
    "50": "#F0F2F4",
    "100": "#D6DAE0",
    "200": "#BCC3CC",
    "300": "#A2ABB9",
    "400": "#8894A5",
    "500": "#6E7C91",
    "600": "#586474",
    "700": "#424B57",
    "800": "#2C323A",
    "900": "#16191D",
  },
  teal: {
    "50": "#ECF8F8",
    "100": "#CBECEB",
    "200": "#A9DFDE",
    "300": "#88D3D1",
    "400": "#66C7C5",
    "500": "#45BAB8",
    "600": "#379593",
    "700": "#29706E",
    "800": "#1B4B4A",
    "900": "#0E2525",
  },
  blue: {
    "50": "#EAF2FA",
    "100": "#C6DCF1",
    "200": "#A1C5E8",
    "300": "#7CAFDF",
    "400": "#5798D6",
    "500": "#3282CD",
    "600": "#2868A4",
    "700": "#1E4E7B",
    "800": "#143452",
    "900": "#0A1A29",
  },
};
=======
import { useState } from "preact/hooks";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../util/firebase-config";
import SidebarWithHeader from "./header/SidebarWithHeader";
import Routing from "./Routing";
import { colors } from "./theme";
>>>>>>> bba0015782d41309e2b4fa53740d1ca6f1b17d7c

const theme = extendTheme({ colors });

const App: FunctionalComponent = () => {
<<<<<<< HEAD
  // I would like to have routes nested with AuthRoute
  // I would like to keep urls clean and be able to pass refs
  const [user] = useAuthState(auth)
  if(!user) return null
  const [navPath, setNavPath ] = useState()
  const [eventPath, setEventPath] = useState()
  const [racePath, setRacePath] = useState()
  // if (!navPath) setNavPath('/events')
  // Set up our function to save our navigation to firebase
  useEffect(()=>{
    const setNavPaths = async ()=>{
      const userDoc =  await getDoc(doc(db, 'users', user!.uid))
      const eventPath = await userDoc.data()?.eventPath
      setEventPath(eventPath)
      const racePath = await userDoc.data()?.racePath
      setRacePath(racePath)
    }
    setNavPaths()
  }, [eventPath, racePath])

  return(
  <ChakraProvider resetCSS theme={theme}>
    <div id="preact_root">
      <Header />
      <div class="page">
        <Routing 
          user={user} 
          eventPath={eventPath} 
          setEventPath={setEventPath}
          racePath={racePath}
          setRacePath={setRacePath}
        />
      </div>
      <Footer />
    </div>
  </ChakraProvider>
)};
=======
  const [user, userLoading, userError] = useAuthState(auth);

  const [headerTitle, setHeaderTitle] = useState("Blw Me");

  return (
    <ChakraProvider resetCSS theme={theme}>
      <SidebarWithHeader headerTitle={headerTitle}>
        <div class="page">
          <Routing user={user} setHeaderTitle={setHeaderTitle} />
        </div>
      </SidebarWithHeader>
    </ChakraProvider>
  );
};
>>>>>>> bba0015782d41309e2b4fa53740d1ca6f1b17d7c

export default App;
