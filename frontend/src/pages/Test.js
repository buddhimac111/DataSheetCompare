const { default: NavBar } = require("../components/NavBar");

const Test = () => {
  return (
    <>
      <NavBar />
      <div className="p-5">
        {/* <form action="http://localhost:5000/merge" method="post" enctype="multipart/form-data">
          <input type="file" name="photos" multiple/>
          <input type="submit" value="Get me the stats!" class="btn btn-default"/>            

        </form> */}

        {/* <form action="http://localhost:5000/uploadmultiple"  enctype="multipart/form-data" method="POST">
            Select images: <input type="file" name="myFiles" multiple/>
            <input type="submit" value="Upload your files"/>
        </form> */}

        <form action="http://localhost:5000/upload"  enctype="multipart/form-data" method="POST">
            Select images: <input type="file" name="excel" multiple="true"/>
            <input type="submit" value="Upload your files"/>
        </form>
        <br/>

        <form action="http://localhost:5000/getImages"  enctype="multipart/form-data" method="POST">
            <input type="submit" value="Get Result"/>
        </form>
      </div>
    </>
  );
};

export default Test;
