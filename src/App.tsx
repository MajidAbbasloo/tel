import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
import styled from "styled-components";
import { CHAIN } from "@tonconnect/protocol";
import "@twa-dev/sdk";
import { Text, Card, CardBody, Image } from "@chakra-ui/react";
import avatar from "./images/hasan.jpg";
import WebApp from "@twa-dev/sdk";

function App() {
  return (
    <Card>
      <Image src={avatar} h={200} w={300}></Image>
      <CardBody>
        <Text>{WebApp.initData}</Text>
        <Text>{WebApp.isExpanded}</Text>
        <Text>{"hui"}</Text>
        <Text>{WebApp.initData}</Text>
        <Text>{WebApp.initData}</Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
      </CardBody>
    </Card>
  );
}

export default App;
