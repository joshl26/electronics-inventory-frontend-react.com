import { useState, useEffect } from "react";
import axios from "axios";

function ImagePicker(props) {
  const token = sessionStorage.getItem("token");

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState({});
  const [imageData, setImageData] = useState("");

  const handleSelectFile = (e) => setFile(e.target.files[0]);

  useEffect(() => {
    console.log(file);
    console.log(imageData);
  }, [file, imageData]);

  const handleUpload = async () => {
    const config = {
      headers: {
        "Content-type":
          "multipart/form-data" /* This content-type must be set when sending form-data */,
        Authorization: `Bearer ${token}`,
        // Cookie:
        //   "session=s%3AMnMrBy6DU1VLH6Z95NiV7JxPAi_ymNRX.CB5BoN3oq0DkQBr7LvsPhBpgu%2FJ4HYVW%2Bk7tUXOARWs; jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikpvc2giLCJpYXQiOjE2ODEyOTU3MTQsImV4cCI6MTY4MTkwMDUxNH0.0Qs_Xdb4V3d6AUes64U7AazaNjpxGBJLxwOIRYhl33s",
      },
    };
    try {
      setLoading(true);
      const data = new FormData();
      data.append("my_file", file);
      const res = await axios.post(
        "http://localhost:3500/parts/upload",
        // "https://electronics-inventory-server.onrender.com/parts/upload",

        data,
        config
      );

      setRes(res.data);

      setImageData({
        _id: res.data.asset_id,
        url: res.data.url,
        fileName: res.data.public_id,
      });

      props.setImages([
        ...props.images,
        {
          _id: res.data.asset_id,
          url: res.data.url,
          fileName: res.data.public_id,
        },
      ]);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="App">
      <label htmlFor="file" className="btn-grey">
        {" "}
        select file
      </label>
      {file && <center> {file.name}</center>}
      <input
        id="file"
        type="file"
        onChange={handleSelectFile}
        multiple={false}
      />
      <code>
        {Object.keys(res).length > 0
          ? Object.keys(res).map((key) => (
              <p className="output-item" key={key}>
                <span>{key}:</span>
                <span>
                  {typeof res[key] === "object" ? "object" : res[key]}
                </span>
              </p>
            ))
          : null}
      </code>
      {file && (
        <>
          <button onClick={handleUpload} className="btn-green">
            {loading ? "uploading..." : "upload to cloudinary"}
          </button>
        </>
      )}
    </div>
  );
}
export default ImagePicker;
