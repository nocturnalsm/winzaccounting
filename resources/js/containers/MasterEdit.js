import React, { useState, useEffect, useRef, useImperativeHandle } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CCard, CCardBody, CCardFooter, CCardHeader, CForm, CButton, CInvalidFeedback } from '@coreui/react'
import { setAppEditing, setAppLoading} from "../store";
import MyAlert from "../alert";
import CIcon from '@coreui/icons-react'
import axios from 'axios'

const MasterEdit = React.forwardRef(({children, ...props}, ref) => {

    const {id} = useParams()
    const [initialData, setInitialData] = useState({})
    const [data, setData] = useState({})
    const [validated, setValidated] = useState(false)
    const [submitError, setSubmitError] = useState({})

    const dispatch = useDispatch()
    const loading = useSelector(state => state.appLoading)

    const handleChange = (values) => {
        let oldData = data
        let newData = {...data, ...values}
        setData(newData)
        if (props.onChangeData){
            props.onChangeData(oldData, newData)
        }
    }

    const inputRefs = useRef({});

    const refs = (index) => {
        if (!inputRefs.current.hasOwnProperty(index)){
            inputRefs.current[index] = React.createRef()
        }
        return inputRefs.current[index]
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget
        event.preventDefault()
        event.stopPropagation()
        setValidated(true)

        let request = props.formatData ? props.formatData(data) : data
        setData(request)

        if (form.checkValidity() === true) {
            const submit = async () => {
                try {
                    const response = await axios({
                        method: id ? 'put' : 'post',
                        url: props.apiUrl + (id ? "/" +id : ''),
                        data: request
                    })
                    return response
                }
                catch(err){
                    return {
                        error : {
                            message: err.response.data.message,
                            errors: err.response.data.errors
                        }
                    }
                }
            }
            dispatch(setAppLoading(true));
            submit()
            .then((response) => {
                dispatch(setAppLoading(false));
                if (response.error){
                    if (response.error.errors){
                        setSubmitError(response.error.errors);
                        let firstError = Object.keys(response.error.errors)[0];
                        if (inputRefs.current && inputRefs.current.hasOwnProperty(firstError)){
                            inputRefs.current[firstError].current.focus()
                        }
                    }
                    else {
                        let message = response.error.message ?? 'Something went wrong';
                        MyAlert.error({text: message});
                    }
                    if (props.onSubmitError){
                        props.onSubmitError(data, response)
                    }

                }
                else {
                    MyAlert.success({text: 'Data saved successfully'})
                    setSubmitError({})
                    if (!id){
                        setData({})
                    }
                    if (props.onSubmitSuccess){
                        props.onSubmitSuccess(request, response)
                    }
                    let firstKey = Object.keys(inputRefs.current)[0];
                    if (inputRefs.current[firstKey].current){
                        inputRefs.current[firstKey].current.focus()
                    }
                }
                setValidated(false);
            });
        }
    }

    const resetForm = () => {
        handleChange(initialData)
    }

    useEffect(() => {
        dispatch(setAppEditing(true));

        if (id){
            dispatch(setAppLoading(true))
            axios.get(props.apiUrl + "/" + id)
            .then(response => {
                dispatch(setAppLoading(false))
                let dataId = id ? {id: id} : {}
                setData({...dataId, ...response.data})
                if (props.onOpen){
                    props.onOpen(response.data)
                }
            })
            .catch(error => {
                dispatch(setAppLoading(false))
                MyAlert.error({text: error.message})
                if (props.onGetDataError){
                    props.onGetDataError(error)
                }
            })
        }
        else {
            if (props.onOpen){
                props.onOpen()
            }
        }


    }, [])

    useEffect(() => {
        return () => {
            dispatch(setAppEditing(false))
        }
    }, []);

    useImperativeHandle(ref, () => ({

        getRef(index) {
            let resultRef = refs(index)
            if (resultRef){
                return resultRef.current;
            }
        }

    }));

    let childProps = {
        data: data,
        loading: loading,
        inputRefs: refs,
        handleChange: handleChange,
        isInvalid: (property) => submitError.hasOwnProperty(property),
        feedback: (property, errorText) => (
            <CInvalidFeedback>{
                submitError.hasOwnProperty(property) ?
                submitError[property][0] : (errorText ?? 'Unknown Error')
            }
            </CInvalidFeedback>
        )
    }
    return (
        <CCard>
            <CCardHeader>
                <h3>
                  <CButton>
                    <CIcon size="lg" name="cilArrowCircleLeft" />
                  </CButton>
                  {id && id != "" ? 'Edit ' + props.title : 'Create ' + props.title}
                </h3>
            </CCardHeader>
            <CCardBody>
                <CForm className="form-horizontal needs-validation" noValidate wasValidated={validated} onSubmit={handleSubmit}>
                    {children(childProps)}
                </CForm>
            </CCardBody>
            <CCardFooter>
                <CButton className="mr-2" type="submit" onClick={event => handleSubmit(event)} size="md" color="primary">
                    <CIcon name="cil-scrubber" /> Submit
                </CButton>
                <CButton className="mr-2" type="reset" onClick={resetForm} size="md" color="danger">
                    <CIcon name="cil-ban" /> Reset
                </CButton>
            </CCardFooter>
        </CCard>
    )
})

export default MasterEdit
