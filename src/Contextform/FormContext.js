import React, { createContext, useContext, useState} from "react";

export const FormContext = createContext()
export const FormAddContext = createContext()


export const useForms = () => {
    return useContext(FormContext);
}
export const useAddForms = () => {
    return useContext(FormAddContext);
}
export const FormProvider = ({ children }) => {
    const [details, setdetails] = useState([]);
    const [Delete, setdelete] = useState([]);
    const [Edit, setedit] = useState([])
    
    const addData = (values) => {
        setdetails([...details, values])
        console.log("kk")
    }
    const editData = (values) => {
        let updatevalue = [...details];
       // console.log(updatevalue)
       let index=Edit.key;
       console.log(index);
        updatevalue.splice(index-1, 1, values)
        setdetails(updatevalue);
        console.log("jj")
    }
    console.log(details)
    const onEdit = (details, index) => {
        setedit(details, index);
        console.log(index)
    }
    const onDelete = (record, index) => {
        // console.log("b",record)
        // console.log("c",index)

        setdelete(index);
        details.splice(index, 1);
        console.log(index);

        // setdetails( (details)=>{
        //     return details.filter((details)=>details.index!==record.index)
        // });
    }
    return (
        <FormContext.Provider value={{ details, setdetails, Edit }}>
            <FormAddContext.Provider value={{ addData, onDelete, onEdit, editData }}>
                {children}
            </FormAddContext.Provider>
        </FormContext.Provider>
    )
}
//export default FormProvider;