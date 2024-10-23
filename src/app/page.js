import Client from "./components/client";
import Service from "./components/service";
import About from "./components/about";
import Explore from "./components/explore";
import Listing from "./components/listing";
import Slider from "./components/slider";
import Team from "./components/team";
import Newsletter from "./components/newsletter";
import Post from "./components/post";

export default function Home() {
    return (
        <>
            <Client />
            <Service />
            <About />
            <Explore />
            <Listing />
            <Slider />
            <Team />
            <Newsletter />
            <Post />
        </>
    );
}
