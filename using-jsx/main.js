import React from "react";
import ReactDOM from "react-dom/client";
import * as ImagesJSONData from "./data/images.json";

// React.createElement

function createHeader() {
  const header = React.createElement(
    "h1",
    {},
    "This is a sample header component"
  );
  const rootEle = ReactDOM.createRoot(document.getElementById("root"));
  rootEle.render(header);
}
createHeader();

// React Element - JSX
const headingUsingJSX = (
  <div>
    <h1 tabIndex='1' className='header'>
      This is a header component using JSX
    </h1>
    <h1 className='header'>This is a another header component using JSX</h1>
  </div>
);

function createHeaderUsingJSX() {
  const rootEle = ReactDOM.createRoot(document.getElementById("rootUsingJSX"));
  rootEle.render(headingUsingJSX);
}
createHeaderUsingJSX();

// React functional components
const HeaderComponent = () => {
  return (
    <header>
      <h1>Header {Math.random()}</h1>
    </header>
  );
};

const FooterComponent = () => {
  return (
    <footer>
      <h1>Footer</h1>
    </footer>
  );
};

const NavComponent = () => {
  return (
    <ul>
      <li>Menu 1</li>
      <li>Menu 2</li>
      <li>Menu 3</li>
      <li>Menu 4</li>
    </ul>
  );
};

const MainComponent = () => {
  const imageDetails = ImagesJSONData.imageArray;
  return (
    <div>
      <h3>Image gallery</h3>
      <div className='image-container'>
        {imageArray.map((imgDetails) => {
          return (
            <ImageComponent key={imageDetails.id} details={imageDetails} />
          );
        })}
      </div>
    </div>
  );
};

const ImageComponent = (props) => {
  const { id, title, description, url } = props.details;
  return (
    <div className='img'>
      <p>{title}</p>
      <img
        width='100'
        height='100'
        alt='img'
        src={require(`../assets/img.jpg`)}
      />
      <p>{description}</p>
    </div>
  );
};

function createPageUsingFunctionalComp() {
  const page = (
    <div>
      <div>
        <HeaderComponent></HeaderComponent>
      </div>
      <div>{NavComponent()}</div>
      <div>
        <MainComponent />
      </div>
      <div>
        <FooterComponent />
      </div>
    </div>
  );
  const rootEle = ReactDOM.createRoot(
    document.getElementById("rootForFunctionalComponents")
  );
  rootEle.render(page);
}
createPageUsingFunctionalComp();
