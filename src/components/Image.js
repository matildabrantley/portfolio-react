import "../index.css";

function Image({ ratio, src }) {
    return (
      <div className="img-container">
        <div className="img-nested-container">
          <div className="dims" style={{paddingTop: `${ratio*100}%`}}>
            <div className="nested-dims">
              <img src={src} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Image;