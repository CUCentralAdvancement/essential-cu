import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "theme-ui";
import {
  Box,
  Flex,
  theme,
  Grid,
  Button,
  Link,
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
              <Link url="https://giving.cu.edu/fund-search">
                <Button
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
                </Button>
              </Link>
              <PaddedText>CU Advancement | CU Foundation</PaddedText>
              <PaddedText>1800 Grant Street | Denver, CO 80203</PaddedText>
              <PaddedText>
                <Link sx={plainLinkStyles} url="tel:3035411290">
                  303-541-1290
                </Link>
              </PaddedText>
              <PaddedText>
                <Link sx={plainLinkStyles} url="mailto:giving@cu.edu">
                  giving@cu.edu
                </Link>
              </PaddedText>
              <PaddedText>
                <Link
                  sx={plainLinkStyles}
                  url="https://www.cu.edu/privacy-policy"
                >
                  Privacy Policy
                </Link>{" "}
                |{" "}
                <Link
                  sx={plainLinkStyles}
                  url="https://www.cu.edu/terms-service"
                >
                  Terms of Service{" "}
                </Link>
              </PaddedText>
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

const plainLinkStyles = {
  color: "black",
  textDecoration: "none",
  ":hover": {
    textDecoration: "underline",
  },
};

const PaddedText = ({ children }) => (
  <Text sx={{ pl: [1, 0], pb: 1 }}>{children}</Text>
);
PaddedText.propTypes = { children: PropTypes.any.isRequired };
