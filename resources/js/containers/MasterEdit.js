import React, { useState, useEffect, useRef, useImperativeHandle } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CCard, CNav, CNavItem, CNavLink, CCardBody, CCardFooter, CRow, CCol,
         CCardHeader, CForm, CLabel, CBadge, CButton, CInvalidFeedback } from '@coreui/react'
import { setAppEditing, setAppLoading} from "../store";
import MyAlert from "../alert";
import CIcon from '@coreui/icons-react'
import axios from 'axios'
import Sticky from '../components/StickyComponent'


const MasterEdit = React.forwardRef(({children, formData, ...props}, ref) => {

    const {id} = useParams()
    const [data, setData] = useState(formData)
    const [initialData, setInitialData] = useState(formData)
    const [validated, setValidated] = useState(false)
    const [submitError, setSubmitError] = useState({})
    const [submitted, setSubmitted] = useState(0)
    const [navElements, setNavElements] = useState([])
    const [activeNavigation, setActiveNavigation] = useState();

    const dispatch = useDispatch()
    const loading = useSelector(state => state.appLoading)
    let history = useHistory()

    const handleChange = (values) => {
        let oldData = data
        let newData = {...data, ...values}
        setData(newData)
        if (props.onChangeData){
            props.onChangeData(oldData, values)
        }
    }
    
    useEffect(() => {
        if (!id){
            setData(formData)
        }
    }, [submitted])

    const inputRefs = useRef({});

    useEffect(() => {
        if (props.navigation){
          setNavElements(props.navigation.map((item, index) => {
              if (index == 0){
                  setActiveNavigation(item.target)
              }
              return document.querySelector(item.target)
          }))
        }
    }, [])    

    const handleDelete = () => {
       
        MyAlert.confirm({
            title: 'Are you sure to delete this data ?',
            confirmAction: () => {
                axios.delete(props.apiUrl + "/" + id)
                .then(() => {
                    MyAlert.success({text: "Data successfully deleted"})
                    history.goBack()
                })
                .catch((error) => {
                    MyAlert.error({text: error.response})
                })
            }
        })
        
    }
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
        if (form.checkValidity() === true) {            
            let newData = {}
            Object.keys(formData).filter(function(x){
                if (data[x] !== undefined) {
                    newData[x] = data[x]
                }
                else {
                    newData[x] = formData[x]
                }
            });
            let request = props.formatData ? props.formatData(newData) : newData
            setData(request)
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
                    if (props.onSubmitSuccess){
                        props.onSubmitSuccess(request, response)
                    }
                    let firstKey = Object.keys(inputRefs.current)[0];
                    if (inputRefs.current[firstKey].current){
                        inputRefs.current[firstKey].current.focus()
                    }
                    setSubmitted(submitted+1)
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
                let newData = {...formData, ...response.data}
                if (formData.id){
                    newData.id = id
                }
                setData(newData)
                setInitialData(newData)
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
                submitError[property][0] : (errorText ?? 'Field is required')
            }
            </CInvalidFeedback>
        ),
        activeNavigation: activeNavigation
    }
    return (
        <>
            <CRow>
                <CCol lg="9">                
                    <CForm className="form-horizontal needs-validation editForm" noValidate wasValidated={validated} onSubmit={handleSubmit}>
                        <CCard>
                            <CCardHeader className="py-1 px-3">                                
                                <div className="d-flex flex-wrap flex-sm-nowrap">
                                    <div>
                                        <h4 className="mb-0">
                                        <CButton className="btn-ghost pl-0" onClick={e => history.goBack()}>
                                            <CIcon size="2xl" name="cilArrowCircleLeft" />
                                        </CButton>
                                        {id && id != "" ? 'Edit ' + props.title : 'Create ' + props.title}
                                        </h4>
                                    </div>                
                                    {props.navigation ? (
                                        <div className="order-2 px-4 pb-2 pb-sm-0 order-sm-1 col-12 col-sm-auto align-self-center">
                                            <CNav variant="pills" className="justify-content-between">
                                                {
                                                    props.navigation.map((item, index) => (
                                                        <CNavItem key={index}>
                                                            <CNavLink active={item.target == activeNavigation} onClick={() => setActiveNavigation(item.target)}>                                                      
                                                                {item.icon ? (
                                                                    <CIcon className="mr-sm-2" name={item.icon} />
                                                                ) : ''
                                                                }
                                                                <span className="d-none d-sm-inline">{item.title}</span>
                                                            </CNavLink>
                                                        </CNavItem>
                                                    ))
                                                }
                                            </CNav>
                                        </div>
                                    ) : ''}
                                    <div className="order-1 order-sm-3 ml-auto">
                                        { id ? (
                                            <CButton onClick={handleDelete} color="danger" className="mt-2">
                                                <CIcon name="cil-trash" className="mr-sm-2" />
                                                <span className="d-none d-sm-inline">Delete</span>
                                            </CButton>
                                        ) : '' }
                                    </div>
                                </div>                               
                            </CCardHeader>
                            <CCardBody>
                                {children(childProps)}     
                            </CCardBody>
                            <CCardFooter>
                                <CButton className="mr-2" type="submit" size="md" color="primary">
                                    <CIcon name="cil-scrubber" /> Submit
                                </CButton>
                                <CButton className="mr-2" type="reset" onClick={resetForm} size="md" color="danger">
                                    <CIcon name="cil-ban" /> Reset
                                </CButton>
                            </CCardFooter>
                        </CCard>
                    </CForm>
                </CCol>                
                <CCol lg="3" className="pl-lg-0 pr-lg-4">
                    <CCard>
                        <CCardHeader>
                            Data Information
                        </CCardHeader>
                        <CCardBody className="p-0">    
                            <div class="list-group list-group-flush">
                                <div class="list-group-item d-flex justify-content-between align-items-center">
                                    <CLabel className="font-weight-bold">Status</CLabel>
                                    <CBadge className="px-4 py-2" color="primary" className="p-2">DRAFT</CBadge>                                    
                                </div>
                                <div class="list-group-item d-flex justify-content-between align-items-center">
                                    <div>
                                        <CLabel className="font-weight-bold">Created by</CLabel>
                                        <p className="mb-1">Administrator</p>
                                        <CLabel className="font-weight-bold">Created at</CLabel>                                   
                                        <p className="mb-1">{data.created_at}</p>
                                    </div>
                                </div>
                            </div>                                         
                        </CCardBody>
                    </CCard>                    
                </CCol>
            </CRow>
        </>
    )
})

export default MasterEdit
