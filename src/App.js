import {GlobalStyle} from "./GlobalStyle";

//Component
import Header from "./components/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";
import Login from "./components/Login";

//Routing
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//Context
import UserProvider from "./context";

const App = () => {
    return (
        <Router>
            <UserProvider>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/:movieId" element={<Movie/>}/>
                    <Route path="/*" element={<NotFound/>}/>
                </Routes>
                <GlobalStyle/>
            </UserProvider>
        </Router>
    );
};

export default App;
