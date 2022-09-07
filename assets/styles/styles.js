import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    alignViews:{
        alignItems:'center',
        justifyContent:'center'
    },
    textTitle:{
        marginBottom:'5%',
        fontSize:22
    }
    }); 
const viewChilds = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#00000020',
        padding:'5%'
    },
    containerResult:{
        backgroundColor:'#00000020',
        padding:'5%'
    },
    directionContainer:{
        flexDirection:'row'
    },
    containerButton:{
        margin:'5%',
        width:'100%'
    },
    button:{
        margin:'2%',
        backgroundColor:'#33BCFF',
        padding:'2%',
        borderRadius:5
    },
    textButton:{
        fontSize:14
    }
});


export {styles,viewChilds}