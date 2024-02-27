import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import postPledge from "../api/post-pledge";

import "./Form.css";

function PledgeForm(props) {

    const navigate = useNavigate();
    
    const {project} = props;
    const {id} = useParams()
    const [pledges, setPledges] = useState({
        amount: null, 
        comment: "",
        anonymous: false,
        project: id

    });
    
    

    const handleChange = (event) => {
        const { id , value } = event.target;
        setPledges((prevPledges) => ({
            ...prevPledges,
            [id]:value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const authToken = window.localStorage.getItem("token");
        if (authToken) {
            postPledge(
                pledges.amount,
                pledges.comment,
                pledges.anonymous,
                pledges.project,
                authToken
            ).then((response) => {
                console.log(response);
                window.location.reload();
            });
        }
    };

    return (

        <form className="pledge-form">
            <div>
                <label htmlFor="amount">Amount:</label>
                <input 
                    type="number"
                    id="amount" 
                    placeholder="10"
                    onChange={handleChange}
                />   
            </div>
            <div>
                <label htmlFor="comment">Comment:</label>
                <input 
                    type="text"
                    id="comment" 
                    placeholder="Say something"
                    onChange={handleChange}
                />   
            </div>
            <div>
                <label htmlFor="anonymous">Anonymous?</label>
                <input type="checkbox" name="anonymous" id="anonymous" value={pledges.anonymous} onChange={handleChange}/>
            </div>
            {/* <div>
                <label htmlFor="project">Project:</label>
                <input 
                    type="number"
                    id="project" 
                    placeholder="0"
                    onChange={handleChange}
                />   
            </div> */}
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    )
    
}

export default PledgeForm;