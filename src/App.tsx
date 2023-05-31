import "animate.css/animate.min.css";
import { useEffect, useState } from "react";
import "./App.scss";
import Section from "./components/Section";
import Button from "./components/buttons/Button";
import Card from "./components/card/Card";
import Link from "./components/card/Link";
import Input from "./components/inputs/Input";
import BookLinks from "./components/ui/BookLinks";
import Footer from "./components/ui/Footer";
import Header from "./components/ui/Header";
import Intro from "./components/ui/Intro";
// Advanced Stats Icons
import Loader from "./components/Loader";
import Iconbutton from "./components/buttons/Iconbutton";
import BR from "./images/icon-brand-recognition.svg";
import DR from "./images/icon-detailed-records.svg";
import FC from "./images/icon-fully-customizable.svg";
//
import arrowUp from "./images/arrow_up_icon.svg";

function App() {
  const [link, setlink] = useState<string>("");
  const [genLinks, setGenLinks] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [copied, setCopied] = useState<string>();
  const [classN, setClassN] = useState<string>();
  const [atBtm, setAtBtm] = useState(false);
  const [inputError, setInputError] = useState<string>();
  const [linkClassNames, setLinkClassNames] = useState(
    Array(genLinks.length).fill("")
  );
  const [valid, setValid] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > window.outerHeight) {
      setAtBtm(true);
    } else {
      setAtBtm(false);
    }
  };

  const handleClearState = () => {
    setGenLinks([]);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const shortenLink = async () => {
    if (isValid(link)) {
      // Clear any pre-existing links
      if (genLinks.length > 0 && isValid(link) === false) handleClearState();
      // Load sequence
      setLoading(true);
      try {
        await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`).then(
          async (res) => {
            let sl = await res.json().then((res) => res);
            let links = [
              sl.result.short_link,
              sl.result.short_link2,
              sl.result.short_link3,
            ];
            setGenLinks(links);
            setLoading(false);
          }
        );
      } catch (error) {
        console.log(error);
      }
    } else {
      setInputError("Please add a link");
      setValid(false);
      return;
    }
  };

  const isValid = (value: string) => {
    if (value === "") {
      return false;
    } else {
      return true;
    }
  };

  const handleInputChange = (value: string) => {
    if (isValid(value) === false) {
      setInputError("Please add a link");
      setValid(false);
    } else {
      setlink(value);
      setInputError("");
      setValid(true);
    }
  };

  const handleStyleChange = (index: number, className: string) => {
    const updatedClassNames = [...linkClassNames];
    updatedClassNames[index] = className;
    setLinkClassNames(updatedClassNames);
  };

  /**const handleStyleChange = (id: number, text: string) => {
    let style = "";
    let ln = [...genLinks]

    ln[id] = ""
    genLinks?.filter((li, idx) => {
      if (idx === id) {
        setClassN("copied");
      } else {
        setClassN("");
      }
      return li;
    });
  }; */

  return (
    <main>
      <Header />
      <Intro />
      <Section className="adv-stat">
        <div className="search-container">
          <div className="input_error">
            <Input
              placeholder="Shorten a link here..."
              autoFocus
              onChange={(e) => handleInputChange(e.target.value)}
              className={valid === false ? "error" : ""}
            />
            <p className="err-tag">{inputError}</p>
          </div>
          <Button type="square" onClick={() => shortenLink()}>
            Shorten It!
          </Button>
        </div>
        <div className="shortened-links">
          {loading && <Loader />}
          {genLinks?.map((ln, idx) => {
            return (
              <Link
                key={idx}
                link={link}
                generatedLink={ln}
                onCopy={(t, b) => handleStyleChange(idx, "copied")}
                className={linkClassNames[idx]}
              />
            );
          })}
        </div>
        <div className="header">
          <h2>Advanced Statistics</h2>
          <h4>
            Track how your links are performing across the web with our advanced
            statistics dashboard
          </h4>
        </div>
        <div className="info-rack">
          <div className="rack"></div>
          <div className="ab">
            <Card header="Brand Recognition" icon={BR}>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </Card>
            <Card header="Detailed Records" icon={DR}>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </Card>
            <Card header="Fully Customizable" icon={FC}>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </Card>
          </div>
        </div>
      </Section>
      <BookLinks />
      <Footer />
      {/** Scroll Top Button */}
      {atBtm && (
        <Iconbutton
          className="top-btn"
          onClick={() =>
            window.scroll({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          <img src={arrowUp} alt="arrow-up-icon" />
        </Iconbutton>
      )}
    </main>
  );
}

export default App;
