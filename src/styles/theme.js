import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#1DB954", // Spotify green for primary accents
        },
        secondary: {
            main: "#757575", // Subtle gray for secondary elements
        },
        background: {
            default: "#F5F5F7", // Apple-style light gray background
            paper: "#FFFFFF", // Clean white for cards and surfaces
        },
        text: {
            primary: "#000000", // Bold black for text
            secondary: "#5E5E5E", // Subtle gray for secondary text
        },
    },
    shadows: [
        "none", // elevation={0}
        "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)", // elevation={1}
        "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)", // elevation={2}
        "0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)", // elevation={3}
        "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)", // elevation={4}
        "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12)", // elevation={5}
        "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)", // elevation={6}
        "0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12)", // elevation={7}
        "0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)", // elevation={8}
        "0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12)", // elevation={9}
        "0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12)", // elevation={10}
        "0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12)", // elevation={11}
        "0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12)", // elevation={12}
        "0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12)", // elevation={13}
        "0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12)", // elevation={14}
        "0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12)", // elevation={15}
        "0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12)", // elevation={16}
        "0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12)", // elevation={17}
        "0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12)", // elevation={18}
        "0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12)", // elevation={19}
        "0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12)", // elevation={20}
        "0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12)", // elevation={21}
        "0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12)", // elevation={22}
        "0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12)", // elevation={23}
        "0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12)", // elevation={24}
    ],
    typography: {
        fontFamily: "'San Francisco', 'Helvetica Neue', 'Arial', sans-serif", // Apple's typography
        h1: {
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
            fontSize:  "clamp(2rem, 2vw, 3.5rem)",
            fontWeight: 700,
            color: "#1DB954", // Spotify green for large headers
        },
        h2: {
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
            fontSize: "clamp(1.75rem, 2vw, 3rem)",
            fontWeight: 600,
            color: "#000000",
        },h3: {
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
            fontSize: "clamp(1.5rem, 2vw, 2rem)",
            fontWeight: 600,
            color: "#1DB954",
        },
        h4: {
            fontSize: "clamp(.25rem, 2vw, 1rem)",
            fontWeight: 600,
            color: "#1DB954",
        },
        body1: {
            fontSize: "1rem",
            lineHeight: 1.6,
            color: "#000000", // Clean black for readable body text
        },
        button: {
            textTransform: "none", // Apple's clean button style (no uppercase)
        },
    },
    components: {
        MuiListItem: {
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        color: '#5FBB7D',
                        backgroundColor: '#F0F3F3',
                    },
                },
            }
        },
        Container: {
            p: 0
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "24px", // Rounded buttons like Spotify's
                    p: 0,
                    fontSize: "1rem",
                },
                containedPrimary: {
                    backgroundColor: "#1DB954", // Spotify green
                    color: "#FFFFFF",
                    "&:hover": {
                        backgroundColor: "#1AA34A", // Slightly darker green  
                    },
                },
            },
        },
    },
    MuiContainer: {
        styleOverrides: {
            root: {
                padding: 0,
                '&.Mui-selected': {
                    color: '#5FBB7D',
                    backgroundColor: '#F0F3F3'
                }
            }
        }
    }
});

export default theme;