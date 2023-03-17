import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./puzzle.css";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import img from "./Breakfast.png";
import { GAME1_ROUTE } from "../Constants/routes";
  
function Jigsaw() {
    const navigate = useNavigate();
    const [text, setText] = useState("Unpuzzle the pieces!!");
    const [showButton, setShowButton] = useState(false); 
      
    const set = () => {
        setText("Congratulations!!");
        setShowButton(true); // update state to show the button
    };
      
    return (
        <>
            <h2 className="tag">{text}</h2>
            <JigsawPuzzle
                imageSrc={img}
                rows={2}
                columns={2}
                onSolved={set}
                className="jigsaw-puzzle"
            />
            {showButton  && (
                 <button
                 type="button"
                 className="btn jigsaw-btn--continue"
                 onClick={() => navigate(GAME1_ROUTE)}
               >
                 Continue
               </button>
            )     
            }    
        </>
    );
}
  
export default Jigsaw;