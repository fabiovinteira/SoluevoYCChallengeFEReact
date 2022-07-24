import Head from "../Head";
import Top from "../Top";
import Footer from "../Footer";

export default function PageDefault(props) {
    return (
        <>
            <Head />
            <Top />
            {props.children}
            <Footer />
        </>
    );
}