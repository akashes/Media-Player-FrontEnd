import React, { useState } from "react";
import Add from "../Components/Add";
import Category from "../Components/Category";
import View from "../Components/View";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
function Home() {
	const [uploadVideoServerResponse,setUploadVideoServerResponse]=useState({})
	return (
		<>
			<div style={{height:'200px'}}  className="container mt-4 d-flex align-items-center justify-content-between">
				<div className="add">
					<Add setUploadVideoServerResponse={setUploadVideoServerResponse} />
				</div>
				<Link to={"/watch-history"} style={{ textDecoration: "none", color: "white" }} className="fs-5">
					Watch History
				</Link>
			</div>

			<Row style={{minHeight:'70vh'}} className="container-fluid w-100  mb-5 align-items-center ">
				<Col lg={8} className="allVideos">
					<h3>All Videos</h3>
					<div className="videos">
						<View uploadVideoServerResponse={uploadVideoServerResponse} />
					</div>
				</Col>
				<Col></Col>
				<Col lg={3} className="ms-5 category">
					<Category />
				</Col>
			</Row>
		</>
	);
}

export default Home;
