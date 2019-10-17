import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    title: {
        padding: 20,
        fontSize: 24,
        color: '#ffffff',
        fontWeight: "bold",
        alignSelf: "center"
    },
    button: {
        backgroundColor: '#306f',
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
        color: '#306f',
        padding: 10,
    },
    textArea: {
        fontSize: 40
    },
    viewInput: {
        paddingHorizontal: 20
    },
    statusBar: {
        backgroundColor: '#306f',
    },
    textButton: {
        textAlign: 'center',
        fontSize: 16,
        alignSelf: "center",
        color: '#ffffff'
    },
    header: {
        backgroundColor: '#306f',
        alignItems: "flex-end"
    },
    containerButton: {
        paddingVertical: 50,
        alignItems: 'center'
    },
    warningText:{
        alignSelf: 'center',
        color: '#f31f33'
    }
})