

export default  {
    protect: (payload) => {
        if(payload == null){
            window.location = '/login'
        }
    }

}