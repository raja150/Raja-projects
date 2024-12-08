import React, { useState, forwardRef, FormEvent } from "react";
import {
    Box,
    Grid,
    Button,
    TextField,
    Typography,
    Container,
    Avatar,
    Checkbox,
    FormControlLabel,
    Snackbar,
    Stack,
    Slide,
    SlideProps,
    Alert as MuiAlert,
    ThemeProvider,
    createTheme,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import bg from "./signin.svg";
import bgimg from "./backimg.jpg";

// Alert component with forwardRef for Snackbar
const Alert = forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof MuiAlert>>(
    function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    }
);

// Dark theme using Material-UI's createTheme
const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

// Inline styles
const boxStyle: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "75%",
    height: "70%",
    backgroundColor: "#fff",
    boxShadow: "24px",
};

const centerStyle: React.CSSProperties = {
    position: "relative",
    top: "50%",
    left: "37%",
};

// Slide transition for Snackbar
function TransitionLeft(props: SlideProps) {
    return <Slide {...props} direction="left" />;
}

// Login Component
const Login: React.FC = () => {
    const [open, setOpen] = useState(false); // Snackbar open state
    const [remember, setRemember] = useState(false); // Checkbox state
    const navigate = useNavigate();

    const vertical = "top";
    const horizontal = "right";

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setOpen(true);
        const formData = new FormData(event.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        if (!email || !password) {
            console.error("Email or password is missing");
            return;
        }

        // Fake login simulation
        if (email === "admin" && password === "1234") {
            sessionStorage.setItem('user', 'admin')
            navigate("/dashboard");
        } else {
            setOpen(true);
        }
    };

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === "clickaway") return;
        setOpen(false);
    };
    const handleSnakbar = () => {
        setOpen(false);
    }
    return (
        <>
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleSnakbar}
                TransitionComponent={TransitionLeft}
                anchorOrigin={{ vertical, horizontal }}
            >
                <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
                    Failed! Enter correct username and password.
                </Alert>
            </Snackbar>
            <div
                style={{
                    backgroundImage: `url(${bgimg})`,
                    backgroundSize: "cover",
                    height: "100vh",
                    color: "#f5f5f5",
                }}
            >
                <Box sx={boxStyle}>
                    <Grid container>
                        {/* Left side with image */}
                        <Grid item xs={12} sm={12} lg={6}>
                            <Box
                                style={{
                                    backgroundImage: `url(${bg})`,
                                    backgroundSize: "cover",
                                    marginTop: "40px",
                                    marginLeft: "15px",
                                    marginRight: "15px",
                                    height: "63vh",
                                    color: "#f5f5f5",
                                }}
                            ></Box>
                        </Grid>

                        {/* Right side with form */}
                        <Grid item xs={12} sm={12} lg={6}>
                            <Box
                                style={{
                                    backgroundSize: "cover",
                                    height: "70vh",
                                    minHeight: "500px",
                                    backgroundColor: "#69b9ff",
                                }}
                            >
                                <ThemeProvider theme={darkTheme}>
                                    <Container>
                                        <Box height={35} />
                                        <Box sx={centerStyle}>
                                            <Avatar
                                                sx={{ ml: "35px", mb: "4px", bgcolor: "#ffffff" }}
                                            >
                                                <LockOutlinedIcon />
                                            </Avatar>
                                            <Typography component="h1" variant="h4">
                                                Sign In
                                            </Typography>
                                        </Box>
                                        <Box
                                            component="form"
                                            noValidate
                                            onSubmit={handleSubmit}
                                            sx={{ mt: 2 }}
                                        >
                                            <Grid container spacing={1}>
                                                {/* Username */}
                                                <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                                                    <TextField
                                                        required
                                                        fullWidth
                                                        id="email"
                                                        label="Username"
                                                        name="email"
                                                        autoComplete="email"
                                                    />
                                                </Grid>
                                                {/* Password */}
                                                <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                                                    <TextField
                                                        required
                                                        fullWidth
                                                        name="password"
                                                        label="Password"
                                                        type="password"
                                                        id="password"
                                                        autoComplete="new-password"
                                                    />
                                                </Grid>
                                                {/* Remember Me & Forgot Password */}
                                                <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                                                    <Stack direction="row" spacing={2}>
                                                        <FormControlLabel
                                                            sx={{ width: "60%" }}
                                                            control={
                                                                <Checkbox
                                                                    checked={remember}
                                                                    onChange={() => setRemember(!remember)}
                                                                />
                                                            }
                                                            label="Remember me"
                                                        />
                                                        <Typography
                                                            variant="body1"
                                                            component="span"
                                                            onClick={() => navigate("/reset-password")}
                                                            style={{ marginTop: "10px", cursor: "pointer" }}
                                                        >
                                                            Forgot password?
                                                        </Typography>
                                                    </Stack>
                                                </Grid>
                                                {/* Sign In Button */}
                                                <Grid item xs={12} sx={{ ml: "5em", mr: "5em" }}>
                                                    <Button
                                                        type="submit"
                                                        variant="contained"
                                                        fullWidth
                                                        size="large"
                                                        sx={{
                                                            mt: "10px",
                                                            borderRadius: 28,
                                                            color: "#ffffff",
                                                            backgroundColor: "#FF9A01",
                                                        }}
                                                    >
                                                        Sign In
                                                    </Button>
                                                </Grid>
                                                {/* Register */}
                                                <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                                                    <Stack direction="row" spacing={2}>
                                                        <Typography variant="body1">
                                                            Not registered yet?{" "}
                                                            <span
                                                                style={{ color: "#beb4fb", cursor: "pointer" }}
                                                                onClick={() => navigate("/register")}
                                                            >
                                                                Create an Account
                                                            </span>
                                                        </Typography>
                                                    </Stack>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Container>
                                </ThemeProvider>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </>
    );
};

export default Login;
