/* eslint-disable react/prop-types */
import TextInput from "../components/TextInput";
import FILTERS from "./filters";

import "./form.css";
import "./NewListing.css";
const NewListing = (props) => {
    const filters = JSON.parse(FILTERS);
    
    return (
        <>
            {/* <Navbar /> */}
            <h1 className="page-title">Create a New Listing</h1>
            <form className="addListingForm">
                <div className="row">
                    <TextInput 
                        inputLable="Textbook Name"
                        placeholder="Name"
                        id="bookName" 
                        name="bookName" 
                        handleChange={props.handleChange}
                        value={props.bookName}/>

                    <TextInput 
                        inputLable="ISBN"
                        placeholder="###-##-#####-##-#"
                        id="isbn" 
                        handleChange={props.handleChange}
                        value={props.isbn}/>
                </div>

                <div className="row">
                    <div className="form-div">
                        <label htmlFor="sub-select" className="form-lable form-text">Subject</label>
                        <select 
                            name="sub-select" 
                            id="sub-select" 
                            className="form-text form-input select" 
                            onChange={(e) => {props.handleChange(e)}}
                            value={props.subject}>
                            <option defaultChecked="Select a Subject" value="default" hidden>Select a Subject</option>
                            {filters.subject.map(subject => {
                                return <option value={subject} key={subject}>{subject}</option>
                            })}
                        </select>
                        
                    </div>
                    <div className="quality-info form-div">
                        <label htmlFor="condition" className="form-lable form-text ">Condition</label>
                        <select 
                            name="quality-select" 
                            id="condition" 
                            className="form-text select form-input" 
                            onChange={(e) => {props.handleChange(e)}}
                            value={props.condition}>
                            <option defaultChecked="Condition of Book" value="default" hidden>Condition of Book</option>
                            {filters.condition.map(con => {
                                return <option value={con} key={con}>{con}</option>
                            })}
                            
                        </select>
                        
                    </div>
                </div>
                <div className="row">
                    <TextInput 
                        inputLable="Course"
                        placeholder="Ex: CSE 101"
                        id="course" 
                        handleChange={props.handleChange}
                        value={props.course}/>
                        
                    <TextInput 
                        inputLable="Price"
                        id="price"
                        pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$" 
                        placeholder="$100.00"
                        value="" 
                        data-type="currency"  
                        handleChange={props.handleChange}
                        value={props.price}/>
                        
                </div>
                <TextInput 
                    inputLable="Image Url"
                    placeholder="Ex: https://photos.google.com"
                    classes="long-input"
                    id="imgSrc"
                    handleChange={props.handleChange}
                    value={props.imgSrc} />

                <TextInput 
                    inputLable="Description"
                    placeholder="Add any notes here"
                    classes="long-input"
                    id="desc"
                    handleChange={props.handleChange}
                    value={props.description}/>
                    
                <button 
                    className="submit-add-listing form-text"
                    onClick={props.handleSubmit}
                    type="button">Add Listing</button>
            </form>
        </>
    );
}

export default NewListing;