import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import fontAwesome from "@fortawesome/fontawesome";
import brands from "@fortawesome/fontawesome-free-brands";
import solid from "@fortawesome/fontawesome-free-solid";
import { Flex, ThemeProvider } from "@hackclub/design-system";

// Easier reference to Font Awesome icons from components
fontAwesome.library.add(brands, solid);

const DefaultLayout = ({ children }) => (
    <ThemeProvider>
        <Helmet title="Finder — Hack Club" />
        <Flex flexDirection="column" style={{ minHeight: "100vh" }}>
            {children()}
        </Flex>
    </ThemeProvider>
);

DefaultLayout.propTypes = {
    children: PropTypes.func
};

export default DefaultLayout;