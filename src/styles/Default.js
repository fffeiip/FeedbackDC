import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    title: {
        padding: 20,
        fontSize: 24,
        color: '#ffffff',
        fontWeight: "bold",
        alignSelf: "center"
    },
    headerTitle: {
        padding: 10,
        fontSize: 20 ,
        color: '#ffffff',
        fontWeight: "bold",
        alignItems: "center"
    },
    button: {
        backgroundColor: '#0f0550',
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    textInput: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 8,
        fontSize: 16,
        color: '#0f0550',
        padding: 10,
    },
    textArea: {
        fontSize: 40
    },
    viewInput: {
        paddingVertical: 30,
        paddingHorizontal: 20
    },
    containerList:{
        paddingVertical: 30,
        paddingHorizontal: 20
    },
    statusBar: {
        backgroundColor: '#0f0550',
    },
    textButton: {
        textAlign: 'center',
        fontSize: 16,
        alignSelf: "center",
        color: '#ffffff'
    },
    textItem: {
        textAlign: 'center',
        fontSize: 16,
        alignSelf: "center",
        color: 'black'
    },
    header: {
        backgroundColor: '#0f0550',
        alignItems: "flex-end"
    },
    containerButton: {
        paddingVertical: 50,
        alignItems: 'center'
    },
    containerButtonFeedback: {
        flex: 1,
        paddingVertical: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemListFeedback: {
        paddingVertical: 15,
        borderRadius: 20,
        backgroundColor: "#15fb",
        flexDirection: 'row',
        alignItems: 'center',
        margin: 4,
        padding: 15,
    },
    warningText: {
        alignSelf: 'center',
        color: '#f31f33'
    },
    item: {
        borderRadius: 20,
        backgroundColor: "#15fb",
        margin: 4,
        padding: 20,
        flex:1,
    },
    itemList: {
        flex:1,
    },
    itemFeedbak: {
        borderRadius: 20,
        backgroundColor: "#0f0555",
        flex: 1,
        margin: 4,
        padding: 20,
    }
})