import TextInput from "../components/TextInput";
import FILTERS from "./filters";

import { useState } from "react";
import "./form.css";
import "./NewListing.css";
const NewListing = (props) => {
    const filters = JSON.parse(FILTERS);
    
    const [bookInfo, setBookInfo] = useState({
        bookName: '',
        isbn: 0,
        condition: "",
        course: "",
        subject: "",
        professor: "",
        description: "",
    });



    return (
        <>
            {/* <Navbar /> */}
            <h1 className="page-title">Create a New Listing</h1>
            <form className="addListingForm">
                <div className="row">
                    <TextInput 
                        inputLable="Textbook Name"
                        placeholder="Name"
                        id="name" 
                        handleSubmit={props.handleSubmit}/>

                    <TextInput 
                        inputLable="ISBN"
                        placeholder="###-##-#####-##-#"
                        id="isbn" 
                        handleSubmit={props.handleSubmit}/>
                </div>

                <div className="row">
                    <div className="form-div">
                        <label htmlFor="sub-select" className="form-lable form-text">Subject</label>
                        <select name="sub-select" id="sub-select" className="form-text form-input select" onSubmit={(e) => {props.handleSubmit(e)}}>
                            <option defaultChecked="Select a Subject" value="default" hidden>Select a Subject</option>
                            {filters.subject.map(subject => {
                                return <option value={subject} key={subject}>{subject}</option>
                            })}
                        </select>
                        
                    </div>
                    <div className="quality-info form-div">
                        <label htmlFor="quality-select" className="form-lable form-text ">Quality</label>
                        <select name="quality-select" id="quality-select" className="form-text select form-input" onSubmit={(e) => {props.handleSubmit(e)}}>
                            <option defaultChecked="Quality of Book" value="default" hidden>Quality of Book</option>
                            {filters.condition.map(con => {
                                return <option value={con} key={con}>{con}</option>
                            })}
                            
                        </select>
                        
                    </div>
                </div>
                <div className="row">
                    <TextInput 
                        inputLable="Course"
                        placeholder="Course used in"
                        id="course" 
                        handleSubmit={props.handleSubmit}/>
                        
                    <TextInput 
                        inputLable="Professor"
                        placeholder="Professor Name"
                        id="prof" 
                        handleSubmit={props.handleSubmit}/>
                        
                </div>
                <TextInput 
                    inputLable="Description"
                    placeholder="Add any notes here"
                    id="desc" 
                    handleSubmit={props.handleSubmit}/>
                    

                <input type="submit" name="addListing" className="submit-add-listing form-text" />
            </form>
        </>
    );
}

export default NewListing;