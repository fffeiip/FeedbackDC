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
        fontSize: 20,
        color: '#ffffff',
        fontWeight: "bold",
        alignItems: 'center'
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
        paddingTop: '5%',
        borderBottomWidth: 1,
        borderRadius: 8,
        fontSize: 16,
        color: '#0f0550',
    },
    textArea: {
        fontSize: 40
    },
    viewInput: {
        paddingTop: '5%',
        paddingHorizontal: '5%',
        height: '30%'
    },
    containerList: {
        flex: 1,

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
    textFeedback: {
        textAlign: 'left',
        fontSize: 16,
        color: '#ffffff'
    },
    header: {
        backgroundColor: '#0f0550',
        alignItems: 'flex-end',
    },
    containerButton: {
        paddingVertical: '10%',
        alignItems: 'center'
    },
    containerButtonFeedback: {
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
        flex: 1,
        borderRadius: 20,
        backgroundColor: "#15fb",
        margin: '2%',
        padding: 20

    },
    itemList: {
        flex: 1,
    },
    itemFeedbak: {
        borderRadius: 20,
        backgroundColor: "#0f0555",
        flex: 1,
        margin: 4,
        padding: 20,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    }
})