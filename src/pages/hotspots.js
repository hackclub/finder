import { Container, Flex, Heading } from "@hackclub/design-system";
import React, { Fragment } from "react";
import Helmet from "react-helmet";
import HotspotCard from "components/hotspots/HotspotCard";
import hotspots from "hotspots";

const HotspotsPage = () => (
    <Fragment>
        <Helmet title="Club Hotspots" />
        <Container align="center" color="black" px={3} w={1} style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "center" }}>
            <Heading.h1 f={[5, 6]} mt={4}>Club Hotspots Around the World</Heading.h1>
            <Flex py={3} wrap>
                {hotspots.map(hotspot => <HotspotCard key={hotspot.name} data={hotspot} />)}
            </Flex>
        </Container>
    </Fragment>
);

export default HotspotsPage;