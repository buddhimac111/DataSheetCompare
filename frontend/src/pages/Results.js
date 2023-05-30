import React, { Component } from "react";
import NavBar from "../components/NavBar";
import ScrollUpBtn from "../components/ScrollUpBtn";
import { useEffect, useState } from "react";

const Result = () => {
  const [equalId, setEqualId] = useState([]);
  const [idsInAmazonSheetButNotInVASheet, setIdsInAmazonSheetButNotInVASheet] = useState([]);
  const [idsInVASheetButNotInAmazonSheet, setIdsInVASheetButNotInAmazonSheet] = useState([]);
  const [ebayId, setEbayId] = useState([]);

  const fetchData = async () => {
    await fetch("https://datasheets.onrender.com/getresult")
    /* await fetch("http://localhost:5000/getresult") */
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // console.log(data.equal);
        // console.log(data.not_eqaul);
        setEqualId(data.equal);
        setIdsInAmazonSheetButNotInVASheet(data.idsInAmazonSheetButNotInVASheet);
        setIdsInVASheetButNotInAmazonSheet(data.idsInVASheetButNotInAmazonSheet);
        setEbayId(data.ebay);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <NavBar />
      <div className="row m-0 p-0" style={{ overflowX: "hidden" }}>
        <div className="col-sm m-0 p-0">
          <div className="d-flex h-100">
            <div className="w-100 p-4" id="matchBox">
              <h2 className="pb-3">Matching IDs</h2><hr />
              {equalId &&
                equalId.length > 0 &&
                equalId.map((equalIdObj, index) => (
                  <li key={equalIdObj}>{equalIdObj}</li>
                ))}
            </div>
            <div className=" w-100 p-4" id="ebayBox">
              <h2 className="pb-3">Ebay IDs</h2><hr />
              {ebayId &&
                ebayId.length > 0 &&
                ebayId.map((ebayIdObj, index) => (
                  <li key={ebayIdObj}>{ebayIdObj}</li>
                ))}
            </div>
          </div>
        </div>

        <div className="col-sm m-0 p-0">

        <div className="d-flex h-100">
            <div className="w-100 p-4" id="matchBox">
              <h4 className="pb-3">Amazon & VA (Amazon Only)</h4><hr />
              {idsInAmazonSheetButNotInVASheet &&
                idsInAmazonSheetButNotInVASheet.length > 0 &&
                idsInAmazonSheetButNotInVASheet.map((objIdsInAmazonSheetButNotInVASheet, index) => (
                  <li key={objIdsInAmazonSheetButNotInVASheet}>{objIdsInAmazonSheetButNotInVASheet}</li>
                ))}
            </div>
            <div className=" w-50 p-4" id="ebayBox">
              <h4 className="pb-3">Amazon & VA (VA Only)</h4><hr />
              {idsInVASheetButNotInAmazonSheet &&
                idsInVASheetButNotInAmazonSheet.length > 0 &&
                idsInVASheetButNotInAmazonSheet.map((objIdsInVASheetButNotInAmazonSheet, index) => (
                  <li key={objIdsInVASheetButNotInAmazonSheet}>{objIdsInVASheetButNotInAmazonSheet}</li>
                ))}
            </div>
          </div>
          
        </div>


      </div>
      <ScrollUpBtn />
    </>
  );
};

export default Result;