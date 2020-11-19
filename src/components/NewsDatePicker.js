import React from "react";
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css'; 
// import { DatesRangeInput } from 'semantic-ui-calendar-react';

class NewsDatePicker extends React.Component {  
    state = {    
        startDate: ''
    };   
    
    handleChange = date => {
        this.setState({startDate: date});  
        // this.setState({ [name]: value });
    };

    // blurDates = () => {
    //     const datesRanges = this.state.datesRange.split(" - ")
    //     const fromADate = new Date(datesRanges[0])
    //     let userTimezoneOffset = fromADate.getTimezoneOffset() * 60000
    //     const offsetfromADate = new Date(fromADate.getTime() + userTimezoneOffset)
    //     const toADate = new Date(datesRanges[1])
    //     userTimezoneOffset = toADate.getTimezoneOffset() * 60000
    //     const offsettoADate = new Date(toADate.getTime() + userTimezoneOffset)
    
    //     const myDates = this.props.foursomes.filter(f => {
    //       const fDate = new Date(f.play_date)
    //       userTimezoneOffset = fDate.getTimezoneOffset() * 60000
    //       const offsetfDate = new Date(fDate.getTime() + userTimezoneOffset)
    //       if (offsetfDate > offsetfromADate && offsetfDate <= offsettoADate) {
    //         return f
    //       } else {
    //         return null
    //       }
    //     })
    //     this.setState({
    //       foursomes: myDates
    //     })
    // }
    
    render() { 
        return (
            <div>
                <DatePicker
                    placeholderText="Select Date"        
                    selected={this.state.startDate}        
                    onChange={this.handleChange}      
                />
                {/* <DatesRangeInput
                    name="datesRange"
                    placeholder="Select From - To"
                    value={this.state.datesRange}
                    iconPosition="left"
                    onChange={this.handleChange}
                    dateFormat={"MM/DD/YYYY"}
                    onBlur={this.blurDates}
                    style={{width: 180}}
                /> */}
            </div>
        );  
    }
}

export default NewsDatePicker;