import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "theme-ui";
import {
  Box,
  Flex,
  theme,
  Grid,
  LinkButton,
  Menu,
  Text,
} from "@cu-advancement/component-library";
import { menuLinks } from "../../../../data/menus/footerMenuLinks";

export default function Footer() {
  return (
    <ThemeProvider
      theme={{
        ...theme,
        // fontSizes: [12, 14, 16, 18, 20, 24, 32, 48, 64, 96],
      }}
    >
      <footer
        style={{
          backgroundColor: "#fff",
        }}
      >
        <div style={{ margin: "0 auto", maxWidth: "1280px", padding: "2rem" }}>
          <Grid gap={2} columns={[1, 2, 4]}>
            <Flex
              sx={{ py: 2, pl: [3, 0], flexDirection: "column" }}
              color="#000"
              fontWeight="light"
            >
              <LinkButton
                variant="primary"
                sx={{
                  px: 4,
                  color: "text",
                  fontSize: 3,
                  mb: 2,
                  fontWeight: 300,
                }}
              >
                Give Now
              </LinkButton>
              <PaddedText>CU Advancement | CU Foundation</PaddedText>
              <PaddedText>CU Advancement | CU Foundation</PaddedText>
              <PaddedText>1800 Grant Street | Denver, CO 80203</PaddedText>
              <PaddedText>303-541-1290</PaddedText>
              <PaddedText>giving@cu.edu</PaddedText>
              <PaddedText>Privacy Policy | Terms of Service</PaddedText>
            </Flex>
            <Box>
              <Menu
                title="About"
                links={menuLinks.about}
                variant="bgLight"
                linkDirection="column"
              />
            </Box>
            <Box>
              <Menu
                title="Quick Links"
                links={menuLinks.quicklinks}
                variant="bgLight"
                linkDirection="column"
              />
            </Box>
            <Box>
              <Menu
                title="Campuses"
                links={menuLinks.campuses}
                variant="bgLight"
                linkDirection="column"
              />
            </Box>
          </Grid>
        </div>
      </footer>
    </ThemeProvider>
  );
}

const PaddedText = ({ children }) => (
  <Text sx={{ pl: [1, 0], pb: 1 }}>{children}</Text>
);
PaddedText.propTypes = { children: PropTypes.any.isRequired };
