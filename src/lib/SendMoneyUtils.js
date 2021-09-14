// validate send money fields
export const UvalidateSendMoneyFields  =  (globalState, bindThis) => {
    let {ReceipientWallet, Amount, PayWith,SelectedNetwork} = globalState // this.props

    // refs
    let _ReceipientWallet = bindThis._ReceipientWallet.current
    let _Amount = bindThis._Amount.current
    let _PayWith = bindThis._PayWith.current


    let refs  = [_ReceipientWallet,_Amount,_PayWith]

    

    // check if all fields are populated
    if(ReceipientWallet === "" || Amount === "" || PayWith === ""){
        console.log('log all fields')


        // show red border on error fields
        refs.forEach(ref=>{

            if(!ref.classList.contains('payWithContainer') && ref.value.length < 1){
                ref.classList.remove('sendMoneyInput')
                ref.classList.add('dangerBorder')
                console.log('log all empyt')

            }

            if(!ref.classList.contains('payWithContainer') && ref.value.length > 0 ){
                ref.classList.remove('dangerBorder')
                ref.classList.add('sendMoneyInput') 
                
            }

            if(ref.classList.contains('payWithContainer') && PayWith.length < 1){
                ref.classList.remove('primaryBorder')
                ref.classList.add('dangerBorder')
                console.log('log pay with empty')


            }

            if(ref.classList.contains('payWithContainer') && PayWith.length > 0){
                ref.classList.remove('dangerBorder')
                ref.classList.add('primaryBorder')
            }

            console.log(ref.value)
        })

        bindThis.setState({ErrorMessage:'fill all fields',showErrorMessage: true})
        return 
    }

    // clear warning on all populated fields
    if(Amount !== '' || ReceipientWallet !== "" || PayWith !== ""){
        refs.forEach(ref => {
            ref.classList.remove('dangerBorder')
            

            if(!ref.classList.contains('payWithContainer')){
                ref.classList.add('sendMoneyInput')
            }
            
            if(ref.classList.contains('payWithContainer')){
                ref.classList.add('primaryBorder')

            }
            
        })

        bindThis.setState({ErrorMessage: '', showErrorMessage: false})
    }

    // check if the receipient wallet field is not too long
    if(ReceipientWallet.length > 35){
        _ReceipientWallet.classList.add('dangerBorder')

        bindThis.setState({ErrorMessage:'sorry we couldnt process this email'})
        return
    }

    // check if amount is in range
    if(parseFloat(_Amount.value) > 2000){
        _Amount.classList.add('dangerBorder')
        _Amount.value = 2000

        bindThis.setState({ErrorMessage:'You cant transact with more than ¢2000'})
        return
    }

    if(parseFloat(Amount) < 1 ){
        _Amount.value = 0

    }

    // check if network is selected
    if(SelectedNetwork === ''){
        bindThis.setState({ErrorMessage: 'Please select a network',showErrorMessage: true})
        return
    }


}



// clear all fields 
export const uClearAllfields = (globalState,bindThis) => {
    let {AAmount,AReceipientWallet,APayWith} = globalState // this.props - redux actions
    // refs
    let _ReceipientWallet = bindThis._ReceipientWallet.current
    let _Amount = bindThis._Amount.current
    let _PayWith = bindThis._PayWith.current

    // put refs in an array
    let refs  = [_ReceipientWallet,_Amount,_PayWith]

    // clear all input field
    refs.forEach(ref => {
        ref.value =''
    })

    Promise.all([
        AAmount('AMOUNT',''),
        AReceipientWallet('RECEIPIENTWALLET',''),
        APayWith('PAY WITH',''),
    ])

    bindThis.setState({ErrorMessage: '', showErrorMessage: false})

    // clear global state


}

export const UselectNetwork = (e,globalState,bindThis) => {
    let {ANetwork} = globalState

    let vodafone = bindThis.vodafoneN.current
    let mtn = bindThis.mtnN.current
    let direct = bindThis.directN.current

    let Networks = [vodafone,mtn,direct]

    let selectedNetwork = Networks.filter(network => e.target === network)
    let notSelectedNetwork = Networks.filter(network => e.target !== network)

    // show which network is selected
    selectedNetwork[0].children[0].style.visibility = 'visible'
    selectedNetwork[0].classList.add('networkSelected')

    const selectedNetworkName = selectedNetwork[0].classList[0]

    // hide check on all 
    notSelectedNetwork.forEach(network=> {
        network.children[0].style.visibility = 'hidden'
        network.classList.remove('networkSelected')

    })



    // dishpatch to state
    ANetwork('SET NETWORK', selectedNetworkName)
    

    console.log(selectedNetworkName)
}           

export const UFetchSavedUsers = async (axios,endpoint) => {
    let response = await axios.get(endpoint, {
        headers: {"x-auth-token": sessionStorage.getItem('token')}
    })

    // check to see if theres a server error
    if(response.data.error){
        return "sorry we couldnt fetch users that you have saved"
    }

    // check if the array is populated
    if(response.data.length < 1){
        return false
    }
    
    if(response.data.length > 0){
        return response.data
    }

    // console.log(response)
}

