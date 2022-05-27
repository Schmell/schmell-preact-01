import { Button } from "@chakra-ui/react";
import { h } from "preact";
import { auth } from "../util/firebase-config";

export function SignOut() {
  return (
    auth.currentUser && (
      <Button
        className="sign-out"
        variant="outline"
        colorScheme="blue"
        boxShadow="md"
        mr={3}
        onClick={() => auth.signOut()}
      >
        Sign Out
      </Button>
    )
  );
}
